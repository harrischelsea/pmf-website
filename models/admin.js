module.exports = (sequelize, DataTypes) => {
    var Admin = sequelize.define('Admin', {
        username: { type: DataTypes.STRING, unique: true, allowNull: false },
        password: { type: DataTypes.STRING, allowNull: false },
        ime: { type: DataTypes.STRING, allowNull: false },
        role: { type: DataTypes.STRING, allowNull: false }
    });

    Admin.associate = function(models) {
        models.Admin.hasMany(models.Vijesti, { foreignKey: 'admin_id'});
    };

    return Admin;
};