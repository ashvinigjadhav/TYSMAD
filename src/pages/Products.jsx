import { useState } from "react";

function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: "Paracetamol", desc: "500mg - Pain reliever / Fever reducer" },
    { id: 2, name: "Ibuprofen", desc: "400mg - Anti-inflammatory" },
    { id: 3, name: "Aspirin", desc: "75mg - Blood thinner / Pain relief" },
    { id: 4, name: "Cetirizine", desc: "10mg - Allergy relief" },
    { id: 5, name: "Metformin", desc: "500mg - Diabetes control" },
    { id: 6, name: "Amoxicillin", desc: "500mg - Antibiotic" },
    { id: 7, name: "Lisinopril", desc: "10mg - Blood pressure" },
    { id: 8, name: "Omeprazole", desc: "20mg - Acid reflux relief" },
    { id: 9, name: "Simvastatin", desc: "20mg - Cholesterol control" },
    { id: 10, name: "Atorvastatin", desc: "10mg - Cholesterol control" },
    { id: 11, name: "Azithromycin", desc: "250mg - Antibiotic" },
    { id: 12, name: "Vitamin D3", desc: "1000 IU - Supplement" },
  ]);

  // Add Product (for demo)
  const handleAdd = (name) => {
    alert(`${name} added to your cart!`);
  };

  // Delete Product
  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  return (
    <main className="py-5">
      <div className="container">
        <h2 className="mb-4 text-center">Our Tablets</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <div className="card h-100">
                <img src="/1.jpg" className="card-img-top" alt={product.name} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.desc}</p>
                  <div className="mt-auto d-flex justify-content-between">
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleAdd(product.name)}
                    >
                      Add
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Products;
