const { Model, DataTypes } = require('sequelize');

class Posts extends Model {
    static init(sequelize){
      super.init({
        content: DataTypes.STRING,
        user_id: DataTypes.INTEGER,
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE
      },
      { 
        sequelize
       })
    }
  }

  module.exports = Posts;