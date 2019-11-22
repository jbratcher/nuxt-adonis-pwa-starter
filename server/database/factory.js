'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

// Users Factory

Factory.blueprint('App/Models/User', async (faker) => {
  return {
    username: faker.username(),
    full_name: faker.name(),
    email: faker.email(),
    password: faker.password(),
  }
})

// Posts Factory

Factory.blueprint('App/Models/Post', async (faker) => {
  return {
    title: faker.sentence({words: 10}),
    subtitle: faker.sentence({words: 10}),
    body: faker.paragraph({sentences: 10}),
  }
})
