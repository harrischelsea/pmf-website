var db = require('../models');
var sequelize = db.sequelize;

async function getAllOPnews() {
    let res =  await sequelize.query(
        `SELECT "Vijestis".id, "Vijestis".naslov, "Vijestis".tekst, "Vijestis"."createdAt", 
            "Vijestis".slug, "Vijestis".slika, "Vijestis".kategorija_id,  "Kategorijes".naziv FROM "Vijestis"
            INNER JOIN "Kategorijes" on "Vijestis".kategorija_id = "Kategorijes".id
            WHERE "Vijestis".istaknuto = 'false' AND "Vijestis".kategorija_id = 1
            ORDER BY "Vijestis"."createdAt" DESC
        `,
        { type: sequelize.QueryTypes.SELECT});
    return res;
}

async function getAllSSnews() {
    let res =  await sequelize.query(
        `SELECT "Vijestis".id, "Vijestis".naslov, "Vijestis".tekst, "Vijestis"."createdAt", 
            "Vijestis".slug, "Vijestis".slika, "Vijestis".kategorija_id,  "Kategorijes".naziv FROM "Vijestis"
            INNER JOIN "Kategorijes" on "Vijestis".kategorija_id = "Kategorijes".id
            WHERE "Vijestis".istaknuto = 'false' AND "Vijestis".kategorija_id = 2
            ORDER BY "Vijestis"."createdAt" DESC
        `,
        { type: sequelize.QueryTypes.SELECT});
    return res;
}

async function countSS() {
    let res =  await sequelize.query(
        `SELECT Count("Vijestis".id) as Number 
            WHERE "Vijestis".istaknuto = 'false' AND "Vijestis".kategorija_id = 2
            ORDER BY "Vijestis"."createdAt" DESC
        `,
        { type: sequelize.QueryTypes.SELECT});
    return res;
}

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
    getAllOPnews: getAllOPnews,
    getAllSSnews: getAllSSnews,
    countSS: countSS,
};