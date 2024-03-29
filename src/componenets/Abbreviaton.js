import './Abbreviation.css'

function Abbreviation(){

    return(
        <div className="abb-container">
            <div className="abb-sub-container">
                <div className="abb-box-sorted"></div>
                <div className="abb-text">Sorted</div>
            </div>
            <div className="abb-sub-container">
                <div className="abb-box-comparing"></div>
                <div className="abb-text">Comparing</div>
            </div>
            <div className="abb-sub-container">
                <div className="abb-box-swapping"></div>
                <div className="abb-text">Swapping</div>
            </div>
        </div>
    )

}

export default Abbreviation;