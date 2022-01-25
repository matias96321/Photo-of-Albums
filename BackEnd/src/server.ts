import express from 'express';
import routers from './routers';
import cors from 'cors';
import './database/connections';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routers);

app.get('/', async (request, response) => {
  return response.json({memsage: "hello word"});
});

app.listen((3333),() => console.log('Server Up !!!'));

