const mysql=require('mysql')


var sqlcon = mysql.createConnection({
    host: "localhost",
    port:3306,
    user: "root",
    password: "",
    database:"mydb",
  });
  
 sqlcon.connect(async function(err) {
  if (err){
      console.log("connection to database failed");
      console.log(err)
  }
  else{console.log("connected to database");}
  });

module.exports={sqlcon};