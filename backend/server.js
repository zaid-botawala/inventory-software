const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(require('cors')());

app.get('/', (req, res) => {
  res.send('IWMS Backend Running');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
