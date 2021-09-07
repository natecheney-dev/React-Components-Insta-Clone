import React from 'react';
import Post from './Post';
import './Posts.css';

const Posts = (props) => {
  // 🔥 Make sure the parent of Posts is passing the right props!
  const { likePost, posts } = props;
  console.log(posts);
  return (
    <div className='posts-container-wrapper'>
      {/* Map through the posts array returning a Post component at each iteration */}
      {posts.map(item => {
  
        return <Post
          likePost = {likePost}
          post={item}
          key={item.id}
          username={item.username}
          thumbnailUrl={item.thumbnailUrl}
          imageUrl={item.imageUrl}
          comments={item.comments}
          likes={item.likes}

          
          />
      })}
      {/* Check the implementation of Post to see what props it requires! */}
    </div>
  );
};

export default Posts;
