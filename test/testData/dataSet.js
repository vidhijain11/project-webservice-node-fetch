import DataProvider from '../testData/dataProvider'
import restMethod from '../utils/restMethod'

class DataSet extends DataProvider {

    get preReqCreate() {
        return this.createBooking.valid[2]
    }

    //Data set - Api test 01_GetBookings
    get TC_filterByName() {
        return this.filterByName.valid[0]
    }

    get TC_invalidID() {
        return restMethod.getRandomNum()
    }

    //Data set - Api test 02_CreateBooking
    get TC_createBooking() {
        return this.createBooking.valid[0]
    }

    get TC_createBookingInvalid() {

        return [{
            "testName": "Invalid firstname and lastname",
                "data": this.createBooking.invalid[0]
        },
        {
            "testName": "past date",
                "data": this.createBooking.invalid[1]
        }

        ]
    }

    //Data set - Api test 03_PartialUpdateBooking

    get TC_updateName() {
        return this.updateBooking.valid[0]
    }

    //Data Set - Integration test 01_e2eBooking

    get TC_e2eValid(){

        return {
            create : this.createBooking.valid[1],
            update : this.updateBooking.valid[1]
        }
    }
}

export default new DataSet();