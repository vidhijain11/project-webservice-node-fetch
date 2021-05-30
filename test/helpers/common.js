import Endpoints from '../helpers/endpoints.js'
import restMethod from '../utils/restMethod.js'
import data from '../testData/dataSet'

let reqData;

class Common {

   async getAllBookings(scope, reqData='' ) {

        return await restMethod.get(scope, Endpoints.baseURL(), reqData)
    }

    async getBookingsByName(scope, FN, LN, reqData=''){

        return await restMethod.get(scope, Endpoints.getBookingByNameURL(FN, LN), reqData)
    }

    async getBookingById(scope, id, reqData=''){

        return await restMethod.get(scope, Endpoints.getBookingURL(id), reqData)
    }

    async createBooking(scope, requestBody) {

        return await restMethod.post(scope, Endpoints.baseURL(), {
            reqBody: requestBody,
            reqHeader: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        })
    }

    async partialUpdateBooking(scope, bookingID, requestBody, auth=true){

        if(auth){
            reqData = {
                reqBody: requestBody,
                reqHeader: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': data.authCode},
            }
        } else {
            reqData = {
                reqBody: requestBody,
                reqHeader: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            }
        }

        return await restMethod.patch(scope, Endpoints.getBookingURL(bookingID), reqData)
    }

    async deleteBooking(scope, bookingID, auth=true){

        if(auth){
            reqData = {
                reqHeader: { 'Content-Type': 'application/json', 'Authorization': data.authCode },
            }
        } else {
            reqData = {
                reqHeader: { 'Content-Type': 'application/json'},
            }
        }

        return await restMethod.delete(scope, Endpoints.getBookingURL(bookingID), reqData)
    }



}

export default new Common()