import './Blogstyles.css';
import React from 'react';
import BlogPost from './BlogPost';


function Blog() {
    return (
        <div className="Blog">
            <BlogPost></BlogPost>
            <BlogPost></BlogPost>
            <BlogPost></BlogPost>
        </div>
    );
}

export default Blog;