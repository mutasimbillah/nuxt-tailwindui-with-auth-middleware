<template>
    <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company" />
            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form class="space-y-6" @submit.prevent="handleSubmit" method="POST" id="login">
                    <div>
                        <label for="phone" class="block text-sm font-medium text-gray-700">Phone Number</label>
                        <div class="mt-1">
                            <input id="phone" name="phone" type="text" autocomplete="phone" required
                                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                        </div>
                    </div>

                    <div>
                        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                        <div class="mt-1">
                            <input id="password" name="password" type="password" autocomplete="current-password"
                                required
                                class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                        </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            <a href="/register" class="font-small text-green-600 hover:text-green-500">Register an
                                account</a>
                        </div>

                        <div class="text-sm">
                            <a href="#" class="font-small text-indigo-600 hover:text-indigo-500">Forgot your
                                password?</a>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                            class="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Sign
                            in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup>
import { authStore } from '~~/store/auth';


async function handleSubmit() {
    const config = useRuntimeConfig();
    const store = authStore();
    const loginForm = document.getElementById('login');
    let formData = new FormData(loginForm);
    const data = {};
    // need to convert it before using not with XMLHttpRequest
    for (let [key, val] of formData.entries()) {
        Object.assign(data, { [key]: val })
    }
    //console.log(data);
    const { data: loginApi, error } = await useFetch(
        '/merchant-login',
        {
            baseURL: config.public.baseURL,
            headers: { 'X-Requested-With': 'XMLHttpRequest' },
            method: 'post',
            params: data
        }
    );
    //console.log(error.value.data);
    const loginData = loginApi.value.data;
    console.log(loginData.access_token);
    store.setToken(loginData.access_token);
    navigateTo('/');
}
</script>