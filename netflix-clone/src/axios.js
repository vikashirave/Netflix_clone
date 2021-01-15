import axios from '../node_modules/axios/dist/axios';


/** base url to make requests to the movie database **/

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;