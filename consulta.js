const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://dswa5:N2XaoyQ16MnCEeEL@cluster0.ircvu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'DSWA5';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('ifsp');
  

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());