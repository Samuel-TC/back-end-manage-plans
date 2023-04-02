import express  from "express";
import morgan from "morgan";
// Routes
import projectRoutes from './routes/project.routes';
import taskRoutes from './routes/task.routers';
import managerRoutes from './routes/manager.routes';

const app = express();

// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/project",projectRoutes);
app.use("/api/task",taskRoutes);
app.use("/api/manager",managerRoutes);

export default app;
