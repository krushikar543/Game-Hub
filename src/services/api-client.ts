import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api', 
    params : {
        key: 'e8342b89c40445baadd2dfd44f0c2154'
    }
})