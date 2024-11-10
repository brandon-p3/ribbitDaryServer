import mysql from 'promise-mysql';

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'ribbitdary',
    port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 3306
});
pool.getConnection().then(connection => {
    pool.releaseConnection(connection);
    console.log('DB is connected');
});

export default pool;
