import './Bars.css';

function Bars(props){

    let value = props.value;
    let arrSize = props.arrSize;
    return(
        <div className="bar-container">
            {value.map((values, index) => (
            <div className={`array-bar ${(arrSize >= 40? 
                        "large":
                        "small"
                    )}`} 
                    key={index} style={{height: `${values*3}px`}} > 

                <div className={`array-values ${arrSize >= 33 ? 
                        `x-large` : "small"
                    }`}>
                    {values}
                </div>
            </div>
        ))}
        </div>
    )
}

export default Bars;