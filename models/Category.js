const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String},
  parent: {type: mongoose.SchemaTypes.ObjectId, ref: 'Category'} // 当前mongooseId关联的Category模型
})

module.exports = mongoose.model('Category', schema)