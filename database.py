from databases import Database

# connect to a SQLite database file
db = Database('sqlite:StressDatabase.db')

# helper functions for easy querying

# SELECT
async def get(query, values = {}):
  rows = await db.fetch_all(query=query, values=values)
  # return list(map(dict, rows))

  dicts = []
  for row in rows:
    dicts.append(dict(row))
  return dicts

# database functions
async def get_patient_care():
  return await get('SELECT Stressaffectingpatient_care FROM stress WHERE stressduringwork = 2')

# sample function
# async def get_todo_by_id(id):
#  return await get('SELECT * FROM todos WHERE id = :id', { "id": id })

async def get_alcohol_stressed():
  return await get('SELECT Alcohol_usage FROM stress WHERE  stressduringwork = 2')

async def get_alcohol_not_stressed():
  return await get('SELECT Alcohol_usage FROM stress WHERE  stressduringwork = 3')

async def get_patient_care():
  return await get('SELECT Stressaffectingpatient_care FROM stress WHERE stressduringwork = 2')


