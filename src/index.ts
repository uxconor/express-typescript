import express, { Express, Request, Response } from 'express';
import { router } from './routes/loginRoutes';
const dotenv = require('dotenv');

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
app.use(router);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
