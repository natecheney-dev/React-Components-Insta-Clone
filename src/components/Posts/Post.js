import React from 'react';
import Comments from '../Comments/Comments';
import LikeSection from './LikeSection';
import PostHeader from './PostHeader';
import Posts from './Posts';

const Post = props => {
  // 🔥 Make sure the parent of Post is passing the right props!
  const { post, likePost,username,thumbnailUrl,imageUrl,comments,likes} = props;
  console.log(props);
  return (
    <div className='post-border'>
      <PostHeader
        username={username}
        thumbnailUrl={thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={imageUrl}
        />
      </div>
      {/* Is LikeSection getting all the props it needs to work correctly? */}
      <LikeSection numberOfLikes={likes} likePost={() => likePost(post.id)} />
      {/* Comments also wants its props! */}
      <Comments comments={comments}/>
    </div>
  );
};
export default Post;
