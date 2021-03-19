/* eslint-disable react/jsx-no-target-blank */

const NewsCard = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="Alps" />
      <div className="card-container">
        <p>{props.title}</p>
        <a href={props.url} target="_blank">Read More</a>
      </div>
    </div>
  );
}

export default NewsCard;
