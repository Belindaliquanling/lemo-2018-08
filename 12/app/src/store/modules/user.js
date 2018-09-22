export default{
    namespaced:true,//带命名空间

    state:{
        users:['张三','李四','老王']
    },
    getters:{
        users(state){
            return state.users
        }
    },
    mutations:{
        changeUsers(state,payload){
            state.users=payload
        }
    },
    actions:{
        CHANGE_USERS({commit},payload){
             commit('changeUsers',payload)
        }
    }
}