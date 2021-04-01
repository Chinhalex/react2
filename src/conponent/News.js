import React, { Component } from 'react';
import NewsItem from '../conponent/NewsItem.js';
import dt from '../conponent/Data.json';

class News extends Component {
    render() { 
        return (
            <div>
                <div className="container thongtin">
                    <div className="tieudend" style={{textAlign: 'center', color: 'rgb(255, 12, 12)'}}>
                    <h2>PRODUCT</h2>
                    <hr style={{marginBottom: '10px', height: '2px', backgroundColor: 'blue'}} />
                    </div>
                    <div className="row ">
                        
                            {
                                dt.map((value,key) => {
                                    return (
                                        
                                        <NewsItem id={value.id}
                                                  anh={value.anh}
                                                  tieuDe={value.tieuDe}
                                                  noiDung={value.noiDung}></NewsItem>
                                                  
                                    )
                                })
                            }
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default News;