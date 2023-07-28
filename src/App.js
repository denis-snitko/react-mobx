import { observer } from 'mobx-react-lite';
import { useStores } from './contextProvider';

const App = observer(() => {
	const {
		counterStore: { count, decrement, increment },
		postsStore: { posts, isLoading, getPostsAction },
	} = useStores();

	return (
		<div className="App">
			<h3>Select the number of posts to get</h3>

			<div>
				<button
					disabled={!count}
					onClick={() => decrement(1)}
					style={{ width: '64px' }}
				>
					-
				</button>
				<span style={{ padding: '0 32px' }}>{count}</span>
				<button onClick={() => increment(1)} style={{ width: '64px' }}>
					+
				</button>
			</div>

			<br />

			<button disabled={!count} onClick={() => getPostsAction(count)}>
				Get posts
			</button>

			<hr />

			<h3>Posts</h3>

			{isLoading ? (
				<div>Loading...</div>
			) : (
				<ol>
					{posts.map(({ id, title }) => (
						<li key={id} style={{ textAlign: 'left' }}>
							{title}
						</li>
					))}
				</ol>
			)}

			{posts.length === 0 && !isLoading && <p>No data</p>}
		</div>
	);
});

export default App;
