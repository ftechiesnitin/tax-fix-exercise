const should = require('chai').should(),
    expect = require('chai').expect,
    supertest = require('supertest'),
    api = supertest('http://localhost:5000');

describe('Test', () => {
    it('test api', (done) => {
        api.get('/test')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                done();
            });
    });
});

describe('Exchange Rates', () => {
    it('Exchnage Rates', (done) => {
        api.post('/api/exchange/rates')
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                done();
            });
    });
});