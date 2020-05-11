import { MongoClient } from 'mongodb'
const {
  DB_PORT,
  DB_HOST,
  DB_NAME,
  DB_PASSWD,
  DB_USER
} = process.env

const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_HOST}/${DB_NAME}`
let connection

export async function connectDB () {
  if (connection) return connection

  let client
  try {
    client = await MongoClient.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    connection = client.db(DB_NAME)
  } catch (err) {
    console.error('No se pudo conectar', err)
    process.exit(1)
  }
  return connection
}