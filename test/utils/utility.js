export default class Utility {
    /**
     * To add context to testcase in HTML report
     * @param {object} testScope Given test instance
     * @param {string} requestURL Request URL
     * @param {object} requestData Request data
     * @param {object} response - Response from request
     */
    setContext(testScope, methodType, requestURL, requestData, response) {

        addContext(testScope, `Request URL: ${methodType} ${requestURL}`)
        addContext(testScope, `Request Data: ${JSON.stringify(requestData)}`)
        addContext(testScope, `Response: ${JSON.stringify(response)}`)
        addContext(testScope, `Response Headers: ${JSON.stringify(response.headers.raw())}`)
    }

    /**
     * @returns {string} Random 6 char String
     */
     getRandomNum(){
        return Math.floor((Math.random() * 1000) + 1);
    }
}