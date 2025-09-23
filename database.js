const {
    createPool
}=require('mysql');

const pool=createPool({
    host:"localhost",
    user:"root",
    password:"3319",
    database:"dbmsproject",
    connectionLimit:10

})

pool.query('')