import {toast} from "react-toastify";
import {data} from "../../data";


function BubbleSort(props){
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

    async function bubbleSort(){
        
        let tempArr = array;
        const n = tempArr.length;

        let arrayBars = document.getElementsByClassName("array-bar");
        
        for(let i = 0; i < n; i++){
            arrayBars[i].classList.remove('sorted');
        }

        for(let i = 0; i < n - 1; i++)
        {
            let j = 0;
            for(j = 0; j < n - i -1; j++)
            {
                //these are being compared
                
                arrayBars[j].classList.add("compared");
                arrayBars[j + 1].classList.add("compared");
                console.log(`in bubble sort delay time: ${delay_time}`)
                await delay(delay_time*3);
                arrayBars[j].classList.remove("compared");
                arrayBars[j + 1].classList.remove("compared");


                if(tempArr[j] > tempArr[j+1])
                {
                    
                    //swapping is done here
                    arrayBars[j].classList.add("swapping");
                    arrayBars[j + 1].classList.add("swapping");
                    await delay(delay_time*2);

                    [tempArr[j], tempArr[j+1]] = [tempArr[j+1], tempArr[j]];

                    setArray(tempArr.slice());                    

                    console.log("swapped");
                    
                    console.log(array);

                    await delay(delay_time*2);
                    arrayBars[j].classList.remove("swapping");
                    arrayBars[j + 1].classList.remove("swapping");
                }
            }


            arrayBars[j].classList.add('sorted');
            console.log("working");
        }
        arrayBars[0].classList.add('sorted');

            
        setBusy(false);
        toast.success("Bubble Sort Completed.")

    }

    function abbHandler(){
        let abbContainer = document.getElementsByClassName('abb-container');
        console.log(abbContainer);
        abbContainer[0].classList.add("active");
    }

    function categoryHandler(){
      setCategory(data[1].title);
    }

    return(
        <div>
            <button className={`btn ${category === data[1].title ? 
                        "active" : 
                        "deactive"
                    }`} 
                    
                onClick={() =>{
                
                if(busy === true){
                    toast.warning("Sorting in progress. Try again after sorting gets completed.");
                    return;
                }
                else{
                    
                    setBusy(true);
                    abbHandler();
                    bubbleSort();  
                    categoryHandler();
                }
                
            }}>Bubble Sort</button>
        </div>
    )
}

export default BubbleSort;