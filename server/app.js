import express from 'express';
import logger from 'morgan';
import parser from 'body-parser';

import routes from './routes/index';

const app = express()
const router = express.Router();
const port = parseInt(process.env.PORT, 10) || 3000;

routes(router)
app.set('port', port);

app.use('/api/v1/', router);

app.get('/api/v1/*', (req, res) => res.status(404).send({
  message: 'Invalid route',
}));

app.listen(port, () => console.log(`Port running at ${port}`));

export default app;
