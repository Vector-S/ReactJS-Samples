import React,{Component} from 'react'

function Photo(props){
    const post = props.post;
    return <figure className='figure'>
    <img src={post.imageLink} alt={post.description}></img>
    <figcaption> <p>{post.description}</p></figcaption>
    <div className='button-container'>
        <button className='remove-button' onClick={() => {props.onRemovePhoto(post)}}>Remove</button>
    </div> 
    </figure>   
}



export default Photo