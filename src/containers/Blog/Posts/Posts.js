import React, { Component } from 'react'; 
import { Link } from 'react-router-dom';

import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';
class Posts extends Component {
	
	state = {
		posts: [],
	}
		
	componentDidMount () {
		console.log(this.props);
		axios.get('/posts')//async 
			.then(response => {
				const slicedPosts = response.data.slice(0, 4);
				const updatedPosts = slicedPosts.map(post => {
					return {
						...post,
						author: 'Hassan',
					}
					
				});
				//because http request is asynchronous, we want updating our state after its done
				this.setState({posts : updatedPosts});//we get data from server
				//console.log(response);
			}).catch(error =>{//handle errors
					console.log(error);
					//this.setState({error:true});
				});
	}

	
	selectedPostsHandler = (id) => {
		this.setState({selectedPost: id});
	}
	
   render() {
	   //dynamic data fetched from a query
		let posts= <p style ={{textAlign: 'center'}}>Something Went Wrong!</p>;
		if(!this.state.error){
			posts = this.state.posts.map(post =>{
				return (
						<Link to={'/'+ post.id} key= {post.id} >
							<Post 
								title = {post.title} 
								author = {post.author}
								clicked= {() => {this.selectedPostsHandler(post.id)}}/>
								
				
						</Link>
						);
		});
		}
      return(
		<section className="Posts">
					{posts} {/*myPosts*/}
		</section>
      );
   }
}

export default Posts;