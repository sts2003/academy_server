import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

const PORT = 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/api/testRest", (req, res) => {
  console.log("실행");

  return "TEST";
});

app.post("/api/dataTest", (req, res) => {
  console.log(req.body.params);
});

app.post("/api/fileUpload", (req, res) => {
  console.log(req.body.form);
});
app.listen(PORT, () => {
  console.log(`${PORT} Server Start✅`);
});
