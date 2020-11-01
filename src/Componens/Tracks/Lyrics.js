import React from 'react'
import axios from "axios";
import {Link} from "react-router-dom";
 class Lyrics extends React.Component{
     state={
         track:{},
         lyrics:{}
     };
       componentDidMount(){
          axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=730bae4c7bd9bd5695f30fe9434d828f`)
               .then(res => {
                         console.log("Here",res.data.message.body.lyrics)
                         this.setState({lyrics:res.data.message.body.lyrics});
                         return  axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=730bae4c7bd9bd5695f30fe9434d828f`)
                            .then(res => {
                                          this.setState({track:res.data.message.body.track})
                                           console.log("Here",res.data.message.body.track)
                       })
               })
                .catch(err =>{
                    console.log(err)
                })
       }
     render(){
         const {track, lyrics}=this.state
         if(track === undefined || track.length === 0){
    return (
        
      <p>  kkkkkkkkkkkkkkkk</p>
    )
 }else{
     return(
         <div className="container">
            
            <div className="col-md-8 mx-auto col-10">
               <div className="card shadow-lg">
                     
                      <h1 className="card-body-custom pl-5"><strong>{track.track_name} By{' '} </strong>{track.artist_name}</h1>
                       <div className="card-body  p-5">
                       <p className="text-body">
                           {lyrics.lyrics_body}
                       </p>
                      </div>
                      {/* <ul className="list-group">
                          <li className="list-group-item"><strong>Album Id</strong>{track.album_id}</li>
                           <li className="list-group-item">Song Genre<strong></strong>
                           {track.primary_genres.music_genre_list[0].music_genre_name}</li>
                            <li className="list-group-item"><strong>Explicit</strong>{track.explicit}</li>
                            <li className="list-group-item"><strong>Relase Date</strong>{track.first_release_date}</li>
                      </ul> */}
                       <Link to="/" className="link-go pl-5">Go Back</Link>
               </div>

            </div>
        </div>
     )
 }
}
}
export default Lyrics;
