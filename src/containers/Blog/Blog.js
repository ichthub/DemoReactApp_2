import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';




class Blog extends Component {
	
    render () {
		
        return (
            <div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								<NavLink to="/posts/" exact> Posts </NavLink>
							</li>
							<li>{/*add more prop to = ...*/}
								<NavLink to={{
									pathname:'/new_post',
									hash: '#submit',
									search : '?quick-submit = true'
								}}>New Post</NavLink>
							</li>
						</ul>
					</nav>
				</header>	
				{/*messy way to do it by using render */}
			
				{/*<Route path = "/" exact render={() => <h1>Home</h1>}/>*/}
				{/*elegant way to do it using component = {reference here} */}
				<Switch> {/*load only one matched url*/}
					<Route path = "/new_post" component={NewPost}/>	
					<Route path = "/posts" component={Posts} />
					<Redirect from = "/" to = "/posts"/>
				</Switch>
            </div>
        );
    }
}

export default Blog;