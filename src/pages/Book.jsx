function Book() {
  return (
    <section className="container my-5 py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-3">Our Books</h2>
        <p className="text-muted mb-4">
          Temukan berbagai macam buku pilihan di Bookstore.
        </p>
      </div>

      <div className="row justify-content-center g-4">

        <div className="col-md-4">
          <div className="card text-center shadow-sm h-100">
            <div className="card-body p-5">
              <i
                className="fa-solid fa-book"
                style={{
                  fontSize: "70px",
                  color: "rgb(116, 192, 252)"
                }}
              ></i>

              <h5 className="card-title mt-4 mb-3">
                Novel Pilihan
              </h5>

              <p className="card-text">
                Berbagai novel menarik untuk menemani waktu luang
                dan memberikan pengalaman membaca yang menyenangkan.
              </p>

              <button className="btn btn-primary mt-3">
                Lihat Buku
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow-sm h-100">
            <div className="card-body p-5">
              <i
                className="fa-solid fa-book-open"
                style={{
                  fontSize: "70px",
                  color: "rgb(116, 192, 252)"
                }}
              ></i>

              <h5 className="card-title mt-4 mb-3">
                Buku Pendidikan
              </h5>

              <p className="card-text">
                Buku pendidikan untuk membantu meningkatkan
                pengetahuan dan mendukung proses pembelajaran.
              </p>

              <button className="btn btn-primary mt-3">
                Lihat Buku
              </button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card text-center shadow-sm h-100">
            <div className="card-body p-5">
              <i
                className="fa-solid fa-laptop-code"
                style={{
                  fontSize: "70px",
                  color: "rgb(116, 192, 252)"
                }}
              ></i>

              <h5 className="card-title mt-4 mb-3">
                Buku Teknologi
              </h5>

              <p className="card-text">
                Buku teknologi untuk mendukung pembelajaran
                dan perkembangan di bidang teknologi.
              </p>

              <button className="btn btn-primary mt-3">
                Lihat Buku
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Book