import { useState } from "react";
import clsx from 'clsx';
import reactLogo from "../../assets/react.svg";
import viteLogo  from "../../assets/vite.svg";
import styles from './HomePage.module.css';

const HomePage = () => {
	const [count, setCount] = useState(0)

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank">
					<img src={viteLogo} className={styles.logo} alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className={clsx(styles.logo, styles.react)} alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className={styles.card}>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className={styles.readTheDocs}>
				Click on the Vite and React logos to learn more
			</p>
		</>
	)
}

export default HomePage;