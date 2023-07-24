import axios from "axios";

export const getBaseUrl = () => {
    let url;
    switch(process.env.NODE_ENV) {
      case 'production':
        console.log('production')
        url = "https://seventeen-albums-right-here.onrender.com";
        break;
      case 'development':
        console.log('development')
        url = "http://localhost:3002";
        break;
      default:
        url = "https://seventeen-albums-right-here.onrender.com";
    }
    console.log(url)
    return url;
}

export default axios.create({
    baseURL: getBaseUrl()
})