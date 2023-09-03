import express from 'express';
import payload from 'payload';
import path from 'path';

require('dotenv').config({
  path: path.resolve(__dirname, '../.env'),
});

// import { seed } from './seed';

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
      user: process.env.MONGO_USERNAME,
      pass: process.env.MONGO_PASSWORD,
    },
    express: app,
    onInit: () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // if (process.env.PAYLOAD_SEED === 'true') {
  //   payload.logger.info('Seeding Payload...');
  //   await seed(payload);
  //   payload.logger.info('Done.');
  // }

  app.listen(process.env.PORT || 8000);
};

start();
