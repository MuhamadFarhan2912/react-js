function App() {
  return (
    <>
      <div className="container">

        {/* NAVBAR */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-4 mb-5 border-bottom">

          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="#home"
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i
                className="fa-solid fa-book"
                style={{
                  color: "rgb(116, 192, 252)",
                  fontSize: "32px"
                }}
              ></i>

              <span className="ms-2 fs-4">
                Bookstore
              </span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">

            <li>
              <a href="#home" className="nav-link px-3">
                Home
              </a>
            </li>

            <li>
              <a href="#book" className="nav-link px-3">
                Book
              </a>
            </li>

            <li>
              <a href="#team" className="nav-link px-3">
                Team
              </a>
            </li>

            <li>
              <a href="#contact" className="nav-link px-3">
                Contact
              </a>
            </li>

          </ul>

          <div className="col-md-3 text-end">

            <button
              type="button"
              className="btn btn-outline-primary me-2"
            >
              Login
            </button>

            <button
              type="button"
              className="btn btn-primary"
            >
              Register
            </button>

          </div>

        </header>


        {/* HOME */}
        <section
          id="home"
          className="container my-5 py-5"
        >

          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">

            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">

              <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-4">
                Temukan Buku Favoritmu
              </h1>

              <p className="lead mb-4">
                Selamat datang di Bookstore. Temukan berbagai macam buku
                pilihan mulai dari novel, pendidikan, teknologi, hingga buku
                pengembangan diri.
              </p>

              <div className="d-grid gap-3 d-md-flex justify-content-md-start mb-4">

                <a
                  href="#book"
                  className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
                >
                  Lihat Buku
                </a>

                <a
                  href="#contact"
                  className="btn btn-outline-secondary btn-lg px-4"
                >
                  Hubungi Kami
                </a>

              </div>

            </div>

            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">

              <img
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=800"
                className="img-fluid"
                alt="Buku"
              />

            </div>

          </div>

        </section>


        {/* BOOK */}
        <section
          id="book"
          className="container my-5 py-5"
        >

          <div className="text-center mb-5">

            <h2 className="fw-bold mb-3">
              Buku Pilihan
            </h2>

            <p className="text-muted mb-4">
              Beberapa koleksi buku yang tersedia di Bookstore.
            </p>

          </div>


          <div className="row g-4">

            {/* BOOK 1 */}
            <div className="col-md-4">

              <div className="card h-100 shadow-sm">

                <img
                  src="https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=600"
                  className="card-img-top"
                  alt="Novel"
                  style={{
                    height: "300px",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body p-4">

                  <h5 className="card-title mb-3">
                    Novel Pilihan
                  </h5>

                  <p className="card-text mb-4">
                    Koleksi novel menarik untuk menemani waktu santai dan
                    mengisi waktu luang.
                  </p>

                  <button className="btn btn-primary">
                    Lihat Detail
                  </button>

                </div>

              </div>

            </div>


            {/* BOOK 2 */}
            <div className="col-md-4">

              <div className="card h-100 shadow-sm">

                <img
                  src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=600"
                  className="card-img-top"
                  alt="Buku Pendidikan"
                  style={{
                    height: "300px",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body p-4">

                  <h5 className="card-title mb-3">
                    Buku Pendidikan
                  </h5>

                  <p className="card-text mb-4">
                    Buku untuk membantu meningkatkan pengetahuan dan
                    kemampuan belajar.
                  </p>

                  <button className="btn btn-primary">
                    Lihat Detail
                  </button>

                </div>

              </div>

            </div>


            {/* BOOK 3 */}
            <div className="col-md-4">

              <div className="card h-100 shadow-sm">

                <img
                  src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=600"
                  className="card-img-top"
                  alt="Buku Teknologi"
                  style={{
                    height: "300px",
                    objectFit: "cover"
                  }}
                />

                <div className="card-body p-4">

                  <h5 className="card-title mb-3">
                    Buku Teknologi
                  </h5>

                  <p className="card-text mb-4">
                    Pelajari teknologi dan pemrograman melalui berbagai
                    buku pilihan.
                  </p>

                  <button className="btn btn-primary">
                    Lihat Detail
                  </button>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* TEAM */}
        <section
          id="team"
          className="container my-5 py-5"
        >

          <div className="text-center mb-5">

            <h2 className="fw-bold mb-3">
              Our Team
            </h2>

            <p className="text-muted mb-4">
              Kenali anggota tim yang mengembangkan Bookstore.
            </p>

          </div>


          <div className="row justify-content-center g-4">

            {/* TEAM 1 */}
            <div className="col-md-4">

              <div className="card text-center shadow-sm h-100">

                <div className="card-body p-5">

                  <i
                    className="fa-solid fa-user"
                    style={{
                      fontSize: "70px",
                      color: "rgb(116, 192, 252)"
                    }}
                  ></i>

                  <h5 className="card-title mt-4 mb-2">
                    Farhan
                  </h5>

                  <p className="text-muted mb-3">
                    Frontend Developer
                  </p>

                  <p className="card-text">
                    Bertanggung jawab dalam pembuatan tampilan dan
                    pengembangan website Bookstore.
                  </p>

                </div>

              </div>

            </div>


            {/* TEAM 2 */}
            <div className="col-md-4">

              <div className="card text-center shadow-sm h-100">

                <div className="card-body p-5">

                  <i
                    className="fa-solid fa-user"
                    style={{
                      fontSize: "70px",
                      color: "rgb(116, 192, 252)"
                    }}
                  ></i>

                  <h5 className="card-title mt-4 mb-2">
                    Developer
                  </h5>

                  <p className="text-muted mb-3">
                    Backend Developer
                  </p>

                  <p className="card-text">
                    Bertanggung jawab dalam pengelolaan data dan sistem
                    aplikasi Bookstore.
                  </p>

                </div>

              </div>

            </div>


            {/* TEAM 3 */}
            <div className="col-md-4">

              <div className="card text-center shadow-sm h-100">

                <div className="card-body p-5">

                  <i
                    className="fa-solid fa-user"
                    style={{
                      fontSize: "70px",
                      color: "rgb(116, 192, 252)"
                    }}
                  ></i>

                  <h5 className="card-title mt-4 mb-2">
                    Designer
                  </h5>

                  <p className="text-muted mb-3">
                    UI/UX Designer
                  </p>

                  <p className="card-text">
                    Bertanggung jawab dalam membuat desain dan pengalaman
                    pengguna yang menarik.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* CONTACT */}
        <section
          id="contact"
          className="container my-5 py-5"
        >

          <div className="text-center mb-5">

            <h2 className="fw-bold mb-3">
              Contact Us
            </h2>

            <p className="text-muted mb-4">
              Hubungi kami jika memiliki pertanyaan atau membutuhkan
              informasi lebih lanjut.
            </p>

          </div>


          <div className="row justify-content-center">

            <div className="col-md-8">

              <div className="card shadow-sm">

                <div className="card-body p-5">

                  <div className="mb-4">

                    <label className="form-label">
                      Nama
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Masukkan nama"
                    />

                  </div>


                  <div className="mb-4">

                    <label className="form-label">
                      Email
                    </label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Masukkan email"
                    />

                  </div>


                  <div className="mb-4">

                    <label className="form-label">
                      Pesan
                    </label>

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


        {/* FOOTER */}
        <footer className="py-5 my-5 border-top">

          <p className="text-center text-body-secondary mb-0">
            © 2026 Bookstore. All rights reserved.
          </p>

        </footer>


      </div>
    </>
  )
}

export default App