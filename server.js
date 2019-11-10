const express = require('express');
const connectDB = require('./config/db');

const app = express();
app.use(express.json({ extended: false }));

// Connect Database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

app.use('/api', require('./routes/index'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));