import config from '../../.mocharc.js'

class Endpoints {

    /**
     * This class lists all the application endpoints
     */

     baseURL() {
    
        return config.baseURL
    }

     getBookingByNameURL(firstName, lastName) {
        return `${this.baseURL()}?firstname=${firstName}&lastname=${lastName}`
    }

     getBookingURL(id) {
        return `${this.baseURL()}/${id}`
    }

}

export default new Endpoints();