import {toast} from "react-toastify";
import {data} from "../../data";



function QuickSort(props){
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

    async function quickSort(arr, start, end){

        if(start >= end){
            if(start === end){
                let arrayBars = document.getElementsByClassName("array-bar");
                arrayBars[start].classList.add('sorted');
            }
            return;
        }

        let pivotIndex = await partition(arr, start, end);

        await Promise.all([
            quickSort(arr, start, pivotIndex - 1),
            quickSort(arr, pivotIndex + 1, end)
        ]);
    }

    async function partition(arr, start, end){

        let pivotIndex = start;
        let pivotValue = arr[end];
        let arrayBars = document.getElementsByClassName("array-bar");

        for(let i = start; i < end; i++){
            arrayBars[i].classList.add("compared");
            await delay(delay_time*3);

            if(arr[i] < pivotValue){

                [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];

                arrayBars[i].classList.add("swapping");
                arrayBars[pivotIndex].classList.add("swapping");
                setArray(arr.slice());
                await delay(delay_time*2);

                arrayBars[i].classList.remove("swapping");
                arrayBars[pivotIndex].classList.remove("swapping");
                arrayBars[pivotIndex].classList.remove("compared");

                pivotIndex++;
            }

            arrayBars[i].classList.remove("compared");
        }

        [arr[pivotIndex], arr[end]] = [arr[end], arr[pivotIndex]];
        arrayBars[pivotIndex].classList.add("swapping");
        arrayBars[end].classList.add("swapping");
        setArray(arr.slice());
        await delay(delay_time*2);

        arrayBars[pivotIndex].classList.remove("swapping");
        arrayBars[end].classList.remove("swapping");

        for(let i = start; i <= end; i++){
            if(i !== pivotIndex){
                arrayBars[i].classList.add("compared");
            }
            await delay(delay_time/2);
            arrayBars[i].classList.remove("compared");
            if(i === pivotIndex){
                arrayBars[i].classList.add("sorted");
            }
        }

        return pivotIndex;
    }

    async function sort(){
        
        const n = array.length;
  
        let arrayBars = document.getElementsByClassName("array-bar");
    
        for (let i = 0; i < n; i++) {
            arrayBars[i].classList.remove("sorted");
        }

        await quickSort(array, 0, array.length-1);

        setBusy(false);
        toast.success("Quick Sort Completed.")
    }

    function abbHandler(){
        let abbContainer = document.getElementsByClassName('abb-container');
        console.log(abbContainer);
        abbContainer[0].classList.add("active");
    }

    function categoryHandler(){
        setCategory(data[5].title);
      }

    return(
        <div>
            <button className={`btn ${category === data[5].title ? 
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
                    sort();  
                    categoryHandler();
                }
                
            }}>Quick Sort</button>
        </div>
    )
}

export default QuickSort;
