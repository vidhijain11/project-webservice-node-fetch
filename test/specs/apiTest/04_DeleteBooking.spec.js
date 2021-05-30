import data from '../../testData/dataSet'
import chai, { assert } from 'chai'
import common from '../../helpers/common';
chai.use(require('chai-json-schema'));

let response;
let bookingID;

describe('Scenario - Delete booking', () => {

    before('Setting Prerequisite data - create booking', async function () {

        response = await common.createBooking(this, data.preReqCreate)
        bookingID = response.body.bookingid
    });

    it('TC01 - [Negative] unauthorized user should not able to delete booking.', async function () {

        response = await common.deleteBooking(this, bookingID, false)
        assert.strictEqual(response.status, 403)
        assert.strictEqual(response.statusText, 'Forbidden')
    });

    it('TC02 - [Positive] authorized user should be able to delete booking.', async function () {

        response = await common.deleteBooking(this, bookingID)
        assert.strictEqual(response.status, 201)
        assert.strictEqual(response.statusText, 'Created')
    });

});