const {client} = require ('./db')

const add = (customer) => {
    return new Promise((resolve,reject)=>{
        client.query(`INSERT INTO customer (cust_name,cust_email) VALUES ($1,$2)`, 
        [customer.cust_name,customer.cust_email], (err, res) => {
            if(err) {
                reject(err)
            }
            else {
                if(res.rowCount > 0)
                resolve({inserted:true})
            }
        })
    })
}

const findAll = (id) => {
    return new Promise((resolve,reject)=>{
        client.query(`SELECT * from customer`, (err, res) => {
            if(err) {
                reject(err)
            }
            else {
                resolve(res.rows)
            }
        })
    })
}

const find = (id) => {
    return new Promise((resolve,reject)=>{
        client.query(`SELECT * from customer 
            where id = ${id}`, (err, res) => {
            if(err) {
                reject(err)
            }
            else {
                resolve(res.rows)
            }
        })
    })
}

const remove = (id) => {

}

module.exports = {add,find,findAll,remove}