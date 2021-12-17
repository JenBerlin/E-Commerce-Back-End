const express = require("express");
const Connection = require("./config/connection");
const routes = require("./routes");
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// explain: what I have done here :)
const init = async () => {
  try {
    await Connection.sync();
    console.log(`[INFO]: DB connection successful`);

    app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
  } catch (error) {
    console.error(`[ERROR]: DB connection failed | ${error.message}`);
  }
};

init();
