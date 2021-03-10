import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import prettyjson from 'prettyjson'
import helmet from 'helmet'
import axios from 'axios'
import PurchaseSchema from './dbPurchase.js'
const app = express(); 
const PORT = process.env.PORT || 5000;

app.use(helmet());
app.use(cors());
app.use(express.static("."));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.post("/checkout", (request, response) => {
  try {
    response.status(201).send(request.body);
    console.log("Body From Frontend: ", request.body);
  }catch(error){
      console.log(error);
  }
})

app.get("/checkout", (request, response) => {
    // console.log(request, response)
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
