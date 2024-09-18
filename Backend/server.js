import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import authRouter from './routes/auth.routes.js'
import messageRouter from './routes/message.routes.js';
import userRouter from './routes/user.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const port = process.env.PORT || 3001;


app.use('/api/auth', authRouter);
app.use('/api/message', messageRouter);
app.use('/api/users', userRouter);

app.listen(port, () => {
  connectDB();
  console.log(`⚙️  Server is running at port : ${port}`);
})
