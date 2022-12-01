'use strict';

// Whiteboard differs from code
//Implement RPG Schema

require('dotenv').config();
const { Sequelize, DataTypes } = require ('sequelize');

const playerSchema = require('./players.schema');

//'postgres://localhost:5432/basic-api-server' post in URL for testing
//Ternary is used to set up sqlite for testing
const DATABASE_URL = process.env.NODE_ENV === 'test'
    ? 'sqlite::memory'
    : process.env.DATABASE_URL;


//Instantitate the sequelized connection to the database

const sqlDatabase = new Sequelize(DATABASE_URL, {
    dialectOptions:{
        ssl:{
            require: true,
            rejectUnauthorized: false,
        },
    },
});

// Whiteboard differs from code
//Implement RPG Schema

const PlayerModel = playerSchema(sqlDatabase, DataTypes);

module.exports = {
    sqlDatabase,
    PlayerModel,
};