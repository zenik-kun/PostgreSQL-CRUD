const express = require('express');
const studentRoutes = require('./src/student/routes');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (request, response) => {
    response.send("Hello World! This is a simple Express server.");
})

app.use('/api/v1/students', studentRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})