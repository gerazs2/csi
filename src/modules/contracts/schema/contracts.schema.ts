import * as mongoose from 'mongoose';

export const ContractsSchema = new mongoose.Schema({
      
    nombre:{type:String,required:true},
    idCompany:{type:String,required:true},
    finicio:{type:String,required:true},
    ffinal:{type:String,required:true},
    
}, {timestamps:true});

