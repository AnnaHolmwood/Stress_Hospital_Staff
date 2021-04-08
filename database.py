from databases import Database

# connect to a SQLite database file
db = Database('sqlite:StressDatabase.db')

# helper functions for easy querying

# SELECT
async def get(query, values = {}):
  rows = await db.fetch_all(query=query, values=values)

# return list (map(dict, rows)) BUT DO I NEED THIS CODE BLOCK??
  dicts = []
  for row in rows:
    dicts.append(dict(row))
  return dicts

# database functions

async def get_alcohol_stressed():
  return await get('SELECT Alcohol_usage FROM stress WHERE  stressduringwork = 2')

async def get_alcohol_not_stressed():
  return await get('SELECT Alcohol_usage FROM stress WHERE  stressduringwork = 3')

async def get_specialization():
  return await get('SELECT Specialization FROM stress WHERE feelingonjob = 3')
