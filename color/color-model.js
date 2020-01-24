const db = require('../database/db-config')

async function add(color) {
    const [id] = await db('color').insert(color)
    return findById(id)
}

function list() {
  return db('color')
    
}

async function findById(id) {    
    return db('color')
        .where({ id })
        .first()
}

async function update(id, update) {
    await db('color')
        .where({ id })
        .update(update)
    return findById(id)
}

function destroy(id) {
    return db('color').where({ id }).del()
}


module.exports = {
    add,
    list,
    findById,
    update,
    destroy,
}