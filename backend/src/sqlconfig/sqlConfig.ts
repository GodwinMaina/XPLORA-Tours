
export const sqlConfig = {
    user:'sa',
    password:'atopwudan',
    database: 'XPLORETOURS',
    server: 'DESKTOP-8U9CNUE',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false,
        trustServerCertificate:false
    }
};


console.log(sqlConfig);