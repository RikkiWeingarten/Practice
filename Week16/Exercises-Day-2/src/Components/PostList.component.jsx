import React from "react";
import posts from "./../data/data.json";

export default class PostList extends React.Component {
    constructor(props) {
        super(props)
        console.log('posts:', posts);
    }
    render() {
        const allPosts = posts.map((post) => (
        <div>
            <h1>{post.title}</h1>
            <h2>{post.content}</h2>
            <p>{post.date}</p>
        </div>
    ));
    return allPosts;
    }
}