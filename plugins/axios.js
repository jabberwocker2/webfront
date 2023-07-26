import axios from "axios"

export default defineNuxtPlugin((NuxtApp) => {

    axios.defaults.withCredentials = true;

    return {
        provide: { 
            axios: axios
        },
    }
})