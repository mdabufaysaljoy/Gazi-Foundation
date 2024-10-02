const epxress = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = epxress();

app.use(
  cors({
    origin: "https://gazi-foundation.vercel.app",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(morgan("dev"));
app.use(cookieParser());
app.use(epxress.json());

mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/admin-login", require("./routes/adminLogin"));
app.use("/saving-details", require("./routes/savingDetails"));
app.use("/members", require("./routes/members"));

app.get("/", (req, res) => {
  res.json({ name: "gazi foundation" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is runnign on port http://localhost:${PORT}`);
});
