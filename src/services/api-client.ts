import axios  from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'c8272c3a41ec44c6a206f70a58de7139'
    }
})