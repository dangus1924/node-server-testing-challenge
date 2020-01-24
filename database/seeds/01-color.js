
exports.seed = async (knex) => {
  // Deletes ALL existing entries and resets ids
  await knex("color").truncate()

  await knex("color").insert([
    { color: "blue" ,},
    { color: "red",  },
    { color: "yellow",  },    
  ])
}
