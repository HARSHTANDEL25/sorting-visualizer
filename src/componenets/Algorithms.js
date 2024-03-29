/* eslint-disable react-hooks/exhaustive-deps */

import './Algorithms.css'

import BubbleSort from "./algorithms/BubbleSort";
import InsertionSort from './algorithms/InsertionSort';
import MergeSort from './algorithms/MergeSort';
import SelectionSort from './algorithms/SelectionSort';
import QuickSort from './algorithms/QuickSort';
import { useEffect, useState } from 'react';


function Algorithms(props){
    
    let array = props.array;
    let setArray = props.setArray;

    let busy = props.busy;
    let setBusy = props.setBusy;

    let speed = props.speed;

    let setCategory = props.setCategory;

    const[delay_time, setDelayTime] = useState(100);
    
    useEffect(() => {
        speedHandler(speed);
    },[speed]);

    function speedHandler(speed){
        switch(parseInt(speed))
        {
            case 1: speed=5;
                    break;
            case 2: speed=20;
                    break;
            case 3: speed=100;
                    break;
            case 4: speed=1000;
                    break;
            case 5: speed=5000;
                    break;
            default: speed=100;
                    break;
        }
        
        setDelayTime( 10000/(Math.floor(20/10)*speed) ); 
        // console.log(`array length: ${array.length}`);
        // console.log(`speed value: ${speed}`);
        // console.log(`delay time formula value: ${(Math.floor(array.length/10)*speed)}`);
        console.log("speed:", speed, "delay_time:", delay_time);
    }

    return(
        <div className="btn-container">
            <div>
                <BubbleSort array={array} setArray={setArray} busy={busy} setBusy={setBusy} delay_time={delay_time} category={props.category} setCategory={setCategory}/>
            </div>
            <div>
                <InsertionSort array={array} setArray={setArray} busy={busy} setBusy={setBusy} delay_time={delay_time} category={props.category} setCategory={setCategory}/>
            </div>
            <div>
                <SelectionSort array={array} setArray={setArray} busy={busy} setBusy={setBusy} delay_time={delay_time} category={props.category} setCategory={setCategory}/>
            </div>
            <div>
                <MergeSort array={array} setArray={setArray} busy={busy} setBusy={setBusy} delay_time={delay_time} category={props.category} setCategory={setCategory}/>
            </div>
            <div>
                <QuickSort array={array} setArray={setArray} busy={busy} setBusy={setBusy} delay_time={delay_time} category={props.category} setCategory={setCategory}/>
            </div>                
            
        </div>
    )
}

export default Algorithms;