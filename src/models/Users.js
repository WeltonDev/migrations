const { Model, DataTypes } = require('sequelize');

class Users extends Model {
    static init(sequelize){
      super.init({
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        apartment: DataTypes.INTEGER,
        password: DataTypes.STRING,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
      },
      { 
        sequelize
       })
    }
  }

  module.exports = Users;