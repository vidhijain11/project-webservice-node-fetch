import restMethod from '../utils/restMethod.js'

export default class DataProvider {

    get authCode() {
        return 'Basic YWRtaW46cGFzc3dvcmQxMjM='
    }

    get createBooking() {
        return {
            valid: [
                {
                    "firstname": "Jim",
                    "lastname": "Brown",
                    "totalprice": 111,
                    "depositpaid": true,
                    "bookingdates": {
                        "checkin": "2022-01-01",
                        "checkout": "2022-01-01"
                    },
                    "additionalneeds": "Breakfast"
                },

                {
                    "firstname": "Jim*(%/234",
                    "lastname": "Brown$#@!",
                    "totalprice": 111000,
                    "depositpaid": true,
                    "bookingdates": {
                        "checkin": "2023-01-01",
                        "checkout": "2023-01-01"
                    },
                    "additionalneeds": "123Cab_*&)"
                },

                {
                    "firstname": "Tom" + restMethod.getRandomNum(),
                    "lastname": "Millen" + restMethod.getRandomNum(),
                    "totalprice": 100,
                    "depositpaid": true,
                    "bookingdates": {
                        "checkin": "2022-12-01",
                        "checkout": "2022-12-02"
                    },
                    "additionalneeds": "Lunch"
                }

            ],

            invalid: [
                {  //invalid name
                    "firstname": null,
                    "lastname": null,
                    "totalprice": 0,
                    "depositpaid": false,
                    "bookingdates": {
                        "checkin": "2020-12-01",
                        "checkout": "2021-12-01"
                    },
                    "additionalneeds": "Breakfast"
                },
                {  //past date
                    "firstname": "",
                    "lastname": "",
                    "totalprice": 0,
                    "depositpaid": false,
                    "bookingdates": {
                        "checkin": "2018-12-01",
                        "checkout": "2017-12-01"
                    },
                    "additionalneeds": "Breakfast"

                }
            ]
        }
    }

    get updateBooking() {
        return {
            valid: [
                {
                    "firstname": "JamesUpdate",
                    "lastname": "BrownUpdate"
                },

                {
                    "bookingdates": {
                        "checkin": "2022-12-01",
                        "checkout": "2022-12-02"
                    }
                }

            ]
        }
    }

    get filterByName() {
        return {
            valid: [
                {
                    "firstname": "sally",
                    "lastname": "brown"
                }
            ]
        }
    }


}