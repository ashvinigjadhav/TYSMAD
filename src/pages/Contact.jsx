function Contact() {
  return (
    <main className="py-5">
      <div className="container">
        <div className="col-lg-8 mx-auto">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title mb-3">Contact Form</h5>

              <form onSubmit={(e) => e.preventDefault()}>
                {/* Name & Email */}
                <div className="row g-3 mb-3">
                  <div className="col-md-6">
                    <label htmlFor="fullName" className="form-label">
                      Full name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="fullName"
                      placeholder="Jane Doe"
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control"
                    rows="6"
                    placeholder="Write your message here..."
                    required
                  ></textarea>
                </div>

                {/* Checkboxes */}
                <fieldset className="mb-3">
                  <legend className="col-form-label pt-0">Reason for contact</legend>
                  {[
                    { id: "order", label: "Order issue" },
                    { id: "prescription", label: "Prescription query" },
                    { id: "partnership", label: "Partnership / Pharmacy onboarding" },
                  ].map((r) => (
                    <div className="form-check" key={r.id}>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`reason-${r.id}`}
                      />
                      <label className="form-check-label" htmlFor={`reason-${r.id}`}>
                        {r.label}
                      </label>
                    </div>
                  ))}
                </fieldset>

                {/* Radios */}
                <fieldset className="mb-3">
                  <legend className="col-form-label pt-0">Preferred reply method</legend>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="replyMethod"
                      id="replyEmail"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="replyEmail">
                      Email
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="replyMethod"
                      id="replyPhone"
                    />
                    <label className="form-check-label" htmlFor="replyPhone">
                      Phone
                    </label>
                  </div>
                </fieldset>

                {/* Toggle */}
                <div className="form-check form-switch mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="subscribe"
                  />
                  <label className="form-check-label" htmlFor="subscribe">
                    Subscribe to promotional updates (optional)
                  </label>
                </div>

                {/* Submit */}
                <div className="d-grid">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
