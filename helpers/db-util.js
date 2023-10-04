import { MongoClient } from 'mongodb';

export async function connectDatabase() {
    const client = await MongoClient.connect(
        'mongodb+srv://duy2k2:TRX9wWUUenqshZ8M@cluster0.eiv54qp.mongodb.net/events?retryWrites=true&w=majority&appName=AtlasApp',
    );
    return client;
}

export async function insertDocument(client, collection, document) {
    const db = client.db();
    const result = await db.collection(collection).insertOne(document);
    return result;
}

export async function getAllDocuments(client, collection, sort, filter = {}) {
    const db = client.db();
    const documents = await db.collection(collection).find(filter).sort(sort).toArray();
    return documents;
}
