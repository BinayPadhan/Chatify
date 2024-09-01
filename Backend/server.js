import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import userRouter from './routes/user.routes.js'
import messageRouter from './routes/message.routes.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 3001;


app.use('/api/auth', userRouter);
app.use('/api/message', messageRouter);

app.listen(port, () => {
  connectDB();
  console.log(`⚙️  Server is running at port : ${port}`);
})
