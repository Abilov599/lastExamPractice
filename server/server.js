const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

mongoose.set("strictQuery", false);

// Declare the Schema of the Mongo model
const teacherSchema = new mongoose.Schema({
  teacherName: {
    type: String,
    required: true,
  },
  teacherImg: {
    type: String,
    required: true,
  },
  teacherType: {
    type: String,
    required: true,
  },
  teacherDescription: {
    type: String,
    required: true,
  },
});

//Export the model
const Teachers = mongoose.model("Teachers", teacherSchema);

app.get("/teachers", async (req, res) => {
  const data = await Teachers.find();
  return res.send(data);
});

app.post("/teachers/", async (req, res) => {
  const newTeacher = new Teachers(req.body);
  newTeacher.save();
  res.status(200).send({ message: "SUCCESS" });
});

app.get("/teachers/:id", async (req, res) => {
  const { id } = req.params;
  const data = await Teachers.findById(id);
  return res.send(data);
});

app.delete("/teachers/:id", async (req, res) => {
  const { id } = req.params;
  const data = await Teachers.findByIdAndDelete(id);
  return res.send(data);
});

mongoose.connect(
  "mongodb+srv://abilovv599:cemi2002@cluster0.bh7quof.mongodb.net/?retryWrites=true&w=majority",
  (err) => {
    if (!err) {
      console.log("MongoDB Connection Succeeded.");
    } else {
      console.log("Error in DB connection: " + err);
    }
  },
  app.listen(port, () =>
    console.log(`Example app listening on http://localhost:${port}/teachers`)
  )
);
