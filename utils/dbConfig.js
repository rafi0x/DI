import mongoose from 'mongoose';

export default class DB{
    constructor(database = process.env.DEFAULT_DB, [collection, schema]){
        this.connection = mongoose.createConnection('mongodb://localhost:27017',{
            useNewUrlParser: true,
            useUnifiedTopology: true, 
        });
        this.dbConnection = this.connection.useDb(database);
        return this.dbConnection.model(collection, schema);
    }
}