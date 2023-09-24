/* eslint-disable no-console */
import app from './app';
import mongoose from 'mongoose';
import config from './config/index';
import { Server } from 'http';

process.on('uncaughtException', error => {
  console.error(error);
  process.exit(1);
});

let server: Server;

// database connection
async function dbFunction() {
  try {
    // db
    await mongoose.connect(config.database_url as string);
    // app
    server = app.listen(`${config.port}`, () => {
      console.info(`Example app listening on port ${config.port}`);
    });
    // checking
    console.info(`Successfully db is connected`);
  } catch (err) {
    console.error(err);
  }

  process.on('unhandledRejection', error => {
    console.log('hii server closeing....');
    if (server) {
      server.close(() => {
        console.error(error);
        process.exit(1);
      });
    } else {
      process.exit(1);
    }
  });
}

dbFunction();
