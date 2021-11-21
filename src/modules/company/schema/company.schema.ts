import * as mongoose from 'mongoose';

export const CompanySchema = new mongoose.Schema({
      
    nombre:{type:String,required:true},
    giro:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    telefono:{type:String,required:true},
    direccion:{type:String,required:true},
    special:{type:String,required:true},
   
    
}, {timestamps:true});

CompanySchema.index({email:1},{unique:true});