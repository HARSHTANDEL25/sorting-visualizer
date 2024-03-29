import {toast} from "react-toastify";
import {data} from "../../data";


function InsertionSort(props){

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

    async function insertionsort(){

        let tempArr = array;
        const n = array.length;

        let arrayBars = document.getElementsByClassName("array-bar");

        for(let i = 0; i < n; i++){
            arrayBars[i].classList.remove('sorted');
        }

        for(let i = 1; i < n; i++){

            let key = tempArr[i];
            let j = i -1;
            let check = false;

            arrayBars[i].classList.add("compared");
            await delay(delay_time*4);
            check = true;
            arrayBars[i].classList.remove("compared");

            while(j>=0 && tempArr[j]>key)
            {
                if(check === false){
                    arrayBars[j+1].classList.add("compared");
                    await delay(delay_time*4);
                    arrayBars[j+1].classList.remove("compared");
                }

                arrayBars[j].classList.add("swapping");
                await delay(delay_time*2);
                arrayBars[j+1].classList.add("swapping");
                await delay(delay_time*2);
                    tempArr[j+1] = tempArr[j];
                    setArray(tempArr.slice());
                    
                await delay(delay_time*2);
                arrayBars[j].classList.remove("swapping");
                arrayBars[j+1].classList.remove("swapping");

                    j = j -1;
            }


            arrayBars[j+1].classList.add("overwrite");
            await delay(delay_time*3);
                tempArr[j+1] = key;
                setArray(tempArr.slice());
            await delay(delay_time*3);
            arrayBars[j+1].classList.remove("overwrite");
        }

        for(let i = 0; i < n; i++){
            arrayBars[i].classList.add('sorted');
        }
        
        setBusy(false);
        toast.success("Insertion Sort Completed.")
    }

    function abbHandler(){
        let abbContainer = document.getElementsByClassName('abb-container');
        console.log(abbContainer);
        abbContainer[0].classList.add("active");
    }

    function categoryHandler(){
        setCategory(data[2].title);
    }

    return(
        <div>
            <button className={`btn ${category === data[2].title ? 
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
                        insertionsort();  
                        categoryHandler();
                    }
                }}   
            >Insertion Sort</button>
        </div>
    )
}


export default InsertionSort;