import React from 'react'
import { Consumer } from "../../context.js";
import Spinner from "../Spinner.js";
import Trackinner from "./Trackinner";
export default function Track() {
    return (
        <Consumer>
        {
            value => {
              const {track_list, heading}=value;
              if(track_list === undefined || track_list.length === 0){
                 return (
                    <Spinner/>
                 )
              }else{
                  return( 

                      <React.Fragment>
                           <h1 className="text-center text-bold">{heading}</h1>
                             <div className="container-fluid">
                                  <div className="container">
                                    <div className="row">
                                         {
                                             track_list.map(item => (
                                                 <Trackinner key={item.track.id} track={item.track}/>
                                             ))
                                         }
                                    </div>
                                   </div>
                                 </div>
                       </React.Fragment>

                  )
              }
            }
        }
        </Consumer>
    )
}
