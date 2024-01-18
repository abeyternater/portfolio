import './BlogPost.css';
import React from 'react';
import bpimage0 from './neom-FuusC7lfg6Q-unsplash.jpg';


function BlogPost() {
    return (
        <div className="BlogPost">
            <img src={bpimage0} alt="blog post image" ></img>
            <div className="BlogPostDescription">
                <h2>This is the description of the blog post.</h2>
                <p className="info">
                    <h5 className="author">James Abeyta</h5>
                    <time>01-07-2024 1:30pm</time>
                </p>
            </div>
        </div>
    );
}

export default BlogPost;
