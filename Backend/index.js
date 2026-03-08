import express from "express";
import DataURIParser from "datauri/parser.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";
import path from "path";
import { fileURLToPath } from "url";


dotenv.config({});
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const corsOptions = {
  origin: ["http://localhost:5173"],
  credentials: true,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5001;

 
//api's

app.use("/api/user", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);

// ---- code for deployment ----

// ---- code for deployment ----
if (process.env.NODE_ENV === "production") {

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);

  const frontendPath = path.join(__dirname, "../frontend/dist");

  app.use(express.static(frontendPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// if (process.env.NODE_ENV === "production") {
//  const frontendBuildPath = path.join(__dirname, "Frontend", "dist");


//   // Serve static frontend files
//   app.use(express.static(frontendBuildPath));

//   // SPA routing: all unknown routes send index.html
//   app.get("*", (req, res) => {
//     res.sendFile(path.join(frontendBuildPath, "index.html"));
//   });
// }


app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
