import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';



class Blog extends Component {
	
    render () {
		
        return (
            <div className="Blog">
				<header>
					<nav>
						<ul>
							<li>
								<NavLink to="/" exact> Home </NavLink>
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
					<Route path = "/" exact component={Posts} />
					<Route path = "/new_post" exact component={NewPost} />
					<Route path = "/:id" exact component={FullPost} />
				</Switch>
            </div>
        );
    }
}

export default Blog;