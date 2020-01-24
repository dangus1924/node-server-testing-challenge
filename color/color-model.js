const db = require('../database/db-config')

function add() {
    
}

function find() {
  return db('color')
    .select('id', 'color', 'description')
}

function findById() {

}

function update() {

}

function destroy() {

}


module.exports = {
    add,
    find,
    findById,
    update,
    destroy,
}