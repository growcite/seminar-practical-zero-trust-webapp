const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Set express configuration
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set static files
app.use(express.static(path.join(__dirname, 'public')));

// Set routes
app.get('/', (req, res) => {
    res.render('index');
});

// Start server
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});