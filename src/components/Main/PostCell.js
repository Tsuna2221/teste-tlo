import React from 'react';

const PostCell = ({data: {preview, id, title, score, num_comments}}) => {
    if(preview){
        let resVariant = preview.images[0].resolutions[1] ? preview.images[0].resolutions[1].url : preview.images[0].source.url

        return (
            <div key={id} className="post-cell mar-2 br-low">
                <div className="image-container d-grid a-vertical">
                    <img src={resVariant} alt=""/>
                </div>
                <div className="post-details pad-10">
                    <p className="s-14 c-black w-medium">{title}</p>
                    <div className="d-flex a-evenly mar-t-8 a-vertical">
                        <span className="mdi mdi-arrow-up-bold c-black s-20"><span className="mar-l-4 s-14">{score}</span></span>
                        <span className="mdi mdi-comment c-black s-18 mar-l-6"><span className="mar-l-4 s-14">{num_comments}</span></span>
                        <a className="s-14 c-black tc-blue w-medium" target="_blank" rel="noopener noreferrer" href={`https://redd.it/${id}`}>Visit Post</a>
                    </div>
                </div>
            </div>
        )
    }
    return ''
}

export default PostCell;