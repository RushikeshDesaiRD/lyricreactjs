import React from 'react'
import {Link} from "react-router-dom";
 const Trackinner = (props) => {
     const {track}=props
    return (
          <React.Fragment>
             <div className="col-md-5 col-10 mx-auto mb-5">
                 <div className="card card-custom shadow-sm">
                    <div className="card-body">
                        <h5>{track.artist_name}</h5>
                        <p className="card-text">
                           <strong><i class="fa fa-play-circle-o" aria-hidden="true"></i> Track</strong>:{track.track_name}
                           <br/>
                            <strong><i class="fa fa-music" aria-hidden="true"></i>: Album</strong>:{track.album_name}
                        </p>
                        <Link className="btn btn-danger btn-block" to={`/lyrics/track/${track.track_id}`}>
                          <i class="fa fa-chevron-circle-right" aria-hidden="true"></i> View Lyrics
                        </Link>
                    </div>
                 </div>
             </div>
            </React.Fragment>   
    )
}
export default Trackinner;
