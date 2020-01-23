const faker = require('faker');

module.exports = {
    nameKeyword: faker.name.findName(),
    emailKeyword: faker.internet.email(),
    passwordKeyword: faker.internet.password()
};