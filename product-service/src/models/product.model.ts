// src/models/Product.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

// 1. Define the TypeScript interface for the Product document
interface IProduct extends Document {
    name: string;
    price: number;
    description: string;
    category?: string;
    stock?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

// 2. Create the Mongoose schema corresponding to the interface
const productSchema: Schema<IProduct> = new Schema(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        description: { type: String, required: true },
        category: { type: String, required: false },
        stock: { type: Number, required: false },
    },
    {
        timestamps: true, // Automatically manages createdAt and updatedAt fields
    }
);

// 3. Create and export the Mongoose model
const ProductModel: Model<IProduct> = mongoose.model<IProduct>('Product', productSchema);
export default ProductModel;
