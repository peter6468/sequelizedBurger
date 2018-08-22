module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("Burger", {
        burger_name: DataTypes.STRING,
        burger_price: DataTypes.INTEGER,
        devoured: DataTypes.BOOLEAN
    });
    return Burgers;
};

