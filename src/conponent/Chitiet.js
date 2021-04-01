import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
     Route,
     useParams,
     useRouteMatch 
   } from "react-router-dom";
import dt from '../conponent/Data.json';
import NewsLienquan from './NewsLienquan';


function Chitiet () {

    // let { slug } = useParams();
      let match = useRouteMatch("/chi-tiet/:slug.:id.html");
   
        return (
            
             <div>
                <div className="container thongtin">
                    <div className="tieudend" style={{textAlign: 'center', color: 'rgb(255, 12, 12)'}}>
                    <h2>CHI TIET</h2>
                    <hr style={{marginBottom: '10px', height: '2px', backgroundColor: 'blue'}} />
                    </div>
                    {
                            dt.map((value,key) =>{
                                if (value.id==match.params.id)
                                {
                                    return (
                                        <div className=" container col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                            <div className="card">
                                            <img className="card-img-top" src={value.anh} alt="" />
                                            <div className="card-body">
                                                <h5 className="card-title">{value.tieuDe}</h5>
                                                <p className="card-text">{value.noiDung}</p>
                                            </div>
                                            <img className="card-img-bottom" src alt="" />
                                            </div>
                                        </div>
                                    )
                                }
                                
                            })
                        }
                    <div className="row ">  
                    {   
                        dt.map((value,key)=>{
                            
                            if(value.id!=match.params.id){
                                
                                if(key<5)
                                {
                                    return(
                                        <NewsLienquan
                                            id={value.id}
                                            anh={value.anh}
                                            tieuDe={value.tieuDe}
                                            noiDung={value.noiDung}></NewsLienquan>
                                    )
                                   
                                }

                            }
                            

                        })

                    }
                    
                    
                   
                    
                    </div>
                </div>
            </div>
        );
        
        }
    
export default Chitiet;
