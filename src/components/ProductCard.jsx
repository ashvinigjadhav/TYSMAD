function ProductCard({ img, title, desc }) {
  return (
    <div className="col-md-3">
      <div className="card h-100">
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{desc}</p>
          <a href="/products" className="btn btn-success">View</a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
