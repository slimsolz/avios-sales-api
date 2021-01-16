import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import 'babel-polyfill';
import { validSellerToken, productWithMissingField } from './utils/setup';

const { expect } = chai;
chai.use(chaiHttp);

describe('Product Validation', () => {
  it('should return 422 for missing field', async () => {
    const res = await chai.request(app).post('/api/v1/products')
    .set('Authorization', `Bearer ${validSellerToken}`).send(productWithMissingField);
    expect(res).to.have.status(422);
    expect(res.body.message).to.be.equal('"name" is required');
  });
});
