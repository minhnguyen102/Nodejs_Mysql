const connection = require("../../config/database.config")

module.exports.index = (req, res) =>  {
    let data = []
    connection.query(
        'SELECT * FROM Persons',
        function (err, results, fields) {
            data = results;
            console.log(">>> Result : ", results); // results contains rows returned by server
            console.log(">>> Data :", data);

            res.render("admin/pages/dashboard/dashboard.pug",{
                data : JSON.stringify(data)
            })
        }
    );

    
}