import express from "express";
import cors from "cors";
import customerRoutes from "./routes/customerRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "RepairMithra Backend Running 🚀",
  });
});

// Customer Routes
app.use("/api/customers", customerRoutes);

export default app;