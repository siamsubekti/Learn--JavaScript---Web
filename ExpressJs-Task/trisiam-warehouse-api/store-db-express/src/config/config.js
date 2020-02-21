import dotenv from "dotenv";

function configure() {
    dotenv.config();

    if(!process.env.APP_NAME) {
        console.log(`required environment variable or environment variable 
        are unavailable or may incorrect`);
        process.exit(1);
    }
}

export default configure;