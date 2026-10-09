
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <main className="py-4">
      <section
        className="rounded-4 p-4 p-md-5 mb-5 text-white"
        style={{
          background:
            "linear-gradient(120deg, #102a43, #1769aa, #56a8ed)",
        }}
      >
        <span className="badge bg-light text-primary mb-3">
          CONTACT US
        </span>
        <h1 className="display-5 fw-bold">Let's Talk About Books.</h1>
        <p className="lead mb-0" style={{ maxWidth: "600px" }}>
          Punya pertanyaan atau butuh rekomendasi buku?
          Kami siap membantu perjalanan membaca kamu.
        </p>
      </section>

      <div className="row g-4 mb-5">
        <div className="col-12 col-lg-5">
          <h2 className="fw-bold mb-3">Get in Touch</h2>
          <p className="text-secondary mb-4">
            Hubungi tim Bookstore melalui informasi berikut.
            Kami senang mendengar dari kamu.
          </p>

          <div className="card border-0 shadow-sm rounded-4 mb-3">
            <div className="card-body p-4 d-flex gap-3">
              <div
                className="rounded-3 d-flex align-items-center justify-content-center text-primary"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#eaf4ff",
                  fontSize: "1.4rem",
                  flexShrink: 0,
                }}
              >
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div>
                <h6 className="fw-bold mb-1">Email</h6>
                <p className="text-primary mb-1">
                  support@bookstore.example
                </p>
                <small className="text-secondary">
                  Untuk pertanyaan dan bantuan.
                </small>
              </div>
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-4 mb-3">
            <div className="card-body p-4 d-flex gap-3">
              <div
                className="rounded-3 d-flex align-items-center justify-content-center text-primary"
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "#eaf4ff",
                  fontSize: "1.4rem",
                  flexShrink: 0,
                }}
              >
                <i className="fa-solid fa-book-open"></i>
              </div>
              <div>
                <h6 className="fw-bold mb-1">Bookstore</h6>
                <p className="text-secondary mb-1">
                  Your next favorite book starts here.
                </p>
                <small className="text-secondary">
                  Temukan cerita baru setiap hari.
                </small>
              </div>
            </div>
          </div>

          <div
            className="rounded-4 p-4 mt-4"
            style={{ backgroundColor: "#edf6ff" }}
          >
            <h5 className="fw-bold">📚 Need a recommendation?</h5>
            <p className="text-secondary mb-0">
              Ceritakan genre favorit kamu melalui form.
              Kami akan membantu menemukan bacaan yang cocok.
            </p>
          </div>
        </div>

        <div className="col-12 col-lg-7">
          <div className="card border-0 shadow-sm rounded-4 h-100">
            <div className="card-body p-4 p-md-5">
              <h3 className="fw-bold mb-2">Send Us a Message</h3>
              <p className="text-secondary mb-4">
                Isi form di bawah ini dengan lengkap.
              </p>

              {submitted && (
                <div className="alert alert-success" role="status">
                  Pesan berhasil divalidasi! Form ini masih berupa demo
                  dan belum mengirim pesan ke server.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Nama Lengkap
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Masukkan nama kamu"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="nama@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder="Tuliskan pertanyaan atau pesan kamu..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-lg w-100 rounded-3"
                >
                  <i className="fa-solid fa-paper-plane me-2"></i>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}