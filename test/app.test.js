const request = require('supertest');
const knex = require('../db/knex');
const expect = require('chai').expect;

const app = require('../app');

const fixtures = require('./fixtures');

describe('CRUD Stickers', () => {
  before((done) => {
    // run nmigrations
    knex.migrate.latest()
      .then(() => {
        // run seeds
        return knex.seed.run();
      }).then(() => done());
  })

  it('Lists all Records', (done) => {
    request(app)
      .get('/api/v1/stickers')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('array');
        expect(response.body).to.deep.eql(fixtures.stickers);
        done();
      }).catch((err) => {
        console.log(err);
      })
  })
})
