import axios from "axios";

export const getBaseUrl = () => {
    let url;
    switch(process.env.NODE_ENV) {
      case 'development':
      case 'test':
        url = "http://localhost:3002";
        break;
      case 'production':
      default:
        url = "https://seventeen-albums-right-here.onrender.com";
    }
    return url;
}

export default axios.create({
    baseURL: getBaseUrl()
})