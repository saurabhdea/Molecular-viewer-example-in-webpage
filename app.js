const express = require('express');
const app = express();
const port = 3000;

// Set the EJS view engine
app.set('view engine', 'ejs');

// Serve static files from a public directory (if needed)
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
    // Render the index.ejs file for the main page
    res.render('index');
});

app.get('/molstar', (req, res) => {
    // Render the molstar.ejs file for the Molstar page
    res.render('molstar');
});

app.get('/JSmol', (req, res) => {
    // Render the JSmol.ejs file for the JSmol page
    res.render('JSmol');
});

app.get('/ngl', (req, res) => {
    // Render the ngl.ejs file for the NGL page
    res.render('ngl');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
