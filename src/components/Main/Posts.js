import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

//Components
import SearchBar from '../Templates/SearchBar'
import PostCell from './PostCell'

//Partials
import { getQueryString } from '../Partials/QueryPartials'
import { getSub } from '../Partials/Fetches'


class Posts extends Component {
    render() {
        let { sub } = getQueryString()
        let { pageBefore, pageAfter } = this.state

        return (
            <div className='Posts mar-h-cen'>
                <div className="mar-t-30">
                    <SearchBar className="a-center mar-b-20"/>
                    <h3 className="s-18 w-medium c-blue">{`Posts from r/${sub ? sub : "popular"}`}</h3>
                    <Masonry className="mar-t-30" id='posts-container'
                        elementType={'div'}
                        options={{transitionDuration: 200}}
                        disableImagesLoaded={false}
                        updateOnEachImageLoad={true}>
                        {this.drawPosts()}
                    </Masonry>
                    <div className="d-flex a-center mar-v-30">
                        <span onClick={() => pageBefore ? this.refetch('before') : null} className={`${pageBefore ? 'tc-blue clickable' : ''} mar-h-4`}>{"<< Previous Page"}</span>
                        <span onClick={() => pageAfter ? this.refetch('after') : null} className={`${pageAfter ? 'tc-blue clickable' : ''} mar-h-4`}>{"Next Page >>"}</span>
                    </div>
                </div>                
            </div>
        );
    }

    state = {
        posts: [],
    }

    componentDidMount = () => getSub(getQueryString().sub).then(({data: {children, after, before, dist}}) => this.setState({posts: children, pageAfter: after, pageBefore: before, count: dist}))

    refetch = (type) => {
        let { pageAfter, pageBefore, count } = this.state
        let { sub } = getQueryString()
        let page = type === "after" ? pageAfter : pageBefore

        getSub(sub, page, type, count).then(({data: {children, after, before, dist}}) => this.setState({posts: children, pageAfter: after, pageBefore: before, count: type === "after" ? count + dist : count - dist}))
        document.querySelector("#posts-container").scrollIntoView({behavior: 'smooth'})
    }

    drawPosts = () => {
        let { posts } = this.state

        return posts.map(({data}) => {
            return <PostCell key={data.id} data={data}/>
        })
    }
}

export default Posts;