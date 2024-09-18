import styles from "./App.module.css";



import Display from "./components/Display";
import Button from "./components/Button";
import { useState } from "react";
let App = () =>{

  const [calVal,setCalVal] = useState("");

  const Buttonclick =(buttontext) =>{

   if (buttontext == 'C'){

    setCalVal("")
   }
   else if (buttontext == '='){
    const result = eval(calVal);
    setCalVal(result);
   }
   else {
    const displayValue = calVal + buttontext;
    setCalVal(displayValue);
   }

    
  }
  return (<>


  <div className={styles.containerOfCalculater}>

   <Display displayValue={calVal}/>
   <Button buttonValue={Buttonclick} />
  </div>
  






</>);
}

export default App;