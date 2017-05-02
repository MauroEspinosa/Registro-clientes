var mongoose=require("mongoose");
var Schema=mongoose.Schema;
mongoose.connect("mongodb://clientes:1234@ds127731.mlab.com:27731/heroku_s71j1zzq");

var nuevo_usuario={nombre:String,
		   apellido:String,
                   edad:Number};
var usuario_schema=new Schema(nuevo_usuario);
var User=mongoose.model("User",usuario_schema);

module.exports=User;
