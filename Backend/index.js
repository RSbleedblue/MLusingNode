import express from 'express.js'

const app = express();

app.use(express.json()); 

export default app;