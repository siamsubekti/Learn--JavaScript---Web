import express from "express";
import configure from "./config/config";
import createConnection from "./database/connection";
import appRoute from "./routes";
import myMdw from './middleware/myMdw';

configure();
createConnection()
    .then(async (connection) => {
      if (connection.isConnected) {
          console.log('DB CONNECTED');
          
          const app = express();
          const mdw = myMdw ({opt1: 'fizz', opt2: 'bar'});
          app.use(mdw);
          app.use(appRoute);

          app.listen(process.env.APP_PORT, () => {
              console.log(`APPLICATION ${process.env.APP_NAME}`)
              
          });
      } else {
          throw new Error('DB FAILED TO CONNECT');
      }
    }).catch((err) => {
        console.log('error starting');
        console.log(err);
    })