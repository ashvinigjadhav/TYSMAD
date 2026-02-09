function About() {
  return (
    <>
      {/* Hero / Intro */}
      <header className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-7">
              <h1 className="display-6 fw-bold">About PharmEasy</h1>
              <p className="lead mb-0">
                Delivering trusted medicines fast — connecting licensed pharmacists, verified suppliers and customers through a safe and convenient online platform.
              </p>
            </div>
            <div className="col-md-5 text-md-end mt-4 mt-md-0">
              <img
                src="/abt.png"
                alt="Pharmacist"
                className="img-fluid rounded"
                style={{ maxWidth: "220px" }}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="py-5">
        <div className="container">
          {/* Mission / Vision / Values */}
          <div className="row g-4 mb-5">
            <div className="col-lg-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    Our Mission <span className="badge bg-success ms-2">Mission</span>
                  </h5>
                  <p className="card-text">
                    To make safe prescription and OTC medicines available at your doorstep with verified quality, quick delivery and compassionate service.
                  </p>
                  <a href="#core-values" className="btn btn-outline-primary btn-sm">
                    See Values
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    Our Vision <span className="badge bg-info ms-2">Vision</span>
                  </h5>
                  <p className="card-text">
                    To be the most trusted digital pharmacy in every neighbourhood — reliable, transparent, and health-first.
                  </p>
                  <a href="#team" className="btn btn-outline-primary btn-sm">
                    Meet Team
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">
                    What We Value <span className="badge bg-warning text-dark ms-2">Values</span>
                  </h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-2">✔ Patient safety</li>
                    <li className="mb-2">✔ Transparency & trust</li>
                    <li className="mb-2">✔ Speed & reliability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How it Works / Features */}
          <section className="mb-5">
            <div className="row g-4">
              <div className="col-md-6">
                <h3 className="h4">How PharmEasy Works</h3>
                <ol className="list-group list-group-numbered mt-3">
                  <li className="list-group-item">Search or browse pharmacy-grade medicines.</li>
                  <li className="list-group-item">Upload prescription (if required) and place order.</li>
                  <li className="list-group-item">Verified pharmacist reviews and dispatches the order.</li>
                  <li className="list-group-item">Track delivery and receive doorstep handover.</li>
                </ol>
              </div>

              <div className="col-md-6">
                <h3 className="h4">Key Features</h3>
                <div className="row row-cols-1 row-cols-sm-2 g-3 mt-3">
                  {[
                    { title: "Verified Pharmacists", text: "All orders are reviewed and dispensed by licensed pharmacists." },
                    { title: "Secure Payments", text: "Encrypted transactions and multiple payment options." },
                    { title: "Fast Delivery", text: "Same-day or scheduled delivery windows depending on location." },
                    { title: "Order Tracking", text: "Real-time updates from dispatch to delivery." },
                  ].map((f, i) => (
                    <div className="col" key={i}>
                      <div className="card h-100">
                        <div className="card-body">
                          <h6 className="card-title mb-2">{f.title}</h6>
                          <p className="card-text small mb-0">{f.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Milestones */}
          <section className="mb-5">
            <h3 className="h5 mb-3">Milestones</h3>
            <div className="row g-3">
              {[
                { title: "Founded", text: "2020 — Launched with a vision to simplify medicine delivery." },
                { title: "500K Orders", text: "Reached half a million orders within 2 years." },
                { title: "Nationwide Presence", text: "Partnered with verified pharmacies across major cities." },
              ].map((m, i) => (
                <div className="col-md-4" key={i}>
                  <div className="card">
                    <div className="card-body">
                      <h6 className="card-title">{m.title}</h6>
                      <p className="card-text small mb-0">{m.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section id="team" className="mb-5">
            <h3 className="h5 mb-3">Our Team</h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
              {[
                { img: "/p1.jpg", name: "Dr. A. Sharma", role: "Chief Pharmacist" },
                { img: "/p3.png", name: "R. Gupta", role: "Head of Logistics" },
                { img: "/p3.png", name: "M. Fernandes", role: "Product Lead" },
                { img: "/p4.png", name: "S. Patel", role: "Customer Experience" },
              ].map((member, i) => (
                <div className="col" key={i}>
                  <div className="card h-100 text-center">
                    <img src={member.img} className="card-img-top img-fluid" alt={member.name} />
                    <div className="card-body">
                      <h6 className="card-title mb-0">{member.name}</h6>
                      <small className="text-muted">{member.role}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Accordion */}
          <section className="mb-5">
            <h3 className="h5 mb-3">Frequently Asked Questions</h3>
            <div className="accordion" id="faqAccordion">
              {[
                {
                  id: "one",
                  question: "Do you accept scanned prescriptions?",
                  answer:
                    "Yes — upload a clear picture or PDF when ordering prescription medicines; our pharmacists will review it.",
                },
                {
                  id: "two",
                  question: "What are the delivery windows?",
                  answer:
                    "Delivery options include same-day (in select areas), next-day, or scheduled delivery slots chosen during checkout.",
                },
                {
                  id: "three",
                  question: "How do you ensure medicine quality?",
                  answer:
                    "We partner with licensed pharmacies and trusted suppliers, perform batch checks, and follow correct storage & handling protocols.",
                },
              ].map((faq, i) => (
                <div className="accordion-item" key={i}>
                  <h2 className="accordion-header" id={`heading${faq.id}`}>
                    <button
                      className={`accordion-button ${i !== 0 ? "collapsed" : ""}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${faq.id}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${faq.id}`}
                    className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="p-4 bg-light rounded">
              <h4 className="mb-3">Ready to order?</h4>
              <p className="mb-3">Sign up and get your first delivery with a discount.</p>
              <a href="/signup" className="btn btn-primary btn-lg">Create Account</a>
              <a href="/products" className="btn btn-outline-primary btn-lg ms-2">Browse Products</a>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default About;
