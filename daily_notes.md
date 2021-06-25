# Day 1

## Web Architecture



## HTML Syntax
## Document Structure
## Elements
### formatting (strong, i, sup, ..) and structured (table,ul,ol,dl)
### semantic (h1,p,a) vs non semantic (div,span) 
### Inline (span, strong, img, a, ...) and Block (h1,p,form,div,..) 
### Form Elements (input,select,form)

## Attributes
### Style
### Id and Class

## CSS
### Colors (Predefined, RGB, HEX)
### Units (fixed and relative)
### Selectors (element, id, class, attribute, nested)
### Box Model (margin, border and padding)

## Responsive Web Design
### Media Query
### Flex layout
### Flexible Visuals (not covered)


# Day 2

## CSS Styling precedence



## CSS - theme design

init.css

	div {
		margin: 0;
		padding: 0;
	}

premium.css

	div {
		margin: 20px 10px
	}

	button {
		border: 1px sharp #ddd;
	}

classic.css

	div {
		margin: 20px 10px
	}

	button {
		border: 1px rounded #ddd;
	}

myapp.css 

	.product {

	}

	div {
	   padding: 20px;
	}

index.html

	<head>

		<link ref="stylesheet" href="init.css"/>
		<link ref="stylesheet" href="classic.css"/>

		<style>

		</style>

	</head>
	<body>

	<div class="product" style="">
	<button style="">Save</button>
	</div>

	</body>

## Bootstrap
### Benefits
### Setup
### Breakpoints
### Container & Grids
### Spacing
### Components
### Forms

# JavaScript

## Introduction

Use https://jsbin.com/?js,console

## Syntax

### Instruction
	var x = 0
	var y = 0;

### Comments

	//this is single line comment
	/* this is multi line comment */

## Variable Declaration

	var name = "Vimal"
	// name = 'Vimal'

## Data Types

	var zip = 35434
	console.log(typeof zip)

	var trainer = true
	console.log(typeof trainer)

	var user = {name:"Vimal"}

	console.log(typeof user)
	
## String Concatenation

	var name = 'Mike'
	console.log('Hi ' + name)

## Operators

### Arithmetic
	+ - / * %
### Unary
	++ --
### Assignment 
	= += -= *=
### Logical 
	&& ||
### Comparison
	< <= > >=
### Ternary
	<expression> ? true : false
### Equality
	== ===
	
* Double equals: compares the data alone
* Triple equals: compares the data along with type


	var age = 25
	var ageString = '25'

	console.log(age === ageString)
	
## Operator Precendence

	(4 - 6) * 3 / 5
	
## Control Statements (conditional & loop)

## Arrays

	var arr = ['Train','Bus',100,true]
	console.log(arr[0])
	arr[2] = 'Car'

	for(var i = 0; i < arr.length; i++){
	  console.log(arr[i])
	}

	console.log(typeof arr)

## Functions (methods)

	function add(a,b){
	  var x = a + b
	  return x
	}

	var result = add(5,6)


### Callback Function

#### Synchronous Callback function

	function add(a,b,cbFn){
	  var x = a + b
	  cbFn(x)
	}

	add(5,6, function(result){
		console.log(result)
	})

#### Asynchronous Callback function

	setTimeout(function() {
		console.log('Testing')
	}, 2000)

	setInterval(function() {
		console.log('Testing interval')
	}, 1000)

## JS Object

	var user = {
	  name: 'Mike',
	  address: {
	    city: 'St.Louis',
	    state: 'MO'
	  }
	}

	var user = {
	  name: 'Mike',
	  address: {
	    city: 'St.Louis',
	    state: 'MO'
	  },
	  scores: [],
	  applyJob: function () {
	    console.log('Applying job...')
	  }
	}

## Built-in Objects

### String

	var fruits = 'Apple,Banana,Grapes'
	var arr = fruits.split(',')

### Array
### Math
### Date

# Day 3

JavaScript Basics

DOM - Document Object Model

Use Javascript in HTML
<script></script>

-- window and document object
-- querying using getElementById, getElementsByClassName
-- querying using querySelector

Accessing Element properties
.value
.innerHTML

Setting Element properties (style)
setAttribute('value','new value') //style
getAttribute()

Working with forms
oninput
onchange
onclick

DOM Events

All Elements have Events

XML - message format
JSON - message format

AJAX - XMLHttpRequest
https://javascript.info/xmlhttprequest

XML - eXtensible Markup Language

<products>
<product>
	<name>Furniture</name>
	<stock>500</stock>
</product>
<product>
	<name>Television</name>
	<stock>500</stock>
</product>
</products>

Schema - validation info on XML

JSON - JavaScript Object Notation
- String

var product = [{
	name: 'Furniture',
	stock: 500
},{
	name: 'Television',
	stock: 500
}]

var productsJSON = "{
	'name': 'Furniture',
	'stock': 500,
	'available: true
}"

{
	'name': 'Furniture',
	'stock': 500,
	'available: true,
	'orders': [{'id':343,'cost':30}]
}


AJAX - Asynchronous JavaScript for XML

JSON
XmlHttpRequest - make remote HTTP requests from JS

HTTP Requests

GET
POST
PUT
PATCH
DELETE

API - application programming interface
HTTP services





HTML -

	<html>
	<body>
	<div></div>
	</body>
	</html>

W3C - compliance

# Day 4

ES6 - advanced JS syntax / features

### Template literals
### let and const
### Destructuring
### Spread and Rest Operator
### Arrow Functions
### class
### import and export
### for-of

	//var arr = [20,40,60]
	var arr = 'JavaScript'

	for(let item of arr){
	console.log(item)
	}

### Promise

	const add = (a,b,cbFn) => {
	cbFn(a+b)
	}

	add(3,6,
		function(result){
		console.log(result)
	})


	// Promise
	var pr = new Promise((resolve,reject) => {
	if(true){
		resolve('success data')
	}
	else {
		reject('error data')
	}
	})

	pr.then((data)=>{
	console.log(data)
	}).catch((err)=>{
	console.log(err)
	})

SQL - Querying, filter and functions

Non-Relational Databases - No-SQL database

Document based
Object based
Graph based
TimeSeries based

Relational Database Management System - RDBMS 

Table format
Rows - Records
Columns - Fields

SQL - Structured Query Language

-- wildcard query
select * from employee

-- alias

-- filtering with where

-- ordering

-- scalar functions

-- groupby functions


# Day 5

SQL - Joins
 
SQL - DDL, Constraints







