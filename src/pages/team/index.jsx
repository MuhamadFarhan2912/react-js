
const members = [
  {
    name: "Farhan Apriliansyah",
    role: "Frontend Developer",
    description:
      "Mengembangkan tampilan website yang menarik, interaktif, dan responsif.",
    avatar: "👨🏻‍💻",
  },
  {
    name: "Dita Putri",
    role: "Backend Developer",
    description:
      "Mengelola logika aplikasi dan memastikan fitur berjalan dengan baik.",
    avatar: "👩🏻‍💻",
  },
  {
    name: "Rizky Pratama",
    role: "UI/UX Designer",
    description:
      "Merancang pengalaman pengguna yang nyaman, sederhana, dan mudah digunakan.",
    avatar: "🧑🏻‍🎨",
  },
];

export default function Team() {
  return (
    <main className="py-4">
      <section className="rounded-4 p-4 p-md-5 mb-5"
        style={{ background: "linear-gradient(135deg, #eaf4ff, #f8fbff)" }}>
        <span className="badge text-primary bg-white mb-3">
          OUR TEAM
        </span>
        <h1 className="display-5 fw-bold text-dark">
          Meet Our Team
        </h1>
        <p className="lead text-secondary mb-0">
          Kami adalah tim di balik Bookstore, dengan satu tujuan:
          membantu semua orang menemukan buku favoritnya.
        </p>
      </section>

      <section className="text-center mb-4">
        <h2 className="fw-bold">Orang-Orang di Balik Bookstore</h2>
        <p className="text-secondary">
          Kenali tim yang membuat pengalaman membaca lebih menyenangkan.
        </p>
      </section>

      <div className="row g-4 mb-5">
        {members.map((member) => (
          <div className="col-12 col-md-6 col-lg-4" key={member.name}>
            <div className="card h-100 border-0 shadow-sm rounded-4 text-center p-4">
              <div
                className="rounded-circle mx-auto d-flex align-items-center justify-content-center mb-3"
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#eaf4ff",
                  fontSize: "3rem",
                }}
              >
                {member.avatar}
              </div>

              <h5 className="fw-bold mb-2">{member.name}</h5>
              <span className="badge rounded-pill text-bg-primary align-self-center mb-3">
                {member.role}
              </span>
              <p className="text-secondary mb-0">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <section className="rounded-4 p-4 text-center"
        style={{ backgroundColor: "#edf6ff" }}>
        <h4 className="fw-bold">Satu Tim, Satu Tujuan 📚</h4>
        <p className="text-secondary mb-0">
          Kami percaya bahwa setiap buku membuka kesempatan untuk
          belajar dan menemukan dunia baru.
        </p>
      </section>
    </main>
  );
}