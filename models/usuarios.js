var mongoose=require("mongoose");
var Schema=mongoose.Schema;

mongoose.connect("mongodb://localhost/registro_clientes");

var nuevo_usuario={nombre:String,
		   apellido:String,
                   edad:Number};
var usuario_schema=new Schema(nuevo_usuario);
var User=mongoose.model("User",usuario_schema);

module.exports=User;
