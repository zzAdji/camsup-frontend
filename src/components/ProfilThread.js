import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/post.actions';
import Card from './Post/Card';

const ProfilThread = () => {
  const [loadPost, setLoadPost] = useState(true);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer);
  const userData = useSelector((state) => state.userReducer);

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoadPost(true);
    }
  };

  useEffect(() => {
    if (loadPost) {
      dispatch(getPosts());
      setLoadPost(false);
    }

    window.addEventListener('scroll', loadMore);
    return () => window.removeEventListener('scroll', loadMore);
  }, [loadPost, dispatch]);

  return (
    <>
      <div className="profilthread-container">
        <ul>
          {posts.some((post) => userData._id === post.posterId) ? (
            posts.map((post) => {
              if (userData._id === post.posterId) {
                return <Card post={post} key={post._id} />;
              } else {
                return null;
              }
            })
          ) : (
            <div className="zero-post">
              <p>Aucun post disponible.</p>
            </div>
          )}
        </ul>
      </div>
    </>
  );
};

export default ProfilThread;
