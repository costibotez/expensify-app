const path = require('path');   // 'path' is already built it
const express = require('express'); // the Node way to include
const app = express();              // create an Express app
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('*', (req, res) => {    // falback for 404s to redirect to index.html
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {    //setup the port
    console.log('Server is up!');
});