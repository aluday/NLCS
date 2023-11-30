const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const baseUrl = "http://localhost:3001";

const Product = require("../models/productSchema");
const Type = require("../models/typeSchema");

class AdminController {
  async storeType(req, res) {
    try {
      const { type_name } = req.body;
      const checkType = await Type.findOne({ type_name: type_name });
      if (checkType) {
        return res.status(200).send({
          status: "false",
          message: "Type is existed",
        });
      }
      const newType = new Type({ type_name });
      await newType.save();
      return res.status(200).send({
        status: "true",
        message: "Create new type statusfully",
        newType,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        status: "false",
        message: "Error while add type product",
        error,
      });
    }
  }

  async updateType(req, res) {
    try {
      const typeId = req.params.id;
      const type = await Type.findByIdAndUpdate(
        {_id: typeId},
        {...req.body},
        {new: true}
      );
      return res.status(201).send({
        status: "true",
        message: "Update type statusfully",
        type,
      })
    } catch (error) {
      console.log(error);
    }
  }

  async deleteType (req, res) {
    try {
      const typeId = req.params.id;
      await Type.findByIdAndDelete( {_id: typeId} );
      return res.status(201).send({
        status: "true",
        message: "Delete type statusfully",
      });
    } catch (error) {
      console.log(error);
    }
  }

  async addProduct(req, res) {
    try {
      const pathToFile =
        req.file && req.file.filename ? `/uploads/${req.file.filename}` : "";
      const { productName, discount, size, type, basicPrice, countInStock } = req.body;

      const checkProduct = await Product.findOne({
        productName: productName,
      });
      if (checkProduct) {
        return res.status(200).send({
          status: "false",
          message: "Product is existed",
        });
      }

      const newProduct = new Product({
        productName,
        image: pathToFile,
        basicPrice,
        countInStock,
        discount,
        size: JSON.parse(size),
        type,
      });
      await newProduct.save();

      return res.status(200).send({
        status: "true",
        message: "Create product statusfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        status: "false",
        message: "Error while add product",
        error,
      });
    }
  }

  async updateProduct(req, res) {
    try {
      const productId = req.params.id;
      const product = await Product.findByIdAndUpdate(
        { _id: productId },
        { ...req.body },
        { new: "true" }
      );
      return res.status(201).send({
        status: "true",
        message: "Update product statusfully",
        product,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async deleteProduct(req, res) {
    try {
      const productId = req.params.id;
      await Product.findByIdAndDelete({ _id: productId });
      return res.status(200).send({
        status: "true",
        message: "Delete product statusfully",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).send({
        status: "false",
        message: "error",
        error,
      });
    }
  }
}

module.exports = new AdminController();