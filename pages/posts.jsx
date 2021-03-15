import { Component } from 'react';

import { getPosts } from '../actions/index';

class Posts extends Component {
 static async getInitialProps() {
  const getPostsData = await getPosts();
  return { getPostsData };
 }

 render() {
  const { getPostsData } = this.props;
  return (
   <div className="container pb-50">
    <h1>I am posts page</h1>
    {getPostsData.map((p, index) => {
     return (
      <ul key={index} className="my-0">
       <li>
        <span>{p.id}</span> : <span>{p.title}</span>
       </li>
      </ul>
     );
    })}
   </div>
  );
 }
}

export default Posts;
