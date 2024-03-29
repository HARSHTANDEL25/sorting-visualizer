import "./App.css";
import { useState} from "react";

import TopBar from "./componenets/TopBar";
import SortingVisualizer from './componenets/SortingVisualizer';
import Footer from "./componenets/Footer";

import {data} from './data';
import Description from "./componenets/Description";


function App() {

  const[array, setArray] = useState([]);
  const[arrSize, setArrSize] = useState(15);
  const[busy, setBusy] = useState(false);
  const[speed, setSpeed] = useState(3);

  const[category, setCategory] = useState(data[0].title)

  // console.log(`arrsize in appjs: ${arrSize}`);

  return (
    <div className="wrapper">
      
      <TopBar array={array} setArray={setArray} busy={busy} setBusy={setBusy} speed={speed} setSpeed={setSpeed} arrSize={arrSize} setArrSize={setArrSize}/>
 
      <SortingVisualizer array={array} setArray={setArray} busy={busy} setBusy={setBusy} speed={speed} category={category} setCategory={setCategory} arrSize={arrSize} />

      <Description data={data} category={category} setCategory={setCategory}/>

      <Footer />
    
    </div>
  );
}

export default App;
