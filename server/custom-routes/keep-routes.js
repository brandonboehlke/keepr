let Keeps = require('../models/keep')
let Users = require('../models/user')
let Vaults = require('../models/vault')

export default {
    createKeep: {
        path: '/keeps/new',
        reqType: 'post',
        method(req, res, next) {
            let action = 'creating a new keep'
            Keeps.create(req.body).then((createdKeep => {

            }))
        }

    },
    addKeepToVault: {
        path: ''
    }


}