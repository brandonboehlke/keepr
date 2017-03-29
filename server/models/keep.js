import { models } from '../config/constants'

let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    title: { type: String, required: true, dropDups: true },
    imgUrl: { type: String },
    articleLink: { type: String },
    body: { type: String, required: true },
    keepCount: { type: Number, default: 0 },
    shareCount: { type: Number, default: 0 },
    viewCount: { type: Number, default: 0 },
    creatorId: { type: ObjectId, ref: models.user.name },
    created: { type: Number, default: Date.now() },
    isPublic: { type: Boolean, default: false },
    canRemove: { type: Boolean, default: true }

})


module.exports = mongoose.model('Keep', schema)