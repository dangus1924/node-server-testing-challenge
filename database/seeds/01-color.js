
exports.seed = async (knex) => {
  // Deletes ALL existing entries and resets ids
  await knex("color").truncate()

  await knex("color").insert([
    { color: "blue" , description: 'blue is every where you go, just look up in the sky.'},
    { color: "red", description: 'A red sport car can give you a higher insurance rate, or is that just a myth?' },
    { color: "yellow", description: 'sometimes we say that the sun is yellow, but it is actually not.' },    
  ])
}
