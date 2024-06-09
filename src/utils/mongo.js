const { MongoClient } = require('mongodb');


function createMongoDBClientMiddleware(uri, dbName) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
    return async function mongodbMiddleware(req, res, next) {
        
        await client.connect();

        req.dbClient = client;
        req.db = client.db(dbName);
        next();
    };
}

function createCollectionRefMiddleware(collectionName){
    return async function (req, res, next){
        if(!req.collectionsDB) req.collectionsDB = {}
        
        req.collectionsDB[collectionName] = await req.db.collection(collectionName)
        next()
    }
}

exports.createMongoDBClientMiddleware = createMongoDBClientMiddleware
exports.createCollectionRefMiddleware = createCollectionRefMiddleware