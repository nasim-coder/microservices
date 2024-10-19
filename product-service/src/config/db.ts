import mongoose from 'mongoose';

class Database {
  private uri: string;

  constructor() {
    this.uri = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';
  }

  public async connect() {
    try {
      await mongoose.connect(this.uri);
      console.log('MongoDB connected');
    } catch (error: any) {
      console.error('MongoDB connection failed:', error);
      process.exit(1);
    }
  }
}

export default new Database();
