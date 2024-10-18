// const express = require("express");
// const { connection } = require('./connection/connection');
// const userRouter = require('./routes/user_routes');
// const cors = require("cors");

// const port = 7800;

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use('/users', userRouter);

// const startServer = async () => {
//     await connection();  // Ensure connection is established before starting the server
// };

// app.listen(port, () => {
//     console.log('Server is running on port', port);
// });

// startServer();

const express = require('express');
const itemRoutes = require('./routes/itemRoutes');

const app = express();

app.use(express.json());
app.use('/api', itemRoutes);

const PORT = process.env.PORT || 8800;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
