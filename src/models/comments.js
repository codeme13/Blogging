const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
 text: {
      type: String,
      trim: true,
      required: true
   },
date: {
      type: Date,
      default: new Date().toString()
   },
// each comment can only relates to one blog, so it's not in array
post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
   }
 })

module.exports = mongoose.model('Comment', commentSchema);