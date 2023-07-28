import { counterStore } from './counter';
import { postsStore } from './posts';

export default class RootStore {
    counterStore = counterStore;
    postsStore = postsStore;
}
