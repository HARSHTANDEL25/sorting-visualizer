/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import './TopBar.css';
import { toast } from "react-toastify";


function TopBar(props){

    
    // let arrSize = 20;
    let array = props.array;
    let setArray = props.setArray;

    let busy = props.busy;
    
    let speed = props.speed;
    let setSpeed = props.setSpeed;

    let arrSize = props.arrSize;
    let setArrSize = props.setArrSize;
        

    useEffect(() => {
        resetArray();
    },[])

    function arrSizeHandler(e){
        console.log(e.target.value);

        // arrSize = e.target.value;
        setArrSize(e.target.value);
        // resetArray(); yaha se reset array ko islie hatana pada kyuki range ke change hone par
        // arraysize imidiately display nahi ho raha
        // next call pe previous value dikah raha hae
        //agar samaj na aee to uncomment karke check kar lena
    }

    function speedHandler(e){
        // console.log(`Speed is: ${e.target.value}`);
        setSpeed(e.target.value)
    }

    function resetArray(){

        const n = array.length;
  
        let arrayBars = document.getElementsByClassName("array-bar");
    
        for (let i = 0; i < n; i++) {
            arrayBars[i].classList.remove("sorted");
        }

        const tempArr = [];
        // console.log(`arrsize resetarray: ${arrSize}`);
        for(let i = 0; i < arrSize; i++){
            tempArr.push(randomInt(10,99));
        }

        setArray(tempArr);
    }

    function randomInt(min, max){
        return Math.floor(Math.random()*(max - min + 1) + min);
    }


    return(
        <div className="nav-container">
            <h1 className="nav-heading">Sorting Visualizer</h1>

            <div className="nav-filters">
                <label>Speed:</label>
                <input type="range" min={1} max={5} onClick={speedHandler} defaultValue={speed} className="nav-input"></input>

                <label> Array size:</label>
                <input type="range" min={6} max={50} onClick={arrSizeHandler} defaultValue={arrSize} className="nav-input"></input>
                <span className="nav-input-value">{arrSize}</span>

                <button className="nav-btn" onClick={() =>{
                
                if(busy === true){
                    toast.warning("Sorting in progress. Try again after sorting gets completed.")
                    return;
                }
                else{
                    resetArray();  
                }
                
            }}>Generate New Array</button>
            </div>
            
        </div>
    )
}

export default TopBar;  