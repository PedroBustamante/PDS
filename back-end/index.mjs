import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { environment } from './src/constants/index.mjs';
import { getCelebrityRouter } from './src/routers/getCelebrity.mjs';

const { PORT } = environment;

const createServer = () => {
    const app = express();

    app.use(cors());
    app.use(bodyParser.json({ limit: '50MB' }));

    app.use('/getCelebrity', getCelebrityRouter);
    app.listen(PORT, () => console.log(`server running on ${PORT}`));
};

(async () => {
    createServer();
})();
