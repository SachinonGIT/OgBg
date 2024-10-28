import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("Olive");

  return <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
    <div className="flex justify-center align-middle flex-wrap">
      <div className="flex justify-center align-middle fixed bottom-4 bg-white rounded-xl text-lg px-3 flex-wrap">
        <button onClick={()=> setColor("Red")} className="bg-red-500 text-white m-1 px-3 rounded-xl">Red</button>
        <button onClick={()=> setColor("Green")} className="bg-green-500 text-white m-1 px-3 rounded-xl">Green</button>
        <button onClick={()=> setColor("Yellow")} className="bg-yellow-500 text-white m-1 px-3 rounded-xl">Yellow</button>
        <button onClick={()=> setColor("Blue")} className="bg-blue-500 text-white m-1 px-3 rounded-xl">Blue</button>
      </div>
    </div>
  </div>;
}

export default App;
