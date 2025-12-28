if (process.env.NODE_ENV != "production") {
  require("dotenv").config({ quiet: true });
}

const app = require("./app.js");
const connectDB = require("./config/db.js");

connectDB();

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
