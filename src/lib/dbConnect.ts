import mongoose from 'mongoose' ;

type connectionObject = {
    isConnected?: number
};


const connection: connectionObject = {}

async function dbconnect(): Promise<void> {
    if (connection.isConnected){
        console.log("connected to DB");
        return;
    }

    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || '', {})
        connection.isConnected = db.connections[0].readyState
        console.log("DB connected Successfully");
    }
    catch(error: unknown) {
        if (error instanceof Error){
            console.log(`db connection failed Error: ${error.message}`);
        }
        else{
            console.log("an unknown error occured")
        }
        process.exit(1)
    }
}

export default dbconnect;