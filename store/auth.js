import { defineStore } from "pinia";

export const authStore = defineStore({
    id:'auth',
    state: () => ({
        token: ''
    }),
    actions:{
        //
        getToken(){
            return this.token;
        },
        //
        setToken(jwt){
            this.token = jwt;
        }
    }
});