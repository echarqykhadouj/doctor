// const express = require('express');
// const colors = require('colors');
// const morgan = require('morgan'); // ✅ الاسم الصحيح هو morgan وليس "moragan"
// const dotenv = require('dotenv');
// const connectDB = require('./config/db');

// // dotenv config
// dotenv.config();

// // MongoDB connection
// connectDB();

// // Express app
// const app = express();

// // Middlewares
// app.use(express.json());
// app.use(morgan("dev")); // ✅ الاسم الصحيح

// // Routes
// app.use('/api/v1/user', require("./routes/userRoutes"));

// // Port
// const port = process.env.PORT || 8080; // ✅ تأكد من كتابة 8080 أو أي رقم

// // Start server
// app.listen(port, () => {
//   console.log(
//     `Server Running in ${process.env.NODE_ENV} Mode on port ${port}`.bgCyan.white
//   );
// });
const express = require("express");
const colors = require("colors");
const moragan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require('cors');
//dotenv conig
const app = express();
dotenv.config();

//mongodb connection
connectDB();
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));
//rest obejct

//middlewares
app.use(express.json());
app.use(moragan("dev"));

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

//port
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`
      .bgCyan.white
  );
});