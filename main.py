from sanic import Sanic, response
from sanic.exceptions import NotFound
from ML_model import predict_col11, predict_col12, train_col11, train_col12

app = Sanic(__name__)

train_col12()
train_col11()


@app.post('/api/predict')
async def predict_stress(req):
  values = req.json
  if len(values) == None or len(values) == 0 or len(values) == "":
    return response.json({"status": "error", "massage": "Checkmark should not be uncheck!"}, status=400)
  print("request values: ", values)
  prediction = predict_col11(values['age'], values['gender'], values['Specialization'], values['workHours'], values['patientPerDay'], values['overtimeWorkInterest'], values['overtimeWorkPaid'], values['sector'])
  print('prediction2 says:', prediction)
  return response.json({"status": "success", "massage": prediction}, status=200)

 
# async def predict_work(req):
#   values = req.json 
#   prediction = predict_col12(values['age'], values['gender'], values['Specialization'], values['workHours'], values['patientPerDay'], values['overtimeWorkInterest'], values['overtimeWorkPaid'], values['sector'])
#   print('prediction1 says:', prediction)
#   return response.json(prediction)

# @app.get('/api/insights')
# async def get_alcohol_stressed(req):
#   alcohol_stressed = await get_alcohol_stressed()
#   return response.json(alcohol_stressed)

# async def get_alcohol_not_stressed(req):
#   alcohol_not_stressed = await get_alcohol_not_stressed()
#   return response.json(alcohol_not_stressed)

# async def get_specialization(req):
#   specialization = await get_specialization()
#   return response.json(specialization)


app.static('/', './dist')

@app.exception(NotFound)
async def ignore_404s(req, err):

  return await response.file('./dist/index.html')

if __name__ == "__main__":
  app.run(port=8000)