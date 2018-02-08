import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import './Blog.css';


class Blog extends Component {
	
    render () {
		
        return (
            <div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								<Link to="/"> Home </Link>
							</li>
							<li>{/*add more prop to = ...*/}
								<Link to={{
									pathname:'/new_post',
									hash: '#submit',
									search : '?quick-submit = true'
								}}>New Post</Link>
							</li>
						</ul>
					</nav>
				</header>	
				{/*messy way to do it by using render */}
			
				{/*<Route path = "/" exact render={() => <h1>Home</h1>}/>*/}
				{/*elegant way to do it using component = {reference here} */}
				<Route path = "/" exact component={Posts} />
				<Route path = "/new_post" exact component={NewPost} />
            </div>
        );
    }
}

export default Blog;