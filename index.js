import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser  from 'cookie-parser';
import logger  from 'morgan';
import cors  from 'cors';

import usersRouter from './routes/user.js';
import productsRouter from './routes/product.js';
import emailRouter from './routes/email.js';


import db, { dbStorage } from "./firebase.js";
import { collection, query, where, onSnapshot } from "firebase/firestore";

const productsRef = collection(db, "products");
const usersRef = collection(db, "users");
const branchesRef = collection(db, "branches");


const app = express();

app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// app.use(express.static(path.join(__dirname, 'build')));


// ----- USE ROUTES -----------
app.use('/auth', usersRouter);
app.use('/admin', productsRouter);
app.use("/email", emailRouter);


app.get("/", (request, response) => {
    response.send("Home Page!");
})
app.get("/products", async (request, response) => {
    const data = await onSnapshot(productsRef, (querySnapshot) => {
        querySnapshot.forEach( doc => console.log(doc.data()))
    })
    response.status(201).send("All Products Gotten!");
})

app.get("/users", async (req, res) => {
      const data = await onSnapshot(usersRef, (querySnapshot) => {
        querySnapshot.forEach( doc => console.log(doc.data()))
    })
    res.status(201).send("All Users Gotten!");
})

app.get("/branches", async (req, res) => {
      const data = await onSnapshot(branchesRef, (querySnapshot) => {
        querySnapshot.forEach( doc => console.log(doc.data()))
    })
    res.status(201).send("All Branches Gotten!")
})


const PORT = process.env.PORT || 5002;

const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});