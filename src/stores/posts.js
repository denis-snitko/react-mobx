import { makeAutoObservable, runInAction } from 'mobx';
import { getPosts } from '../api';

class PostStore {
	constructor() {
		makeAutoObservable(this);
	}

	posts = [];
	isLoading = false;

	getPostsAction = async (limit) => {
		try {
			this.isLoading = true;
			const response = await getPosts(limit);

			runInAction(() => {
				this.posts = response;
				this.isLoading = false;
			});
		} catch (error) {
			console.log('error', error);
			this.isLoading = false;
		}
	};
}

export const postsStore = new PostStore();
