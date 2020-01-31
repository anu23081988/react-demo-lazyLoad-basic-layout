import React from 'react';
import apiData from'./data';
import PostComponent from './PostComponent';
import LazyLoad from'react-lazyload';
import LoadingComponent from'./LoadingComponent';

const App = () => (
    <>
      <header>Lazy Loading Demo</header>
      <div className="app-container">
          <div className="sidebar">
            <ul>
              <li><a href="/home">Home</a></li>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="contact-us">Contact Us</a></li>
            </ul>
          </div>
          <div className="content">
            {
              apiData.map(post=> 
                <LazyLoad key={post.id}
                height={100}
                offset={[-100, 100]}
                placeholder={<LoadingComponent/>}>
                  <PostComponent {...post}/>
                </LazyLoad>
            )}
          </div>
        </div>
        <footer>copyright</footer>
    </>
);
export default App;
