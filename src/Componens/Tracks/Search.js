import React,{useState} from 'react'
import { Consumer } from "../../context.js";
import axios from "axios";
class Search extends React.Component  {
   
    state ={
        searchText:'',
        search:''
    }
   onChangeHere = (e) =>{
        this.setState({searchText:e.target.value})
    }
    onButonClick = (dispatch) =>{
         this.setState({search:this.state.searchText})
            
          axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.search}&page_size=10&page=1&s_track_rating=desc&apikey=730bae4c7bd9bd5695f30fe9434d828f`)
               .then(res => {
                        dispatch({
                                  type:"SEARCH_TRACKS",
                                  payload:res.data.message.body.track_list
                                })
                     })
                .catch(err =>{
                    console.log(err)
                  
                })
    
    }
    render(){
    return (
<Consumer>     
{
 
    value =>{
           const {dispatch}=value
        return(
            <div class="container text-center">
<h2><i  class="fa fa-music title" aria-hidden="true"></i><br/> Search Lyrics</h2>

<div class="row d-flex">
<div class="col-md-8 col-8 mx-auto d-flex">
<input type="text" class="form-control" value={this.state.searchText} onChange={(e) => {this.onChangeHere(e)}} placeholder="Search The Title Of Song"/>
    <button onClick={() => this.onButonClick(dispatch)} class="btn-custom">Search</button>
</div>
</div>
<h5 class="p-2">Get The  Any Song</h5>    
</div>
        )
    }
}
</Consumer>  
    )
    }
}
export default Search;
