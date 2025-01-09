import Product from '../models/product.model.js';
import mongoose from 'mongoose';

export const getProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error("Error in get products : ", error.message);
    res.status(500).json({message: 'Server Error'});
  }
}

export const deleteProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await Product.findByIdAndDelete(id);
    if(!product) {
      return res.status(404).json({message: 'Product not found'});
    }
    res.json({message: 'Product deleted successfully'});
  } catch (error) {
    console.error("Error in delete product : ", error.message);
    res.status(500).json({message: 'Server Error'});
  }
}

export const addProduct = async (req, res) => {
  const product = req.body;

  if(!product.name || !product.price || !product.image) {
    return res.status(400).json({message: 'Please enter all fields'});
  }

  const newProduct = new Product({
    name: product.name,
    price: product.price,
    image: product.image
  });

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error("Error in create product : ", error.message);
    res.status(500).json({message: 'Server Error'});
  }
}

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const product = req.body;

  if(!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({message: 'Product not found'});
  }
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
    res.json(updatedProduct);
  } catch (error) {
    console.error("Error in update product : ", error.message);
    res.status(500).json({message: 'Server Error'});
  }
}