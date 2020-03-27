const express = require('express');
const app = express();

app.listen(9000, function() {
    console.log("start! express server on port 9000");
})

console.log('end of server code...');