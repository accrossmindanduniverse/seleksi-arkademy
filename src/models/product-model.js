const mongoose = require('mongoose');
const PRODUK_SCHEMA = mongoose.Schema({
  nama_produk: {
    type: String,
    default: true
  },
  keterangan: {
    type: String,
    default: true,
  },
  harga: {
    type: Number,
    default: true,
  },
  jumlah: {
    type: Number,
    default: 5
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('product', PRODUK_SCHEMA)