'use client'
import { useState, useEffect } from 'react'
import styles from "../styles/Home.module.css"
import Search from '../imgs/search.svg'

import tickers from '../data/company_tickers.json'
export default function HomePage() {

    function searchList(qry:String) {
      if(!qry)
      return;

      const suggest = new Map()    
      const backup = new Map();  
      let nameList:any = [];
      let suggestList:any = [];
      tickerList.filter((el:any)=> {
          if(el.ticker.startsWith(qry.toUpperCase()))
            suggestList.push({ticker:el.ticker,name:el.name})
          if(el.name.toUpperCase().startsWith(qry.toUpperCase())){            
            nameList.push({ticker:el.ticker,name:el.name})

          }

        }
      )

        for(let i=0;(i)<8;i++){
          if(suggestList.length<0||!suggestList[i]){
            break;
          }
          suggest.set(suggestList[i].ticker,suggestList[i].name)          
        }

        for(let i=0;(i+suggest.size)<8;i++){
          if(nameList.length<0||!nameList[i]){
            break;
          }
          backup.set(nameList[i].ticker,nameList[i].name)          
        }
        
        
        if(backup.size+suggest.size<9){
          let finalMap = new Map([...suggest,...backup])   
          return finalMap;
        }
        else
        {
          
        }

        


    }
    const [Active, setActive] = useState(false)
    const secData:any = tickers;
    let keyCount  = Object.keys(tickers);
    const tickerList:any = []
    keyCount.map( x => {
      let i = parseInt(x)
      tickerList.push({ ticker:secData[i].ticker, name:secData[i].title,})
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
                console.log(searchList(qry));
                
              }
            }
            />
        </div>
    </div>
  )
}
