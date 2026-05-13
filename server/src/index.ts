import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import path from 'path';
import projectRoutes from './routes/projectRoutes';
import { errorHandler } from './utils/errorHandler';
import { logger } from './config/logger';
import { eventBus } from './patterns/observer/EventManager';

const app = express();
const PORT = process.env.PORT || 8080;
const isProduction = process.env.NODE_ENV === 'production';

app.use(helmet());
app.use(cors({ origin: isProduction ? ['https://sielco.cl', 'https://claudev.sielco.cl'] : '*', credentials: true }));
const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 100, message: 'Too many requests' });
app.use('/api/', limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/api', projectRoutes);
app.get('/health', (req, res) => res.json({ status: 'OK', timestamp: new Date().toISOString() }));
app.get('*', (req, res) => { if (!req.path.startsWith('/api')) res.sendFile(path.join(__dirname, '../public', 'index.html')); });
app.use(errorHandler);

eventBus.subscribe('server:started', (data) => logger.info(`Server started on port ${data.port}`));
app.listen(PORT, () => { logger.info(`Server running on port ${PORT}`); eventBus.notify('server:started', { port: PORT, env: process.env.NODE_ENV }); });
