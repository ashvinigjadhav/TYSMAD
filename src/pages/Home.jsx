import ProductCard from "../components/ProductCard";

function Home() {
  const products = [
    { img: "/1.jpg", title: "Paracetamol", desc: "Effective relief from pain and fever." },
    { img: "/1.jpg", title: "Vitamin C", desc: "Boosts immunity and energy levels." },
    { img: "/1.jpg", title: "Ibuprofen", desc: "Reduces inflammation and body pain." },
    { img: "/1.jpg", title: "Multivitamins", desc: "Complete daily health support." },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero d-flex align-items-center" style={{ backgroundColor: "#74cf90", minHeight: "100vh" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 hero-text">
              <h1>Welcome To PharmEasy</h1>
              <p>Your trusted platform for fast and reliable medicine delivery right at your doorstep.</p>
              <a href="/products" className="btn btn-light btn-lg">Explore Products</a>
            </div>
            <div className="col-md-6 text-center">
              <img src="/abt.png" alt="About us" className="img-fluid rounded" />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Why Choose Us?</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h5>Fast Delivery</h5>
                <p>Get medicines delivered at your doorstep quickly and safely.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h5>Trusted Pharmacies</h5>
                <p>We partner only with licensed and reliable pharmacies.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h5>Affordable Prices</h5>
                <p>Enjoy discounts and affordable healthcare solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Popular Products</h2>
          <div className="row g-4">
            {products.map((p, i) => (
              <ProductCard key={i} img={p.img} title={p.title} desc={p.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-5 text-center">
        <div className="container">
          <h2 className="mb-4">What Our Customers Say</h2>
          <div className="row">
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p>"PharmEasy made ordering medicines so simple and quick!"</p>
                <footer className="blockquote-footer">Priya, Pune</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p>"I love the discounts and fast delivery service."</p>
                <footer className="blockquote-footer">Amit, Delhi</footer>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                <p>"Best platform for healthcare needs. Highly recommended!"</p>
                <footer className="blockquote-footer">Sneha, Mumbai</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-5 bg-success text-white text-center">
        <div className="container">
          <h2>Stay Healthy with PharmEasy</h2>
          <p>Order now and get medicines delivered to your doorstep.</p>
          <a href="/products" className="btn btn-light btn-lg">Shop Now</a>
        </div>
      </section>
    </>
  );
}

export default Home;
