var db = require('../models');
var sequelize = db.sequelize;

async function getCurrentNews(id, slug) {
    let res =  await sequelize.query(
        `SELECT * FROM "Vijestis"
            INNER JOIN "Kategorijes" on "Vijestis".kategorija_id = "Kategorijes".id
            INNER JOIN "Admins" on "Vijestis".admin_id = "Admins".id
            WHERE "Vijestis".id = ? AND "Vijestis".slug = ?
        `,
        { replacements: [id, slug], type: sequelize.QueryTypes.SELECT});
    return res;
}

module.exports = {
    getCurrentNews: getCurrentNews,
};