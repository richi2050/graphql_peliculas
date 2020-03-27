import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://root:root123@ds363098.mlab.com:63098/grapql_schema', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
}, () => console.log('la conexion se realizo correctamente'));

const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;


const clientesSchema = Schema({
    id: ObjectId,
    nombre: String,
    apellido: String,
    empresa: String,
    emails: Array,
    edad: Number,
    tipo: String,
    pedidos: Array
});

const Clientes = mongoose.model('clientes', clientesSchema);
export {
    Clientes
};
