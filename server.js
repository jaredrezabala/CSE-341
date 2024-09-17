const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.send('Hello World!')
})

app.listen(process.env.PORT || 5500, () => {
    console.log('Server is running on localhost:'+ (process.env.PORT || 5500))
})