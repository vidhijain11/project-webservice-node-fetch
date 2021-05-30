import data from '../../testData/dataSet'
import schema from '../../testData/schemas.js';
import chai, { assert } from 'chai';
import common from '../../helpers/common';
chai.use(require('chai-json-schema'));

let response;
let bookingID;

describe('Scenario - Partial update booking', () => {

    before('Setting Prerequisite data - create booking', async function () {

        response = await common.createBooking(this, data.preReqCreate)
        bookingID = response.body.bookingid
    });

    it('TC01 - [Negative] unauthorized user should not able to update booking.', async function () {

        response = await common.partialUpdateBooking(this, bookingID, data.TC_updateName, false)
        assert.strictEqual(response.status, 403)
        assert.strictEqual(response.statusText, 'Forbidden')
    });

    it('TC02 - [Positive] authorized user should be able to update first name, last name.', async function () {

        response = await common.partialUpdateBooking(this, bookingID, data.TC_updateName)
        assert.strictEqual(response.status, 200)
        assert.strictEqual(response.statusText, 'OK')
        assert.strictEqual(response.body.firstname, data.TC_updateName.firstname)
        assert.strictEqual(response.body.lastname, data.TC_updateName.lastname)
        assert.jsonSchema(response.body, schema.getBooking)
    });

});