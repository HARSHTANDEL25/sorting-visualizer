import './Description.css'


function Description(props){

    let data = props.data;
    let category = props.category;
    // let setCategory = props.setCategory;


    return(
        
        <div className="info-container">
            {
                data.map( (algoData) =>{
                    return(
                        <div className={`${category === algoData.title ? 
                                "scale-100":
                                "scale-0"
                            }   absolute p-40 pt-8 pb-12`}>
                            <h1 className='info-heading'>
                                {algoData.title}
                            </h1>

                            <div className='info-subContainer'>
                                <div className='info-description'>
                                    {algoData.description}
                                </div>

                                <div className='info-complexity-container'>
                                    <h1 className='info-complexity-heading'>Performance</h1>
                                    <div className='info-complexity-subContainer'>
                                        <div className='info-complexity-desc'>
                                            <span>Worst-case time complexity</span>
                                            <span className='info-complexity'>{algoData.worstCase}</span>
                                            
                                        </div>
                                        <div className='info-complexity-desc'>
                                            <span>Average time complexity</span>
                                            <span className='info-complexity'>{algoData.avgCase}</span>
                                            
                                        </div>
                                        <div className='info-complexity-desc'>
                                            <span>Best-case time complexity</span>
                                            <span className='info-complexity'>{algoData.bestCase}</span>
                                            
                                        </div>
                                        <div className='info-complexity-desc'>
                                            <span>Worst-case space complexity</span>
                                            <span className='info-complexity'>{algoData.space}</span>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                        </div>
                    )
                })

            }
        </div>
    )
}

export default Description;