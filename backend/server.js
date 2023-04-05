import  dotenv from "dotenv"
dotenv.config()
import  express  from "express";
import cors from "cors"
import data from "./data.js"
import mongoose from "mongoose";
import userRouter from './routes/userRoutes.js';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';
import orderRouter from "./routes/orderRoutes.js";
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const port=process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI).then(()=>{
  console.log("connected to database")
})
.catch((err)=>{
  console.log(err.message)
});

// app.get("/api/products",(req,res)=>{
//     res.send(data.products);
// });
// app.get('/api/products/slug/:slug', (req, res) => {
//     const product = data.products.find((x) => x.slug === req.params.slug);
//     if (product) {
//       res.send(product);
//     } else {
//       res.status(404).send({ message: 'Product Not Found' });
//     }
//   });

//   app.get('/api/products/:id', (req, res) => {
//     const product = data.products.find((x) => x._id === req.params.id);
//     if (product) {
//       res.send(product);
//     } else {
//       res.status(404).send({ message: 'Product Not Found' });
//     }
//   });

// const app=express();
// app.use(cors());
// const app=express();

app.use('http://localhost:8000/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);


app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

const port=process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`server is listening at port:${port}`);
})

