module.exports = (sequelize, DataTypes) => {
    var Kategorije = sequelize.define('Kategorije', {
        naziv: { type: DataTypes.STRING, unique: true, allowNull: false },
    });

    Kategorije.associate = function(models) {
        models.Kategorije.hasMany(models.Vijesti, { foreignKey: 'kategorija_id'});
    };

    return Kategorije;
};