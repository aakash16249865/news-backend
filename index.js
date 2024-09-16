// import express from 'express';
// import bodyParser from 'body-parser';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import userregister from './controllers/register.controller.js';
// import logiregister from './controllers/login.controller.js';
// import apiRouter from './routes/apiRoutes.js';

// dotenv.config();

// const app= express();

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(cors({
//     origin:['http://localhost:5173']
// }))


// app.post('/user/userregister', userregister)
// app.post('/user/loginuser', logiregister)
// app.get('/users',apiRouter);
// app.get('/',(req,res)=>res.send("hello world"));

// const port = process.env.PORT || 3001 ;

// app.listen(port, () => console.log(`listening on http://localhost:${port}`));

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import userregister from './controllers/register.controller.js';
import logiregister from './controllers/login.controller.js';
import apiRouter from './routes/apiRoutes.js';

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Allow all IPs and origins to access the server
app.use(cors({
    origin: true,  // This allows all origins (effectively all IPs)
    credentials: true // Allows credentials to be shared if necessary
}));

// Routes
app.post('/user/userregister', userregister);
app.post('/user/loginuser', logiregister);
app.get('/users', apiRouter);
app.get('/', (req, res) => res.send("Hello, World"));

// Port setup
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));
