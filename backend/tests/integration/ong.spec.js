const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be albe to create a new ONG', async () => {
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "APADTEST",
            email: "contato@fa.com",
            whatsapp: "32998024272",
            city: "Barbacena",
            uf: "MG"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});