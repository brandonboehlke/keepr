import { models } from '../config/constants'

let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    title: { type: String, required: true},
    imgUrl: { type: String },
    articleLink: { type: String }, 
    tags: {type: String},
    isPublic: { type: Boolean, default: true },
    timesVaulted: { type: Number, default: 0 },
    views: { type: Number, default: 0 },

    //RELATION
    creatorId: { type: ObjectId, ref: models.user.name }
})


module.exports = mongoose.model('Keep', schema)