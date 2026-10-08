function Team() {
  return (
    <section className="container my-5 py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold mb-3">Our Team</h2>
        <p className="text-muted mb-4">
          Kenali anggota tim yang mengembangkan Bookstore.
        </p>
      </div>

      <div className="row justify-content-center g-4">
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

              <h5 className="card-title mt-4 mb-2">Farhan</h5>

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

              <h5 className="card-title mt-4 mb-2">Developer</h5>

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

              <h5 className="card-title mt-4 mb-2">Designer</h5>

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
  )
}

export default Team