const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
//Db conection on thing we are always import .env file remember
mongoose
.connect(
    "mongodb+srv://methilan2025:methilan1998@cluster0.r8nerrl.mongodb.net/Admin_Ecom"
    )
    .then(()=> console.log("MongoDB connected"))
    .catch((error) => console.log(error));


const app = express();
const PORT = process.env.PORT || 5000;

app.use(
    cors({
        origin:'http://localhost:5174/',
        methods: ["GET", "POST", "DELETE", "PUT"],
        allowedHeaders: [
      "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);


app.use(cookieParser());
app.use(express.json());

app.listen(PORT, () => console.log(`Server is now running on port ${PORT}`));