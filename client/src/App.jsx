import styles from './App.module.css'
import Button from './components/Button/Button'
import List from './components/List/List'

function App() {
	return (
		<div className={styles['container']}>
			<h1>Заголовок</h1>
			<div className={styles['block']}>
				<List />
				<Button />
			</div>
		</div>
	)
}

export default App
