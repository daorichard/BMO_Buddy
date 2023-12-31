import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
