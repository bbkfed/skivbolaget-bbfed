if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const config = {
    databaseURL: process.env.DATABASE,
    secretKey: process.env.SECRET_KEY,
    sendgridkey: process.env.MAIL,
    STRIPE_KEY: process.env.STRIPE_KEY 
};

module.exports = config;