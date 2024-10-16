import express from 'express';
import productRouter from './router/product.route.js';

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/api', productRouter); // Use the product router for '/api'

app.get('/', (req, res) => {
    res.status(200).json({ success: true, message: 'This is the product service built using Express' });
});

app.listen(PORT, () => {
    console.log(`Product service started on port ${PORT}`);
});
