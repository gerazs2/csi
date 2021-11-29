import * as mongoose from 'mongoose';

export const EmployeesSchema = new mongoose.Schema({

    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    fNacimiento: { type: String, required: true },
    telefono: { type: String, required: true },
    dirrecion: { type: String, required: true },
    oficina: { type: String, required: true },
    curp: { type: String, required: true },

}, { timestamps: true });

EmployeesSchema.index({ email: 1 }, { unique: true });

EmployeesSchema.index({ curp: 1 }, { unique: true });
