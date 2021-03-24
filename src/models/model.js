
const db = require("../routers/database");

exports.getAll = (callback) => {
    db.query("SELECT * FROM to_do_list;", (error, result) => {
        if (error) {
            console.log("error: ", "dkkdl");
            callback(error, null);
        }
        callback(null, result);
    })
}

