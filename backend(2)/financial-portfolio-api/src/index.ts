import express, { Application } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/DatabaseConnect';
const bodyParser = require('body-parser');
import transactionRoutes from './routes/transactionRoute';


dotenv.config();
connectDB();


const app: Application = express();

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use(express.json());

app.use('/api', transactionRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
