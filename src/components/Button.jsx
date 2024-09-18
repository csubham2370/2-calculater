

import styles from './Button.module.css';

let Button = ({buttonValue}) =>{

  let buttons = ["C",
    "1",
    "2",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "+",
    "0",
    ".",]
  return (<>
   <div className={styles.containerOfButton}>

    {buttons.map((eachbutton, index) =><button key={index}  onClick={()=>{buttonValue(eachbutton)}}    className={styles.button}>{eachbutton}</button> )}
      
    </div>
  
  </>);
}

export default Button;