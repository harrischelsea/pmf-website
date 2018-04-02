module.exports = (sequelize, DataTypes) => {
    let Vijesti = sequelize.define('Vijesti', {
        naslov: { type: DataTypes.STRING, allowNull: false },
        tekst: { type: DataTypes.TEXT, allowNull: false },
        istaknuto: { type: DataTypes.BOOLEAN, defaultValue: false },
        slug: { type: DataTypes.STRING, allowNull: false },
        slika: { type: DataTypes.STRING, allowNull: false },
    });

    return Vijesti;
};