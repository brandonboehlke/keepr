let Vaults = require('../models/vault')

export default {

    vaultKeeps: {
        path: 'vaults/:id/keeps',
        reqType: 'get',
        method(req, res, next){
            let action = 'Gets keeps in a particular vault'
            let keep = req.body
            

        }
    },
    

}