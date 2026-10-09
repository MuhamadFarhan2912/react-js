
import services from "../../Utils/services";
import styles from "../../styles/services.module.css";

function Services() {
  return (
    <section className={styles.container}>
      <h2>Layanan Kami</h2>

      <div className={styles.serviceList}>
        {services.map((service) => (
          <div className={styles.card} key={service.id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;