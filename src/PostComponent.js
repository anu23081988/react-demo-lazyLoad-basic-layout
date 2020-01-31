import React from 'react';
// import LazyLoad from "react-lazyload";

const PostComponent = (props) => (
    <div className="post" key ={props.id}>
        {/* <LazyLoad once={true} placeholder={<img src={`https://picsum.photos/id/${props.id}/5/5`} alt={`img-${props.id}`} />}> */}
        <div className="post-img">
            <img alt={`img-${props.id}`} src={`https://i.picsum.photos/id/${props.id}/1000/1000.jpg`}/>
        </div>
        {/* </LazyLoad> */}
        <div className="post-body">
            <h4>{props.title}</h4>
            <p>{props.body}</p>
        </div>
    </div>
);
export default PostComponent;
