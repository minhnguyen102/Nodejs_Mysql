const connection = require("../../config/database.config")

module.exports.index = (req, res) =>{
    res.render("client/pages/home/index.pug")
}

module.exports.createUserPost = (req, res) =>{
    // let { lastName, firstName, address, city } = req.body;
    let lastName = req.body.lastName;
    let firstName = req.body.firstName;
    let address = req.body.address;
    let city = req.body.city;

    var sql = `insert into 
        Persons(LastName, FirstName, Address, City)
        values (?, ?, ?, ?)`
    var value = [lastName, firstName, address, city];
    connection.query(
      sql,
      value,
      function(err, result) {
        if(err){
          console.log(err)
          res.send("Lỗi");
        }else{
          console.log(result);
          res.send("Ok");
        }
      }
      
    )
    
}