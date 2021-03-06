import express from "express";
import routes from "./routes";
import bodyParser from "body-parser";
import db from "./database/models/index";
import cors from "cors";

const app = express();

const port = 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.get("/", (req, res) => {
  res.status(200).send({message: 'welcome to my api :)'})
});
app.use("/api", routes);

app.listen(port, () => {
  console.log(`server started on ${port}`);
});
