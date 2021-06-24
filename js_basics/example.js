function user() {
    function someFn() {
        console.log('some fn')
    }
    function otherFn() {
    }
    someFn();
}

//Prototypes
console.log(user.prototype)

function Customer (name) {
    this.name = name
    this.placeOrder = function(items) {
        console.log(this.name + ' ordered '+items)
    }
}

var c1 = new Customer('Mike')
var c2 = new Customer('Jake')

console.log(c1.name)
c1.placeOrder(20)

console.log(c2.name)
c2.placeOrder(45)

let loc = {city:'Chicago',state:'IL'}
let geo = {lat:'34',long:'56'}

let user1 = { ...geo, name: 'Peter', ...loc}

console.log(user1)