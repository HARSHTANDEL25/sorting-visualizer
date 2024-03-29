import './SortingVisualizer.css';
import Algorithms from './Algorithms';

import Bars from "./Bars";
import Abbreviation from './Abbreviaton';



function SortingVisualizer(props){

    
    let array = props.array;  
    let setArray = props.setArray;

    let busy = props.busy;
    let setBusy = props.setBusy;

    let category = props.category;
    let setCategory = props.setCategory;

    let arrSize = props.arrSize;

    return(
        <div className='main-container'>
            <div className='main-bar-container'>
                <Abbreviation />
                <Bars value = {array} arrSize={arrSize}></Bars>  
            </div>
            <div className='main-btn-container'>
                <Algorithms setArray={setArray} array={array} busy={busy} setBusy={setBusy} speed={props.speed} category={category} setCategory={setCategory}/>
            </div>
        </div>     
    )
}

export default SortingVisualizer;