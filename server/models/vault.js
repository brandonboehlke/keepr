import { models } from '../config/constants'

let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

let schema = new Schema({
    name: { type: String, required: true, dropDups: true },
    description: { type: String, required: true },
    created: { type: Number, required: true, default: Date.now() },

    //RELATION
    creatorId: { type: ObjectId, ref: models.user.name },
    keeps: [{type: ObjectId, ref: models.keep.name }],
})

module.exports = mongoose.model('Vault', schema)