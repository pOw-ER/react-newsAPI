/* eslint-disable react/jsx-no-target-blank */

const NewsCard = (props) => {
  return (
    <div className="card">
      <img src={props.img ? props.img : 'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'} alt="NewsPhoto" />
      <div className="card-container">
        <p>{props.title}</p>
        <a href={props.url} target="_blank">Read More</a>
      </div>
    </div>
  );
}

export default NewsCard;
