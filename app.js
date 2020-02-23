const express = require("express");
const mysqlcon = require("./mysql");

const bodyparser = require("body-parser");
const sqlcon = mysqlcon.sqlcon;
const app = express();

app.use(bodyparser.json());

app
  .route("/")
  .get(function(req, res, next) {
    sqlcon.query("select * from `animes`", (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    });
  })
  .post(function(req, res, next) {
    var body = req.body;
    console.log();

    sqlcon.query(
      "INSERT INTO `animes`(`title`, `genres`, `link`, `aired`, `description`) VALUES (?,?,?,?,?)",
      [body.title, body.genres, body.link, body.aired, body.description],
      (err, rows, fields) => {
        if (err) {
          console.log(err);
        } else {
          res.send(rows);
        }
      }
    );
  });

app.put("/:id", function(req, res, next) {
  var id = req.params.id;
  var body = req.body;
  sqlcon.query(
    "UPDATE `animes` SET `title`=?,`genres`=?,`link`=?,`aired`=?,`description`=? WHERE `id`=?",
    [body.title, body.genres, body.link, body.aired, body.description, id],
    (err, rows, fields) => {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    }
  );
});
app.delete("/:id", function(req, res, next) {
  var id = req.params.id;
  sqlcon.query("delete from `animes` where id=?", [id], (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});
app.get("/:id",function (req,res,next)
{
  var id = req.params.id;
  sqlcon.query("select * from `animes` where id=?", [id], (err, rows, fields) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});
app.listen(3000, () => {
  console.log(`Server started on 3000`);
});
