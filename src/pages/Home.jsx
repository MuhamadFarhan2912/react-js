import { Link } from "react-router-dom"

function Home() {
  return (
    <section id="home" className="container my-5 py-5">
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

            <Link
              to="/contact"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Hubungi Kami
            </Link>
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
  )
}

export default Home