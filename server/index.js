const express = require("express");
const cors = require("cors"); //

const app = express();

// create express app
app.use(cors());
app.use(express.json());
// setup the server port
const port = process.env.PORT || 3001;

// define root route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// listen to the port
app.listen(port, () => {
    console.log(`Express is running at port ${port}`);
});

// import employee routes
const employeeRoutes = require("./routes/employee.route");

// create employee routes
app.use("/api/v1/employee", employeeRoutes);
