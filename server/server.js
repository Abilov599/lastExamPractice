const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

mongoose.set("strictQuery", false);

// Declare the Schema of the Mongo model
const teacherSchema = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

//Export the model
const Teachers = mongoose.model("Teachers", teacherSchema);

app.get("/teachers", async (req, res) => {
  try {
    const data = await Teachers.find();
    res.send(data);
  } catch (error) {
    res.send({ message: "error" });
  }
});

app.get("/teachers/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const data = await Teachers.findById(id);
    res.send(data);
  } catch (error) {
    res.send({ message: message.error });
  }
});

app.delete("/teachers/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Teachers.findByIdAndDelete(id);
    res.status(200).send({ message: "SUCCESS" });
  } catch (error) {
    res.send({ message: message.error });
  }
});

app.post("/teachers", async (req, res) => {
  try {
    const newTeachers = new Teachers(req.body);
    newTeachers.save();
    res.send({ message: "SUCCESS" });
  } catch (error) {
    res.send({ message: message.error });
  }
});

// Connect MongoDB
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
