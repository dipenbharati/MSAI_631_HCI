import axios from 'axios';

const REST_API_BASE_URL = 'http://localhost:8080/api/appUsers'

const PostUserSession = async (session) => {
    try {
        const response = await axios.post('REST_API_BASE_URL', session);
        return response.data; // Return the response data
    } catch (error) {
        throw new Error('Failed to add session: ' + error.message);
    }
};

export default PostUserSession;
