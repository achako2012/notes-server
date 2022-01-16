import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import middlewares from './middlewares.js';
import notesRoutes from './routes/notes.js';
const server = express();
const PORT = process.env.PORT || '3001';
const allowedOrigins = ['http://localhost:3000'];
const options = {
    origin: allowedOrigins
};
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors(options));
server.use(middlewares.requestTime);
server.use(middlewares.logger);
const baseService = '/notes-app-service';
server.use(baseService, notesRoutes);
server.listen(PORT, () => console.log(`App has been started on port ${PORT}...`));
//# sourceMappingURL=server.js.map
