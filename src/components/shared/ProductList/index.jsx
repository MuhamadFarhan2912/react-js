
import { useState } from "react";
import booksData from "../../../Utils/books";

export default function ProductList() {
  const [books, setBooks] = useState(booksData);
  const [showForm, setShowForm] = useState(false);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
    image: "",
  });

  function handleChange(event) {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value,
    });
  }

  function handleAddBook(event) {
    event.preventDefault();

    const book = {
      ...newBook,
      id: Date.now(),
      year: Number(newBook.year),
      image:
        newBook.image.trim() ||
        "https://placehold.co/200x280?text=Book",
    };

    setBooks([...books, book]);
    setNewBook({
      title: "",
      author: "",
      year: "",
      description: "",
      image: "",
    });
    setShowForm(false);
  }

  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-4">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h1 className="fw-light">Koleksi Buku</h1>
            <p className="lead text-body-secondary">
              Temukan buku pilihan untuk menambah pengetahuan
              dan keterampilan pemrograman kamu.
            </p>

            <button
              className="btn btn-primary my-2"
              onClick={() => setShowForm(!showForm)}
            >
              {showForm ? "Batal" : "Tambah Buku"}
            </button>
          </div>
        </div>

        {showForm && (
          <form
            className="row g-3 text-start mb-5"
            onSubmit={handleAddBook}
          >
            <div className="col-md-6">
              <label className="form-label">Judul Buku</label>
              <input
                className="form-control"
                name="title"
                value={newBook.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Penulis</label>
              <input
                className="form-control"
                name="author"
                value={newBook.author}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label">Tahun</label>
              <input
                className="form-control"
                type="number"
                name="year"
                value={newBook.year}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-8">
              <label className="form-label">URL Gambar</label>
              <input
                className="form-control"
                name="image"
                value={newBook.image}
                onChange={handleChange}
                placeholder="Opsional"
              />
            </div>

            <div className="col-12">
              <label className="form-label">Deskripsi</label>
              <textarea
                className="form-control"
                name="description"
                value={newBook.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12">
              <button className="btn btn-success" type="submit">
                Simpan Buku
              </button>
            </div>
          </form>
        )}
      </section>

      <div className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {books.map((book) => (
              <div className="col" key={book.id}>
                <div className="card shadow-sm h-100">
                  <img
                    src={book.image}
                    className="card-img-top"
                    alt={book.title}
                    style={{
                      height: "280px",
                      objectFit: "contain",
                      padding: "12px",
                    }}
                    onError={(event) => {
                      event.currentTarget.src =
                        "https://placehold.co/200x280?text=Book";
                    }}
                  />

                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="text-body-secondary mb-2">
                      {book.author} · {book.year}
                    </p>
                    <p className="card-text">{book.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}