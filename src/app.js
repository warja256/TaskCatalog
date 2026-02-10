const express = require('express');
const app = express();
const itemsRouter = require('./routes/items');

const logger = require('./middleware/logger');
const timing = require('./middleware/timing');
const errorHandler = require('./middleware/errorHandler');
// const { logger, timing, errorHandler } = require('./middleware');

app.use(express.static('public'));

app.use(express.json());
app.use(logger);
app.use(timing);

app.use('/api/items', itemsRouter);

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
