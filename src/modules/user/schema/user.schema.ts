import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
      
    nombre:{type:String,required:true},
    apellido:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    fNacimiento:{type:String,required:true},
    telefono:{type:String,required:true},
    dirrecion:{type:String,required:true},
    edoResidencia:{type:String,required:true},
    habilidades:{type:String,required:true},
    idContrato:{type:String,required:true},
    oficina:{type:String,required:true},
    rol:{type:String,required:true},
    
}, {timestamps:true});

UserSchema.index({email:1},{unique:true});