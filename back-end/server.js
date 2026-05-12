import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// === MONGOOSE CONNECTION ===
const MONGO_URI = "mongodb+srv://Vanshika:Vanshika123@cluster0.57swnnh.mongodb.net/carsDB?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ Initial MongoDB connection error:", err);
    process.exit(1);
  }
};

mongoose.connection.on("disconnected", () => {
  console.warn("⚠️ MongoDB disconnected.");
});

mongoose.connection.on("reconnected", () => {
  console.log("🔁 MongoDB reconnected.");
});

mongoose.connection.on("error", (err) => {
  console.error("❌ MongoDB connection error:", err);
});

// === CONNECT TO DB THEN START SERVER ===
connectDB().then(() => {
  app.listen(5000, () => console.log("Server running on port 5000"));
});

// === CAR MODEL ===
const CarSchema = new mongoose.Schema({
  title: String,
  price: String,
  mileage: String,
  description: String,
  image: String,
});

const Car = mongoose.model("Car", CarSchema);

// === ROUTES ===
app.get("/api/cars", async (req, res) => {
  try {
    const cars = await Car.find();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/cars", async (req, res) => {
  try {
    const newCar = new Car(req.body);
    const savedCar = await newCar.save();
    res.status(201).json(savedCar);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
