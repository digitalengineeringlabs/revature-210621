const {client} = require ('./db')

const parse = () => {

}

const add = (customer) => {

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