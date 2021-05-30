import schema from '../../testData/schemas.js';
import data from '../../testData/dataSet';
import restMethod from '../../utils/restMethod';
import common from '../../helpers/common';
import chai, { assert } from 'chai';

chai.use(require('chai-json-schema'));

let response;
let bookingID;

describe('Scenario - Get bookings', () => {

    before('Setting Prerequisite data - create booking', async function () {

        response = await common.createBooking(this, data.preReqCreate)
        bookingID = response.body.bookingid
    });

    it('TC01 - [Positive] should be able to get all booking ids. ', async function() {

        response = await common.getAllBookings(this)

        assert.strictEqual(response.status, 200)
        assert.strictEqual(response.statusText, 'OK')
        assert.equal(response.headers.get('content-type'), 'application/json; charset=utf-8')
        assert.jsonSchema(response.body[0], schema.getAllBookings)
        assert.isNumber(response.body[0].bookingid)
    });

    it('TC02 - [Positive] should be able to get all booking ids filtered by name. ', async function() {

        response = await common.getBookingsByName(this, data.TC_filterByName.firstname, data.TC_filterByName.lastname)

        assert.strictEqual(response.status, 200)
        assert.strictEqual(response.statusText, 'OK')
        assert.strictEqual(response.headers.get('content-type'), 'application/json; charset=utf-8')
    });

    it('TC03 - [Positive] should be able to get booking details by id.', async function() {

        response = await common.getBookingById(this, bookingID)

        assert.strictEqual(response.status, 200)
        assert.strictEqual(response.statusText, 'OK')
        assert.equal(response.headers.get('content-type'), 'application/json; charset=utf-8')
        assert.jsonSchema(response.body, schema.getBooking)
    });

    it('TC04 - [Negative] should not be able to get booking details by invalid id.', async function() {

        response = await common.getBookingById(this, data.TC_invalidID)

        assert.strictEqual(response.status, 404)
        assert.strictEqual(response.statusText, 'Not Found')

    });

});