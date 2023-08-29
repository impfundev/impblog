import express from 'express';
import payload from 'payload';
import path from 'path';

require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
});

const app = express();

// Redirect all traffic at root to admin UI
app.get('/', function (_, res) {
  res.redirect('/admin');
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET_KEY,
    mongoURL: process.env.MONGO_URL,
    mongoOptions: {
      user: 'Ilhammaulana',
      pass: '1B2vAuTHDmGaWH20',
    },
    express: app,
  });

  app.listen(process.env.PORT);
};

start();
