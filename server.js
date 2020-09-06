const express = require("express");
const router = require("./server/routes/routes_index");
//import router from "./server/routes";
//const routes = require("./routes");

const app = express();

const port = process.env.PORT || "5000";

app.use(express.json());
app.use("/api/mich", router);

app.listen(port, () => {
  console.log(`Server is now running on port: ${port}`);
});
