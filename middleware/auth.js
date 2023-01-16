import { authStore } from "../store/auth";

export default defineNuxtRouteMiddleware((to) =>{
    const store = authStore();
    const user = store.token;
    if(user == ''){
        return navigateTo('/login')
    }
})