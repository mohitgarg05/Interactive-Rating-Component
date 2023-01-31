import styles from '@/styles/Home.module.css'
import {useState} from 'react';

export default function Home() {

  const [Clicked, setClicked] = useState(false);
  const [Index, setIndex] = useState("")

  const RatingComp = ()=>{
    return(
    
        <div className={styles.conWra}>
          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <img src='https://balbir-25.github.io/interactive-rating/images/icon-star.svg'></img>
            </div>
            <h4>How did we do?</h4>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering</p>
          </div>
          <div className={styles.numebrs}>
            <button className={styles.div1} onClick={()=>setIndex(1)}>1</button>
            <button className={styles.div2} onClick={()=>setIndex(2)}>2</button>
            <button className={styles.div3} onClick={()=>setIndex(3)}>3</button>
            <button className={styles.div4} onClick={()=>setIndex(4)}>4</button>
            <button className={styles.div5} onClick={()=>setIndex(5)}>5</button>
          </div>
          <button className={styles.submit} onClick={()=>setClicked(true)}>SUBMIT</button>
        </div>

    )
  }


  const AfterRating = ()=>{
    return(
      <div className={styles.ratContainer}>
        <div className={styles.ratWrapper}>
          <img src='https://karam-7.github.io/interactive-rating/images/illustration-thank-you.svg'></img>
          <div className={styles.showNumber}>
            <p>You selected {Index} out of 5</p>
          </div>
          <h3>Thank you!</h3>
          <p className={styles.para}>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </div>

      </div>
    )
  }


  return (
    <>
      <div className={styles.container}>
        {Clicked?<AfterRating /> : <RatingComp />}
      </div>
    </>
  )
}
