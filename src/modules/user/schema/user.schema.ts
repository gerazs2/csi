import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
      
    ClientId:{type:String,required:true},
    ClientName:{type:String,required:true},
    ProcessDate:{type:String,required:true},
    Consulate:{type:String,required:true},
    FeePd:{type:String,required:true},
    WorkerId:{type:String,required:true},
    FirstName:{type:String,required:true},
    LastName:{type:String,required:true},
    LastName2:{type:String,required:true},
    Gender:{type:String,required:true},
    Address:{type:String,required:true},
    City:{type:String,required:true},
    State:{type:String,required:true},
    ZipCode:{type:String,required:true},
    Phone:{type:String,required:true},
    Phone2:{type:String,required:true},
    Email:{type:String,required:true},
    Passport:{type:String,required:true},
    PassportDate:{type:String,required:true},
    PPStatus:{type:String,required:true},
    New:{type:String,required:true},
    CommentMX:{type:String,required:true},
    RecrID:{type:String,required:true},
    Petition:{type:String,required:true},
    H2:{type:String,required:true},
    Interview:{type:String,required:true},
    DepositMade:{type:String,required:true},
    DepositNumber:{type:String,required:true},
    Packet:{type:String,required:true},
    WorkerStatus:{type:String,required:true},
    DOB:{type:String,required:true},
    StatusIn:{type:String,required:true},
    Renewal:{type:String,required:true},
    IllegalPresence:{type:String,required:true},
 
    
}, {timestamps:true});

UserSchema.index({Email:1},{unique:true});
UserSchema.index({WorkerId:1},{unique:true});