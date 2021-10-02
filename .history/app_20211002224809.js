import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morhan';
import helmet from 'helmet';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
