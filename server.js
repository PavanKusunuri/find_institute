const express = require("express");
const dotenv = require("dotenv");

//  Load env variables

dotenv.config({ path: './config/config.env' })

const app = express();

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});

// console.log("PORT" + PORT)