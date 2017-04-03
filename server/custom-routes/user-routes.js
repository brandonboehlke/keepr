let Users = require('../models/user')
let Vaults = require('../models/vault')
let Keeps = require('../models/keep')

export default {
  getDashboard: {
    path: '/dashboard',
    reqType: 'get',
    method(req, res, next) {
      let action = 'Get your dashboard with your vaults and keeps'
      Vaults.find({ creatorId: req.session.uid }).then(vaults => {
        Keeps.find({ creatorId: req.session.uid }).then(keeps => {
          res.send(handleResponse(action, { keeps, vaults }))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
      })
    }
  },
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