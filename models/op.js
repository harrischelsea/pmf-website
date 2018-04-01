module.exports = (sequelize, DataTypes) => {
    let op = sequelize.define('Op', {
        naslov: { type: DataTypes.STRING, allowNull: false },
        tekst: { type: DataTypes.STRING, allowNull: false },
        istaknuto: { type: DataTypes.BOOLEAN, defaultValue: false }
    });

    return op;
};