const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 8000;

// Connect to Database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// ROUTE
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the new Incident Reports API" });
});

// Routes
app.use("/api/clients", require("./routes/clientRoutes"));
app.use("/api/reports", require("./routes/reportRoutes"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
