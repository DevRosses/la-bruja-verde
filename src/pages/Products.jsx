import img1 from "../assets/images/Products/c1.jpg";
import img2 from "../assets/images/Products/e1.jpg";
import img3 from "../assets/images/Products/f1.jpg";

function Productos() {
  const images = [img1, img2, img3];

  return (
    <>
      <section
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Imagen ${index + 1}`}
            style={{ width: "150px", height: "150px" }}
          />
        ))}
      </section>
    </>
  );
}

export default Productos;
