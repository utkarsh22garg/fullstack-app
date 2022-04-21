import 'dotenv/config'; // Setup env vars in process.env
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express()
const port = parseInt(process.env.SERVER_PORT, 10) | 4000;

// Setup express middlewares
app.use(helmet());  // Security Headers
app.use(cors());  // CORS protection
app.use(morgan('dev')); // Request Logger

app.get('/test', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})