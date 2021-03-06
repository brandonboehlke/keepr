let Users = require('../models/user')
let Vaults = require('../models/vault')
let Keeps = require('../models/keep')

export default {

    vaultKeeps: {
        path: 'vaults/:id/keeps',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Finds keeps in a particular vault'
            let keep = req.body
            Vaults.findById(req.params.id).populate('keeps').
                then(vault => {
                    console.log('Here\'s the vault keeps: ', vault.keeps)
                    res.send(handleResponse(action, vault.keeps))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    newVaultKeep: {
        path: '/vaults/:id/newKeep',
        reqType: 'put',
        method(req, res, next) {
            let action = 'Adds a new keep to your vault'
            let keep = req.body
            Vaults.findOneAndUpdate({ _id: req.params.id }, { $addToSet: { keeps: req.body } }, { new: true })
                .then(vault => {
                    Keeps.findOneAndUpdate({ _id: keep }, {
                        $inc: {
                            timesVaulted: 1
                        }
                    }).then(data => {
                        res.send(handleResponse(action, vault))
                    })
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    removeVaultKeep: {
        path: '/vaults/:id/removeKeep',
        reqType: 'put',
        method(req, res, next) {
            let action = 'Removes a keep from your vault'
            let keep = req.body
            Vaults.findOneAndUpdate({ _id: req.params.id }, { $pull: { keeps: req.body } }, { new: true })
                .then(vault => {
                    res.send(handleResponse(action, vault))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    }
}

function handleResponse(action, data, error) {
    var response = {
        action: action,
        data: data
    }
    if (error) {
        response.error = error
    }
    return response
}