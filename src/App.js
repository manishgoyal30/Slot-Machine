import React from "react";
import SlotM from "./Slotmachine";



const App=  () => {

  return(
   <>
  <h1 className="heading_Style">
   🎰 Welcome to {" "}
   <spam style={{fontWeight:"bold"}}>Slot Machine game</spam> 
   </h1>
<div className="slotmachine">
<SlotM x='😄' y='😄' z='😄' />
<SlotM x ='😄' y='😸' z= '😃'/>   
<SlotM x ='🍎' y='🍌' z= '🍎'/>
<SlotM x ='❤️' y='❤️' z= '❤️'/>
</div>  
   
  </>
  );
};

  
export default App;