
import axios from 'axios'

const api = axios.create({

    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: 'f2fd3a53ced26383595b9d0defbff94b',
        language: 'pt-BR',
        page: 1
    }

})

export default api