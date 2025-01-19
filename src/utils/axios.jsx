import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3OGU5NWQ3Y2IxMTY5MzQyMTgxY2M1Y2FkZTY4YmU2ZCIsIm5iZiI6MTczNjkyMDMzNC45MTIsInN1YiI6IjY3ODc0ZDBlMmIxZTQwZTgzZmJiMzAwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2wYoiODcv-yvLkI_5gOxUlL_F0HVSfB9OS9m5ZCE6EE'
    }
    
})

export default instance