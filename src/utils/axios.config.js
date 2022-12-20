import axios from "axios";

let URL;

switch (process.env.REACT_APP_ENVIRONMENT) {
    case 'DEVELOPMENT':
        URL = 'https://raw.githubusercontent.com/mir-hussain/moon-tech-starter-pack/version-2/public/products.json';
        break;
    case 'PRODUCTION':
        URL = 'https://raw.githubusercontent.com/mir-hussain/moon-tech-starter-pack/version-2/public/products.json';
        break;
    default:
        URL = 'https://raw.githubusercontent.com/mir-hussain/moon-tech-starter-pack/version-2/public/products.json'
}
const instance = axios.create({
    baseURL: URL
});

export default instance;