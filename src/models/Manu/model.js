'use strict';

const ManuModel = (sequelize, DataTypes) => sequelize.define('Manu', {
  name: { type: DataTypes.STRING, required: true },
  genre: { type: DataTypes.STRING, required: true },
  fiction: { type: DataTypes.STRING, required: true },
  nonfiction: { type: DataTypes.STRING, required: true }
});