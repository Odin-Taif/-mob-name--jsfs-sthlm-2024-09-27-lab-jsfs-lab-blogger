import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.send('Hello world!');
});

// MORE ROUTES HERE

export default app;
