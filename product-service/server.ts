import express from 'express';
import connectDatabase from './src/config/db';
import routes from './src/routes/index';

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);

app.use(express.json());

// Routes
app.use('/api', routes); // Use the indexed routes

connectDatabase(); // Wait for the database connection
app.listen(port, () => { console.log(`Server is running on port ${port}`) });
