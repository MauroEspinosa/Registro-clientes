var express=require("express");
var app=express();
var User=require("./models/usuarios");
var bodyParser=require("body-parser");
var path = require ('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.set('views', path.join(process.cwd() +'/views'));
app.use(express.static(path.join(process.cwd() + '/public')));
app.set("view engine", "ejs");

app.get("/", function(req,res){
  res.render("homepage");
  User.find(function(err,doc){
    console.log(doc);
  });
});

app.get("/registro", function(req,res){
  res.render("registro");
});

app.get("/consulta", function(req,res){
  User.find(function(err,doc){
    res.render("consulta", {doc:doc});
  });
});

app.post("/guardar", function(req,res){
  var user=new User({nombre: req.body.nombre,
                    apellido: req.body.apellido,
                    edad: req.body.edad});
  user.save(function(err,doc){
    console.log(doc);
  });
  res.redirect("/registro");
});

app.post("/cliente/:id", function(req,res){
  User.findOneAndRemove({_id:req.params.id},function(err){
    res.redirect("/consulta");
  });
});

app.post("/buscar", function(req,res){
  User.find({nombre:{$regex:req.body.search, $options:'i'}}, function(err, doc){
                                                              console.log(doc);
                                                              res.render("consulta", {doc:doc});
  });
});


app.listen(process.env.PORT || 8080, function(){
  console.log("Connection Ready");
});
