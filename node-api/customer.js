const {client} = require ('./db')

const parse = () => {

}

const add = (customer) => {

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

module.exports = {add,find,remove}