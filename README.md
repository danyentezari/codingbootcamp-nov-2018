## Setup
### 1) Clone the repo with `git clone`
### 2) Run `npm install` in the terminal
### 3) Update the keys under /config
### 4) Run `node index.js` to start the sever

## Practice Exercise
### 1) Create a mongoose model for a 'products' collection
### 2) The schema should have the following fields saved to the collection
######   name
######     brand
######     price
######     inventory
######     date
### 3) Add a new file under routes for 'products'
### 4) Add the route to index.js
### 5) Create a POST request that will save a product to the collection
### 6) Create a GET request that will retrieve all of the products from the collection
######   Hint: use Products.find({}, (err, products)=>{...})