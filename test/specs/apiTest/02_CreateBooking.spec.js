import data from '../../testData/dataSet'
import common from '../../helpers/common';
import schema from '../../testData/schemas.js';
import chai, { assert } from 'chai';
chai.use(require('chai-json-schema'));

let response;

describe('Scenario - Create booking', () => {

    it('TC01 - [Positive] should be able to create booking. ', async function () {

        response = await common.createBooking( this, data.TC_createBooking)

        assert.strictEqual(response.status, 200)
        assert.strictEqual(response.statusText, 'OK')
        assert.equal(response.headers.get('content-type'), 'application/json; charset=utf-8')
        assert.jsonSchema(response.body, schema.createBooking)
        assert.equal(JSON.stringify(response.body.booking), JSON.stringify(data.TC_createBooking))
        assert.isNumber(response.body.bookingid)
    });

     //Using data iterator to run same script for multiple inputs
     data.TC_createBookingInvalid.forEach(async function (reqData, index) {
        it(`TC0${index+2} - [Negative] should not be able to create booking with ${reqData.testName}. `, async function () {

            response = await common.createBooking( this, reqData.data)
            assert.strictEqual(response.status, 422)
        })
     });

});