


const express = require('express');
const path = require('path');

const app = express();
 
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


let $name = "dako bayag oten si raniel 7.9 inches "

alert ($name);

let $me = " gusto ka mo tan aw? pm sa peysbok "
alert ($me);

// Pa repaste