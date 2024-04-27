import styles from './List.module.css'

function List() {
	return (
		<div className={styles['left']}>
			<ul>
				<li className={styles['l1']}>текст 1....</li>
				<li className={styles['l2']}>не текст 2</li>
				<li className={styles['l3']}>текст 3?</li>
			</ul>
		</div>
	)
}

export default List
