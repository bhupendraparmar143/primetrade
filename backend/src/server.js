const dotenv = require('dotenv');
const connectDB = require('./config/db');
const app = require('./app');

dotenv.config();

const PORT = process.env.PORT || 5000;

async function start() {
  await connectDB(process.env.MONGO_URI || 'mongodb://localhost:27017/primetrade');

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

start();


