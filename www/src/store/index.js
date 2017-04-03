import axios from 'axios'

let api = axios.create({
  baseURL: 'http://localhost:3000/api/',
  timeout: 2000,
  withCredentials: true
})

// REGISTER ALL DATA HERE
let state = {
  activeUser: {},
  vaults: [],
  activeVault: {},
  activeKeep: {},
  myKeeps: [],
  isLoading: false,
  //Dummy Data
  keeps: [{
    title: 'Learn to Draw',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Build Beautiful sites',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Learn to Draw',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/c7/80/e3/c780e34c14258f4087df410f03d76e83.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatisconsectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Build Beautiful sites',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Learn to Draw',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }, {
    title: 'Build Beautiful sites',
    imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
    keepCount: 100,
    shareCount: 300,
    viewCount: 900,
    author: 'JimyJonJones'
  }],
  error: {}
}

let handleError = (err) => {
  state.error = err
  state.isLoading = false
}

export default {
  // ALL DATA LIVES IN THE STATE
  state,
  // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
  actions: {
    login(email, password) {
      state.isLoading = true
      api.post('login', {
        email: email,
        password: password
      }).then(res => {
        state.activeUser = res.data.data
        state.isLoading = false
      }).catch(handleError)
    },
    register(username, email, password, ) {
      state.isLoading = true
      api.post('register', {
        name: username,
        email: email,
        password: password
      }).then(res => {
        this.login(email, password)
      }).catch(handleError)
    },
    logout() {
      api.delete('logout').then(res => {
        state.activeUser = {}
      }).catch(handleError)
    },
    authenticate() {
      state.isLoading = false
      api('authenticate').then(res => {
        if (res.data.data) {
          state.activeUser = res.data.data
          state.isLoading = false
        }
      }).catch(handleError)
    },
    getVault() {
      api('vaults/' + vault._id).then(res => {
        state.activeVault = res.data.data
      }).catch(handleError)
    },
    getVaults() {
      api('vaults/').then(res => {
        state.vaults = res.data.data
      }).catch(handleError)
    },
    createVault(name, description, imgUrl) {
      let vault = { name, description, imgUrl }
      api.post('/vaults', vault)
        .then(res => {
          this.getVaults()
        }).catch(handleError)
    },
    changeVault(id, vault) {
      api.put('vaults/' + id, vault)
        .then(res => {
          this.getVaults()
        })
    },
    deleteVault(id) {
      api.delete('vaults/' + id)
        .then(res => {
          this.getVaults()
        })
    },
    createKeep(title, author, imageUrl, articleLink, isPublic, tags) {
      console.log("creating keep")
      let keep = { title, author, imageUrl, articleLink, isPublic, tags }
      api.post('/keeps', keep).then(res => {
        console.log(res.data)
      }).catch(handleError)
    },
    getKeep() {
      api('keeps/' + keep._id).then(res => {
        state.activeKeep = res.data.data
      }).catch(handleError)
    },
    getKeeps() {
      api('keeps/').then(res => {
        state.keeps = keeps
        return state.keeps
        //res.data.data 
      }).catch(handleError)
    },
    changeKeep(id, keep) {
      api.put('keeps/' + id, keep)
        .then(res => {
          this.getKeeps()
        }).catch(handleError)
    },
    deleteKeep(id) {
      api.delete('keeps/' + id)
        .then(res => {
          this.getKeeps()
        }).catch(handleError)
    },
    getDashboard() {
      api('dashboard').then(res => {
        state.myKeeps = res.data.data.keeps
        state.vaults = res.data.data.vaults
      }).catch(handleError)
    },
    getVaultKeeps(vId) {
      api('vaults/' + vId + '/keeps').then(res => {
        console.log(res.data)
        state.activeVault.keeps = res.data.data
      }).catch(handleError)
    },
    addVaultKeep(keep, vault) {
      api.put('/vaults/' + vault._id + '/newKeep/', keep._id).then(res => {
        console.log(res.data)
      })
    },
    removeVaultKeep(keep, vault) {
      api.delete('/vaults/' + vault._id + '/removeKeep', keep._id).then(res => {
        console.log(res.data)
      })
    }
  }
}

