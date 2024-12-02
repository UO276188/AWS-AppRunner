/**Sara María Ramírez Pérez
UO276188 */
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World! My name is Sara, UO276188');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});