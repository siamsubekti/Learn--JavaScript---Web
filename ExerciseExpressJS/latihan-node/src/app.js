import express from 'express';
import configure from './config/config';
import createConnection from './db/connection';
import UserService from './services/user.service';
import appRoute from './routes'
import appMiddleware from './middleware/app-middleware'

configure();
createConnection()
    .then(async (connection) => {
        if(connection.isConnected){
            console.log('DB CONNECTED');
            
            const app = express();
            const mdw = appMiddleware({opt1: 'fizz', opt2:'bar'});
            
            app.use(mdw);
            app.use(appRoute);
            

            app.listen(process.env.APP_PORT, ()=>{
                console.log(`APPLICATION ${process.env.APP_NAME}`)
            });
           
        }else{
            throw new Error(`DB FAILED TO CONNECT`);
        }
    })
    
    .catch((err) => {
        console.log('error starting');
        console.error(err);
    })
