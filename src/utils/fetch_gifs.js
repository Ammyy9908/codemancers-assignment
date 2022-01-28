import axios from "axios";



const getGifs = async (key)=>{
    try{
        const r = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${'nPOcIDvSjipywAdmi9o3KHB8MXObQy6k'}&q=${key}&limit=25&offset=0&rating=g&lang=en`);
        return r.data;
    }
    catch(e){
        return false;
    }
}

export default getGifs;