function Contact() {
  return (
    <section className="container my-5 py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-3">Contact Us</h2>

        <p className="text-muted mb-4">
          Hubungi kami jika memiliki pertanyaan atau membutuhkan informasi lebih lanjut.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body p-5">

              <div className="mb-4">
                <label className="form-label">Nama</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Masukkan nama"
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Masukkan email"
                />
              </div>

              <div className="mb-4">
                <label className="form-label">Pesan</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Tulis pesan kamu"
                ></textarea>
              </div>

              <button
                type="button"
                className="btn btn-primary px-4"
              >
                Kirim Pesan
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact