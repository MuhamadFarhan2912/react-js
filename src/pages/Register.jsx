function Register() {
  return (
    <section className="container my-5 py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-3">Register</h2>
        <p className="text-muted">
          Buat akun baru di Bookstore.
        </p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
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
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Masukkan password"
                />
              </div>

              <button className="btn btn-primary w-100">
                Register
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register