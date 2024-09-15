import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from './Schema/schema.js';
import { dbconn } from './database/dbconnection.js';
import expressPlayground from 'graphql-playground-middleware-express'
const app = express();
const port = 3000;
app.use(express.json());
const playGround = expressPlayground.default
app.use('/graphql', (req, res, next) => {
    next();
}, createHandler({ schema }));
app.get('/gui', playGround({ endpoint: '/graphql' }))
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`App listening on port ${port}!`));
