import axios from '../../utils/axios.config';


export const fetchingProducts = async () => {
    const { data } = await axios.get("");

    return data;
}                        