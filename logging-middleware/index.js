const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Logging Middleware
const logger = (req, res, next) => {
    const startTime = Date.now();

    console.log("--------------------------------");
    console.log(`Time      : ${new Date().toISOString()}`);
    console.log(`Method    : ${req.method}`);
    console.log(`URL       : ${req.originalUrl}`);

    res.on("finish", () => {
        const endTime = Date.now();
        console.log(`Status    : ${res.statusCode}`);
        console.log(`Duration  : ${endTime - startTime} ms`);
        console.log("--------------------------------");
    });

    next();
};

// Use the middleware
app.use(logger);

// Sample APIs
app.get("/", (req, res) => {
    res.json({
        message: "Logging Middleware is working successfully."
    });
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP"
    });
});

app.post("/test", (req, res) => {
    res.json({
        message: "POST request received.",
        body: req.body
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});