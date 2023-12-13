const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const productRoutes = require("./routes/product");
const categoryRoutes= require("./routes/category");
const orderRoutes= require("./routes/order");
const userRoutes= require("./routes/user");
const dbConnect = require("./utils/db-connect");

dotenv.config();

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

const port = process.env.PORT || 5001;
const host = process.env.HOST || "localhost";

dbConnect()
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.get("/", (req, res) => {
  res.send("hello world from my server application");
});

app.use("/products", productRoutes);
app.use("/categories",categoryRoutes)
app.use("/users",userRoutes)
app.use("/orders",orderRoutes)

app.listen(port, host, () => {
  console.log(`server is running at http://${host}:${port}`);
});
