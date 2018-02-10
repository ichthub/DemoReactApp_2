import React, { Component } from 'react'; 
import { Route, Link } from 'react-router-dom';

import FullPost from '../FullPost/FullPost';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
	
	state = {
		posts: [],
	}
	
	componentDidMount () {
		console.log(this.props);
		axios.get('/posts')
			.then(response => {
				const slicedPosts = response.data.slice(0, 4);
				const updatedPosts = slicedPosts.map(post => {
					return {
						...post,
						author: 'Hassan',
					}	
				});
				this.setState({posts : updatedPosts});
			}).catch(error =>{
					console.log(error);
					//this.setState({error:true});
			});
	}

	
	selectedPostsHandler = (id) => {
		//this.props.history.push('/posts/'+id);
		this.props.history.push({pathname: '/posts/'+id});
		
	}
	
   render() {
	   //dynamic data fetched from a query
		let posts= <p style ={{textAlign: 'center'}}>Something Went Wrong!</p>;
		if(!this.state.error){
			posts = this.state.posts.map(post =>{
				return (
						//<Link to={'/posts/'+ post.id} key= {post.id} >
							<Post 
								key= {post.id}
								title = {post.title} 
								author = {post.author}
								clicked= {() => {this.selectedPostsHandler(post.id)}}/>
								
				
						//</Link>
						);
		});
		}
      return(
		<div>
			<section className="Posts">
				{posts} {/*myPosts*/}
			</section>
			<Route path ={this.props.match.url + '/:id'} exact component={FullPost} />
		</div>
	);
   }
}

export default Posts;