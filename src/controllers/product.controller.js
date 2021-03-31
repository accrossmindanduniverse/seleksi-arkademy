const helper = require('../helpers');
const Product = require('../models/product-model');

module.exports = {

  getAllProducts: async function(_, res) {
    try {
      const result = await Product.find()
      return helper.response(res, 'success', result, 200)
    } catch(err) {
      console.log(err)
      return helper.response(res, 'fail', 'data not found', 500)
    }
  },

  postProduct: async function(req, res) {
    const postData = new Product({
      nama_produk: req.body.nama_produk,
      keterangan: req.body.keterangan,
      harga: req.body.harga
    });
    try {
      const result = await postData.save();
      return helper.response(res, 'success', result, 200);
    } catch(err) {
      console.log(err)
      return helper.response(res, 'fail', 'failed to post product', 500)
    }
  },

  deleteProduct: async function(req, res) {
    const setDataKey = req.params.id;
    try {
      const result = await Product.findByIdAndDelete(setDataKey);
      return helper.response(res, 'success', result, 200)
    } catch(err) {
      console.log(err)
      return helper.response(res, 'fail', 'failed to delete product', 200)
    }
  },

  updateProduct: async function(req, res) {
    const setDataKey = req.params._id
    const updateData = {
      nama_produk: req.body.nama_produk,
      keterangan: req.body.keterangan,
      harga: req.body.harga
    };
    console.log(updateData)

    try {
      const result = await Product.updateOne(setDataKey, updateData)
      return helper.response(res, 'success', result, 200)
    } catch(err) {
      console.log(err)
      return helper.response(res, 'fail', 'failed to edit product', 500)
    }
  }
}