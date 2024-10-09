// swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Beije Restaurant API',
            version: '1.0.0',
            description: 'Documentazione delle API per il sito formativo Restaurant',
        },
        servers: [
            {
                url: 'http://18.194.21.216/',
            },
            {
                url: 'http://localhost:3000',
            },
        ],
        components: {
            schemas: {
                Booking: {
                    type: 'object',
                    required: ['name', 'email', 'num_people', 'booking_date'],
                    properties: {
                        id: {
                            type: 'integer',
                            example: 1,
                        },
                        name: {
                            type: 'string',
                            example: 'Jhon Doe',
                        },
                        email: {
                            type: 'string',
                            format: "email",
                            example: "sample@mail.com",
                        },
                        num_people: {
                            type: 'int',
                            example: '3',
                        },
                        booking_date: {
                            type: 'string',
                            format: 'date',
                            example: '2024-12-05',
                        },
                        notes: {
                            type: 'string',
                            example: "This is a sample note"
                        }
                    },
                },
                Review: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 1,
                        },
                        customer_name: {
                            type: 'string',
                            example: 'Jhon Doe',
                        },
                        customer_job: {
                            type: 'string',
                            example: "Developer",
                        },
                        text: {
                            type: 'string',
                            example: 'Good food, good service...',
                        }
                    },
                },
                Auth: {
                    type: 'object',
                    properties: {
                        email: {
                            type: 'string',
                            example: 'eve.holt@reqres.in'
                        },
                        password: {
                            type: 'string',
                            example: 'cityslicka'
                        }
                    }
                },
                Menu: {
                    type: 'object',
                    properties: {
                        id: {
                            type: 'integer',
                            example: 1,
                        },
                        category: {
                            type: 'string',
                            example: 'Pizza'
                        },
                        name: {
                            type: 'string',
                            example: 'Vesuvius'
                        },
                        topping: {
                            type: 'array',
                            items: {
                                type: 'string',
                                example: 'Pepperoni'
                            },
                            example: ['Pepperoni', 'Cheese', 'Mushrooms']
                        },
                        price: {
                            type: 'number',
                            example: 10
                        },
                        rank: {
                            type: 'number',
                            example: 3
                        }
                    }
                },
                Setting: {
                    type: 'object',
                    properties: {
                        BOOKING_FORM_FIELDS : {
                            type: 'array',
                        },
                    } 
                }
            },
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            }
        },
        security: [
            {
                bearerAuth: [],
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

const initSwagger = (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

module.exports = initSwagger;