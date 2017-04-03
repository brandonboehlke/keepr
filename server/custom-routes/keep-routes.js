let Keeps = require('../models/keep')
let Users = require('../models/user')

export default {
    getPublicKeeps: {
        path: '/keeps',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Getting all public keeps'
            Keeps.find({ isPublic: true }).then(keeps => {
                res.send(handleResponse(action, keeps))
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