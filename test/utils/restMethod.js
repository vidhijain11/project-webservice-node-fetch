import Utility from './utility.js';

let response;

class RestMethod extends Utility {

    /**
     * To make HTTP POST request.
     * @param {string} reqURL URL to pass in request.
     * @param {object} reqData  Data to be passed in request.
     * @returns {object} Response of the request.
     */

   async post(scope, reqURL, reqData) {

        const requestOptions = {
            method: 'POST',
            headers: reqData.reqHeader,
            body: JSON.stringify(reqData.reqBody),
            timeout: 30000
        }
        console.log("Making POST Request to : ", reqURL)
        response= await fetch(reqURL, requestOptions).then(this.handleResponse)
        this.setContext(scope, 'POST', reqURL, reqData , response)
        return response
    }

    /**
     * To make HTTP PUT request.
     * @param {string} reqURL URL to pass in request.
     * @param {object} reqData Data to be passed in request.
     * @returns {object} Response of the request.
     */
   async put(scope, reqURL, reqData) {

        const requestOptions = {
            method: 'PUT',
            headers: reqData.reqHeader,
            body: JSON.stringify(reqData.reqBody),
            timeout: 20000
        }
        console.log("Making PUT Request to : ", reqURL)
        response = await fetch(reqURL, requestOptions).then(this.handleResponse)
        this.setContext(scope, 'PUT', reqURL, reqData, response)
        return response
    }

    /**
     * @param {object} scope current context.
     * @param {string} reqURL URL to pass in request.
     * @param {object} reqData Data to be passed in request.
     * @returns {object} Response of the request.
     */
    async patch(scope, reqURL, reqData) {

        const requestOptions = {
            method: 'PATCH',
            headers: reqData.reqHeader,
            body: JSON.stringify(reqData.reqBody),
            timeout: 20000
        }
        console.log("Making PATCH Request to : ", reqURL)
        response = await fetch(reqURL, requestOptions).then(this.handleResponse)
        this.setContext(scope, 'PATCH', reqURL, reqData, response)
        return response
    }

    /**
     * To make HTTP GET request.
     * @param {string} reqURL URL to pass in request.
     * @param {string} reqHeader Headers to be passed in request.
     * @returns {object} Response of the request.
     */
   async get(scope,reqURL, reqData = "") {

        const requestOptions = {
            method: 'GET',
            headers: reqData.reqHeader,
            timeout: 30000
        }
        console.log("Making GET Request to : ", reqURL)
        response = await fetch(reqURL, requestOptions).then(this.handleResponse)
        this.setContext(scope, 'GET', reqURL, reqData, response)
        return response
    }

    /**
     * To make HTTP DELETE request.
     * @param {string} reqURL URL to pass in request.
     * @param {object} reqHeader Headers to be passed in request.
     * @returns {object} Response of the request.
     */
    async delete(scope, reqURL, reqData = "") {

        const requestOptions = {
            method: 'DELETE',
            headers: reqData.reqHeader,
            timeout: 20000
        }
        console.log("Making DELETE Request to : ", reqURL)
        response = await fetch(reqURL, requestOptions).then(this.handleResponse)
        this.setContext(scope, 'DELETE', reqURL, reqData, response)
        return response
    }

    //HTTP Helper function

    /**
     * To handle responses from HTTP request.
     * @param {object} response Raw response from request.
     * @param {string} resType Response type [by default it is JSON]
     * @returns {object} Response of the request
     */
    async handleResponse(response) {
        console.log(response.headers.get('content-type'))
        let body
        if (response.headers.get('content-type').includes('application/json'))
            body = await response.json() //.catch(err => console.log("*WARNING: No JSON response in body*"))
        else if(response.headers.get('content-type').includes('text/plain'))
            body = await response.text()
        else
            console.warn("*WARNING: No response in body*")

        return {
            status: response.status,
            statusText: response.statusText,
            body: body,
            headers: response.headers
        }
    }

    /**
     * To get Token in JSON format
     * @param {string} token Token Id
     * @returns {object} Token in JSON format [To add in request header] 
     */
    async getJsonToken(token) {
        return JSON.parse(`{"Authorization" : "Bearer ${token}"}`)
    }
}

export default new RestMethod();