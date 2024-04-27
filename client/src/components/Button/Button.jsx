import styles from './Button.module.css'

function Button() {
	return <div className={styles['right']}>
		<div className={styles['bb1']}>
			<div className={styles['b1']}></div>
		</div>
		<div className={styles['bb2']}>
			<div className={styles['b2']}></div>
		</div>
		<div className={styles['bb3']}>
			<div className={styles['b3']}></div>
		</div>
	</div>
}

export default Button
