let Users = require('../models/user')
let Vaults = require('../models/vault')
let Keeps = require('../models/keep')

export default {

  getUser: {
    path: '/users/:id',
    reqType: 'get',
    method(req, res, next) {
      let action = 'get a user'
      Users.findOne({ _id: req.params.id })
        .then(user => {
          user.password = null
          res.send(handleResponse(action, user))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  editUser: {
    path: '/users/:id',
    reqType: 'put',
    method(req, res, next) {
      console.log('req body   => ', req.body)
      let action = 'Update a users info'
      Users.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, user) {
        if (err) {
          console.log(err)
        } else {
          console.log('user was changed', user)
        }
      }).then(user => {
        console.log("ayyyyy")
        res.send(handleResponse(action, { message: "you've changed your user" }))
      }).catch(error => {
        return next(handleResponse(action, null, error))
      })
    }
  },
  getDashboard: {
    path: '/users/:id/dashboard',
    reqType: 'get',
    method(req, res, next){
      let action = 'Get your dashboard'
      Vaults.Find({creatorId: req.params._id}).then( vaults => {
        Keeps.Find({creatorId: req.params._id}).then(keeps => {
          res.send(handleResponse(action, {keeps, vaults}))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
      })
    }
  },
  // getVaults: {
  //   path: '/users/:id/vaults',
  //   reqType: 'get',
  //   method(req, res, next) {
  //     let action = 'Get your vaults'
  //     Users.findById(req.params.id).populate("vaults").then(user => {
  //       res.send(handleResponse(action, user.vaults))
  //     }).catch(error => {
  //       return next(handleResponse(action, null, error))
  //     })
  //   }
  // }

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