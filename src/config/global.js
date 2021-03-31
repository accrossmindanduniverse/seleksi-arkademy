const config = {
  mongoDB: {
    protocol: process.env.DB_PROTOCOL,
    baseURI: process.env.DB_BASE_URI,
    port: process.env.DB_PORT,
    dbName: process.env.DB_NAME
  },
  JWT: {
    secretKey: process.env.JWT_SECRET_KEY,
    refreshSecretKey: process.env.JWT_REFRESH_SECRET_KEY
  }
}

module.exports = config