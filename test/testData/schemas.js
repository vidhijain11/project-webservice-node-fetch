class Schemas {

    get getBooking() {

        return {
            "type": "object",
            "properties": {
                "firstname": {
                    "type": "string"
                },
                "lastname": {
                    "type": "string"
                },
                "totalprice": {
                    "type": "integer"
                },
                "depositpaid": {
                    "type": "boolean"
                },
                "bookingdates": {
                    "type": "object",
                    "properties": {
                        "checkin": {
                            "type": "string"
                        },
                        "checkout": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "checkin",
                        "checkout"
                    ]
                },
                "additionalneeds": {
                    "type": "string"
                }
            },
            "required": [
                "firstname",
                "lastname",
                "totalprice",
                "depositpaid",
                "bookingdates",
                "additionalneeds"
            ]
        }
    }

    get createBooking() {
        return {
            "type": "object",
            "properties": {
                "bookingid": {
                    "type": "integer"
                },
                "booking": {
                    "type": "object",
                    "properties": {
                        "firstname": {
                            "type": "string"
                        },
                        "lastname": {
                            "type": "string"
                        },
                        "totalprice": {
                            "type": "integer"
                        },
                        "depositpaid": {
                            "type": "boolean"
                        },
                        "bookingdates": {
                            "type": "object",
                            "properties": {
                                "checkin": {
                                    "type": "string"
                                },
                                "checkout": {
                                    "type": "string"
                                }
                            },
                            "required": [
                                "checkin",
                                "checkout"
                            ]
                        },
                        "additionalneeds": {
                            "type": "string"
                        }
                    },
                    "required": [
                        "firstname",
                        "lastname",
                        "totalprice",
                        "depositpaid",
                        "bookingdates",
                        "additionalneeds"
                    ]
                }
            },
            "required": [
                "bookingid",
                "booking"
            ]
        }
    }

    get getAllBookings() {
        return {
            "type": "object",
            "properties": {
                "bookingid": {
                    "type": "integer"
                }
            },
            "required": [
                "bookingid"
            ]
        }
    }

}

export default new Schemas();