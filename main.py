from sanic import Sanic, response

from sanic.exceptions import NotFound

from ML_model import predict_col11, predict_col12, train_col11, train_col12



app = Sanic(__name__)



train_col12()

train_col11()



@app.post('/api/predict')

async def predict_stress(req):

    values = req.json

    prediction = predict_col11(values['age'], values['gender'], values['Specialization'], values['workHours'], values['patientPerDay'], values['overtimeWorkInterest'], values['overtimeWorkPaid'], values['sector'])
    print('prediction2 says:', prediction)

    return response.json(prediction)

 

async def predict_work(req):

    values = req.json
    
    prediction = predict_col12(values['age'], values['gender'], values['Specialization'], values['workHours'], values['patientPerDay'], values['overtimeWorkInterest'], values['overtimeWorkPaid'], values['sector'])
   
    print('prediction1 says:', prediction)

    return response.json(prediction)



app.static('/', './dist')



#404 exception

@app.exception(NotFound)

async def ignore_404s(req, err):

  return await response.file('../dist/index.html')



if __name__ == "__main__":

  app.run(port=8000)