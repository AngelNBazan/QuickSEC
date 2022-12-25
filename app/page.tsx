import styles from "../styles/Home.module.css"
import Search from './search.svg'
import tickers from '../data/test_tickers.json'
export default function HomePage() {
    console.log(tickers);
    
  return (
    
    <div>
        <h1>Quick SEC Data</h1>
        <div className={styles.input_wrapper}>
            <span className={styles.input_icon}>
                <Search aria-label="Search"/>
            </span>

            <input type='text'></input>
        </div>
    </div>
  )
}
