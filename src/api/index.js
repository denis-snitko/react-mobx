import axios from 'axios';

export const getPosts = async (limit) => {
	const { data } = await axios.get(
		`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
	);
	return data;
};
