import "./Product.css";

export function ProductCard({ image, title, valor }) {
  return (
    <div className="card">
      <img src={image} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{valor}</p>
        <a href="#" className="btn btn-primary">
          Ver detalhes
        </a>
      </div>
    </div>
  );
}


