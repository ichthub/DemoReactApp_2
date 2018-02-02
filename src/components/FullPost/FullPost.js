import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
	state ={
		loadedPost: null,
		error : false
	}
	
	componentDidUpdate () {
		//will update if it resives new change on props
		if(this.props.id){
			
			if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)){
			/*you selected a new post to render*/	
				axios.get('https://jsonplaceholder.typicode.com/posts/'+this.props.id)
					.then(response =>{
						//console.log(response);
						this.setState({loadedPost : response.data});
				})
				.catch(error =>{//handle errors
					//console.log(error);
					this.setState({error:true});
				});
				
			}
		}
	}

	deletePostHandler = () =>{
		axios.delete('https://jsonplaceholder.typicode.com/posts/'+this.props.id).then(res =>{
			console.log(res);
		});
	}
		
    render () {
		let post;
		if(this.state.error){
			post = <p style ={{textAlign: 'center'}}>Something went wrong !</p>;
		}
		else{
			post = <p style ={{textAlign: 'center'}}>Please select a Post!</p>;
		
			if(this.props.id){
				post = <p style ={{textAlign: 'center'}}>Loading...!</p>;
			}
			if(this.state.loadedPost){
				/*will only get in here when data is fetched from the server*/
				 post = (
					<div className="FullPost">
						<h1>{this.state.loadedPost.title}</h1>
						<p>{this.state.loadedPost.body}</p>
						<div className="Edit">
							<button className="Delete" onClick = {this.deletePostHandler}>Delete</button>
						</div>
					</div>

				);
		}
		}
        
       
        return post;
    }
}

export default FullPost;