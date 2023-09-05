const express = require('express');
const app = express();
const port = 3000; // Choose an appropriate port

app.use(express.json()); // Parse JSON request bodies

// Simulated charging socket data stored in an array
const chargingSockets = [];

// Route to add a new charging socket
app.post('/api/charging-sockets', (req, res) => {
    const newSocket = req.body;
    chargingSockets.push(newSocket);
    res.json({ message: 'Charging socket added successfully', socket: newSocket });
});

// Route to get all charging sockets
app.get('/api/charging-sockets', (req, res) => {
    res.json(chargingSockets);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
