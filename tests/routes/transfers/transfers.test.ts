
import server from "../../index"
import supertest from 'supertest';
const requestWithSupertest = supertest(server);

describe('Transfer router', () => {
    it('Transfers POST', async () => {
        const res = (await requestWithSupertest.post('/transfers')).body({});
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('users')
    })
})