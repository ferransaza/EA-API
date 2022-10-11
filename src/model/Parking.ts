import { Schema, model } from 'mongoose';

const Producto = new Schema({
	name: String,
	price: Number,
	descripction: String
});

export default model('Product', Producto);