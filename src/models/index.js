'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const ManuModel = require('./Manu/model.js');
const EditorModel = require('./Editor/model.js');
const HeadEditorModel = require('./HeadEditor/model');
const Collection = require('./data-collection.js');

const environment = process.env.NODE_ENV;
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';
const testOrProduction = (environment === 'test' || environment === 'production');

const sequelize = new Sequelize(DATABASE_URL, testOrProduction ? {logging: false} : {});
const Manu = ManuModel(sequelize, DataTypes);
const Editor = EditorModel(sequelize, DataTypes);
const HeadEditor = HeadEditorModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  Manu: new Collection(Manu),
  Editor: new Collection(Editor),
  HeadEditor: new Collection(HeadEditor),
};