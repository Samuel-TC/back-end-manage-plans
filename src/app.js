import express  from "express";
import morgan from "morgan";

const cors = require('cors');
// Routes
import projectRoutes from './routes/project.routes';
import taskRoutes from './routes/task.routers';
import managerRoutes from './routes/manager.routes';

const app = express();

// Settings
app.set("port", 4000);

//Cros setings
const corsOptions = {
    origin: '*',
    allowedHeaders: ['Content-Type', 'Authorization']
  };

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors(corsOptions));

// Routes
app.use("/api/project",projectRoutes);
app.use("/api/task",taskRoutes);
app.use("/api/manager",managerRoutes);


export default app;
