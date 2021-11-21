const { application } = require("express");
const express = require("express");

const app = express();

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the contactkeeper API..." })
);

// Define our routes
application.use('/api/users', require('./routes/users'));
application.use('/api/auth', require('./routes/auth'));
application.use('/api/contacts', require('./routes/contacts'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
