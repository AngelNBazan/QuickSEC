'use client'
import { useState, useEffect } from 'react'
import styles from "../styles/Home.module.css"
import Search from '../imgs/search.svg'

import tickers from '../data/company_tickers.json'
export default function HomePage() {

    function searchList(qry:String) {
      const suggest = tickerList.filter((el:String)=> el.startsWith(qry.toUpperCase()))
      if(suggest.length<8){
        const nameSuggest = nameList.filter((e:String)=>
        e.toLowerCase().startsWith(qry.toLowerCase())         
        )
        nameSuggest.map(
          (i:any)=>{
            if(suggest.length<8)
            suggest.push(i)
            else
            return;            
          }
        )
        console.log(suggest);
        
      }

    }
    const [Active, setActive] = useState(false)
    const secData:any = tickers;
    let keyCount  = Object.keys(tickers);
    const tickerList:any = []
    const nameList:any = []
    keyCount.map( x => {
      let i = parseInt(x)
      tickerList.push(secData[i].ticker)
      nameList.push(secData[i].title)
    })
    tickerList.sort()
    
  return (
    <div>
        <div className={Active? styles.input_wrapper_active:styles.input_wrapper} 
        onFocus={()=>{
          setActive(true)}}
        onBlur={()=>{setActive(false)}}
        >
            <span className={styles.input_icon}>
              <Search aria-label="Search"/>
            </span>

            <input type='text' 
            onChange={
              (e)=>{
                const qry = (e.target.value);
                searchList(qry)
              }
            }
            />
        </div>
    </div>
  )
}
