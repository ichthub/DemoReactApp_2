import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios'; //my file axios.js
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
	state = {
		posts: [],
		selectedPost : null,
		error : false
	}
	componentDidMount () {
		axios.get('/posts')
			.then(response => {
				const slicedPosts = response.data.slice(0, 5);
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
					//console.log(error);
					this.setState({error:true});
				});
	}
	selectedPostsHandler = (id) => {
		this.setState({selectedPost: id});
	}
	
    render () {
		//dynamic data fetched from a query
		let posts= <p style ={{textAlign: 'center'}}>Something Went Wrong!</p>;
		if(!this.state.error){
			posts = this.state.posts.map(post =>{
				return <Post 
							key= {post.id} 
							title = {post.title} 
							author = {post.author}
							clicked= {() => {this.selectedPostsHandler(post.id)}}/>;
							/*this is how you give an argument to a func where you updtae states*/
			});		
		
		}
		
        return (
            <div>
                <section className="Posts">
                    {posts} {/*myPosts*/}
                </section>
                <section>
                    <FullPost id={this.state.selectedPost}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;