
export interface IUser extends Document{
    
    nombre:string;
    apellido:string;
    email:string;
    password:string;
    fNacimiento:Date;
    telefono:string;
    dirrecion:string;
    edoResidencia:string;
    habilidades:string;
    idContrato:string;
    oficina:string;
    rol:string;


}