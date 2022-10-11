import { Request, Response } from 'express';
import Producto from '../model/Producto';
import jwt from 'jsonwebtoken';



const getall = async (req: Request, res: Response) => {
	const users = await Producto.find();
	res.json(Producto);
};

const getone = async (req: Request, res: Response) => {
	const user = await Producto.findById(req.params.id);
	res.json(Producto);
};
const nuevoproducto = async (req: Request, res: Response) => {
	const name = req.body.name;
	const price = req.body.price;
	let descripction = req.body.descripction;
	const newProducto = new Producto({ name, price, descripction });
	await newProducto.save();
	const token = jwt.sign({ id: newProducto._id }, 'yyt#KInN7Q9X3m&$45qrZ7Z4fJiEtA6uHIFzvc@347SGHAjV4E', {
		expiresIn: 60 * 60 * 24
	});
	res.status(200).json({ auth: true, token });
};

export default {
	getall,
	getone,
    nuevoproducto
};