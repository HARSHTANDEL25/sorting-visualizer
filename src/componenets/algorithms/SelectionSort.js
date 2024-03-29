import {toast} from "react-toastify";
import {data} from "../../data";



function SelectionSort(props){

    let array = props.array;
    let setArray = props.setArray;

    let busy = props.busy;
    let setBusy = props.setBusy;

    let delay_time = props.delay_time;

    let category = props.category;
    let setCategory = props.setCategory;

    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function selectionsort(){

        let tempArr = array;
        let n = array.length;

        let arrayBars = document.getElementsByClassName("array-bar");

        for(let i = 0; i < n; i++){
            arrayBars[i].classList.remove('sorted');
        }
        
        for(let i = 0; i < n ; i++){

            let min = i;
            arrayBars[i].classList.add("compared");
            
            for(let j = i + 1; j < n; j++){
                
                let check = false;

                arrayBars[j].classList.add("compared");
                

                if(tempArr[j] < tempArr[min]){

                    await delay(delay_time*3);
                    arrayBars[j].classList.remove("compared");
                    arrayBars[j].classList.add("swapping");
                    arrayBars[min].classList.remove("compared")
                        min = j;
                        check = true;
                    await delay(delay_time*3);
                    arrayBars[min].classList.remove("swapping");
                    arrayBars[min].classList.add("compared");
                    
                }

                await delay(delay_time*3);
                if(check === false){
                    arrayBars[j].classList.remove("compared");
                }
            }

            arrayBars[min].classList.remove("compared");
            arrayBars[min].classList.add("swapping");
            arrayBars[i].classList.add("swapping");
            await delay(delay_time*2);

                [tempArr[i], tempArr[min]] = [tempArr[min], tempArr[i]];
                setArray(tempArr.slice());

            await delay(delay_time*2);
            arrayBars[min].classList.remove("swapping");
            arrayBars[i].classList.remove("swapping");
            arrayBars[i].classList.add("sorted");
        }   

        setBusy(false);
        toast.success("Selection Sort Completed.")
    }

    function abbHandler(){
        let abbContainer = document.getElementsByClassName('abb-container');
        console.log(abbContainer);
        abbContainer[0].classList.add("active");
    }

    function categoryHandler(){
        setCategory(data[3].title);
    }

    return(
        <div>
            <button className={`btn ${category === data[3].title ? 
                        "active" : 
                        "deactive"
                    }`} 
                    
                onClick={() =>{
                
                if(busy === true){
                    toast.warning("Sorting in progress. Try again after sorting gets completed.")
                    return;
                }
                else{
                    setBusy(true);
                    abbHandler();
                    selectionsort();  
                    categoryHandler();
                }
                
            }} >Selection Sort</button>
        </div>
    )
}

export default SelectionSort;