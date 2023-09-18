import axios from "axios"
import constants from '../constants'
export default defineNuxtPlugin((NuxtApp) => {

    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = constants.base_url;

    return {
        provide: { 
            axios: axios
        },
    }
})