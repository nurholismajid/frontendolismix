import Axios from 'axios';
import baseurl from './baseurl';
export default Axios.create({
baseURL : baseurl
})