const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

decribe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APA",
                email: "contato@apa.com.br",
                whatsapp: "410",
                city: "Curitiba",
                uf: "PR"
            });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLenght(8);
    });
});