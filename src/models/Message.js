const { Model, DataTypes } = require('sequelize');

class Message extends Model {
    static init(sequelize){
        super.init({
            from: DataTypes.INTEGER,
            target_id: DataTypes.INTEGER,
            message_status: DataTypes.BOOLEAN,
            media: DataTypes.BOOLEAN,
            message: DataTypes.TEXT,
        }, {
            sequelize
        })
    }
}

module.exports = Message;