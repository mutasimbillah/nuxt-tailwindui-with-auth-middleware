import { defineStore } from "pinia";

export const authStore = defineStore({
    id:'auth',
    state: () => ({
        token: 'abcs'
    }),
    actions:{
        //
        getToken(){
            return this.token;
        },
        //
        setToken(jwt){
            token = jwt;
        }
    }
});