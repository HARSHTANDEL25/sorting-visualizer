import {toast} from "react-toastify";
import {data} from "../../data";



function MergeSort(props) {

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
  
    async function mergeSortHelper(start, end) {
      if (start >= end) {
        return;
      }
  
      const middle = Math.floor((start + end) / 2);
  
      await mergeSortHelper(start, middle);
      await mergeSortHelper(middle + 1, end);
  
      let leftIndex = start;
      let rightIndex = middle + 1;
      let tempArr = [];
  
      while (leftIndex <= middle && rightIndex <= end) {
        let leftValue = array[leftIndex];
        let rightValue = array[rightIndex];
  
        let arrayBars = document.getElementsByClassName("array-bar");
  
        arrayBars[leftIndex].classList.add("compared");
        arrayBars[rightIndex].classList.add("compared");
  
        await delay(delay_time*3);
  
        arrayBars[leftIndex].classList.remove("compared");
        arrayBars[rightIndex].classList.remove("compared");
  
        if (leftValue <= rightValue) {
          tempArr.push(leftValue);
          leftIndex++;
        } else {
          tempArr.push(rightValue);
          rightIndex++;
        }
      }
  
      while (leftIndex <= middle) {
        tempArr.push(array[leftIndex]);
        leftIndex++;
      }
  
      while (rightIndex <= end) {
        tempArr.push(array[rightIndex]);
        rightIndex++;
      }
  
      for (let i = start; i <= end; i++) {
        let arrayBars = document.getElementsByClassName("array-bar");
  
        arrayBars[i].classList.add("swapping");
  
        await delay(delay_time*2);
  
        array[i] = tempArr[i - start];
        setArray(array.slice());
  
        await delay(delay_time*2);
  
        arrayBars[i].classList.remove("swapping");
        arrayBars[i].classList.add("sorted");
      }
    }
  
    async function mergeSort() {
      const n = array.length;
  
      let arrayBars = document.getElementsByClassName("array-bar");
  
      for (let i = 0; i < n; i++) {
        arrayBars[i].classList.remove("sorted");
      }
  
      await mergeSortHelper(0, n - 1);
  
      for (let i = 0; i < n; i++) {
        arrayBars[i].classList.add("sorted");
      }

      setBusy(false);
      toast.success("Merge Sort Completed.");
    }

    function abbHandler(){
      let abbContainer = document.getElementsByClassName('abb-container');
      console.log(abbContainer);
      abbContainer[0].classList.add("active");
    }

    function categoryHandler(){
      setCategory(data[4].title);
    }
  
    return (
      <div>
        <button className={`btn ${category === data[4].title ? 
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
                    mergeSort();  
                    categoryHandler();
                }
                
            }}>
          Merge Sort
        </button>
      </div>
    );  
}
  
export default MergeSort;
  