const mysql=require('mysql')


var sqlcon = mysql.createConnection({
    host: "lec2-54-197-34-207.compute-1.amazonaws.com",
    port:5432,
    user: "rlrlsawqdgrsgq",
    password: "4bdc400f8eb1dc56e853cd9c49e735d1ee50cad003f2bd477d94cf3105543c74",
    database:"d6panrdho8ko9l",
    URI:"postgres://rlrlsawqdgrsgq:4bdc400f8eb1dc56e853cd9c49e735d1ee50cad003f2bd477d94cf3105543c74@ec2-54-197-34-207.compute-1.amazonaws.com:5432/d6panrdho8ko9l",
    
  });
  
 sqlcon.connect(async function(err) {
  if (err){
      console.log("connection to database failed");
      console.log(err)
  }
  else{console.log("connected to database");}
  });

module.exports={sqlcon};