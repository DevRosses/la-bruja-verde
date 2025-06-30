import styles from "../assets/styles/components/BannerPromo.module.css";

function BannerPromo() {
  return (
    <div className={styles.bannerPromo}>
      <h2 className={styles.bannerPromoTitle}>
        Promo lunar: 20% off en toda la línea de limpieza hasta el próximo
        plenilunio.
      </h2>
      <button className={styles.bannerPromoButton}>Ver productos</button>
    </div>
  );
}

export default BannerPromo;
