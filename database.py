import sqlite3

# connect to a SQLite database file
con = sqlite3.connect("StressDatabase.db")

# helper functions for easy querying

# SELECT
async def get(query, values = {}):
  rows = await con.fetch_all(query=query, values=values)

# return list (map(dict, rows)) BUT DO I NEED THIS CODE BLOCK??
  # dicts = []
  # for row in rows:
  #   dicts.append(dict(row))
  # return dicts

# database functions

async def get_alcohol_stressed():
  return await get('SELECT alcoholUsage FROM stress WHERE  stressDuringWork = 2', con)

async def get_alcohol_not_stressed():
  return await get('SELECT alcoholUsage FROM stress WHERE  stressDuringWork = 3', con)

async def get_specialization():
  return await get('SELECT Specialization FROM stress WHERE feelingonJob = 3', con)
