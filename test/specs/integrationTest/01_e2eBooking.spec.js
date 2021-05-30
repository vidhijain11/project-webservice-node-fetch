import { assert } from "chai";
import common from "../../helpers/common";
import data from "../../testData/dataSet";

let response;
let bookingID;

describe('Scenario - End to end integration test.', () => {

    it('TC01 - should be able to create, get, update and delete booking.', async function() {
        
        addContext(this, "Step1 - Create booking.")
        response = await common.createBooking(this, data.TC_e2eValid.create)
        bookingID = response.body.bookingid
        assert.isNumber(bookingID)
        assert.strictEqual(response.status, 200)
        assert.strictEqual(response.statusText, 'OK')
        assert.equal(JSON.stringify(response.body.booking), JSON.stringify( data.TC_e2eValid.create))

        addContext(this, `Step2 - Get booking ${bookingID} created in step one`)
        response = await common.getBookingById(this, bookingID)
        assert.strictEqual(response.status, 200)
        assert.strictEqual(response.statusText, 'OK')

        addContext(this, "Step3 - Partial update booking dates.")
        response = await common.partialUpdateBooking(this, bookingID, data.TC_e2eValid.update)
        assert.strictEqual(response.status, 200)
        assert.strictEqual(response.statusText, 'OK')
        assert.strictEqual(response.body.bookingdates.checkin, data.TC_e2eValid.update.bookingdates.checkin)
        assert.strictEqual(response.body.bookingdates.checkout, data.TC_e2eValid.update.bookingdates.checkout)
        
        addContext(this, `Step4 - Delete booking ${bookingID}`)
        response = await common.deleteBooking(this, bookingID)
        assert.strictEqual(response.status, 201)
        assert.strictEqual(response.statusText, 'Created')

        addContext(this, `Step5 - Get deleted booking ${bookingID}`)
        response = await common.getBookingById(this, bookingID)
        assert.strictEqual(response.status, 404)
        assert.strictEqual(response.statusText, 'Not Found')


    });
    
});