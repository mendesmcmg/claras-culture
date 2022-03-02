import "./Card.css";

function Card(props) {
  const { title, image, description } = props;
  return (
    <div className="card">
      <img src={image} alt={description} />
      <h2>{title}</h2>
    </div>
  );
}

export default Card;
