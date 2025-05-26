import { FaStar } from "react-icons/fa";
import Button from "../components/ui/Button";
import { Navigate } from "react-router-dom";

function Home() {
  const handleStar = () => {
    alert("¡La bruja verde te da la bienvenida!");
    // Redirigir a la página de productos
    return <Navigate to="/la-bruja-verde/productos" />;
  };

  return (
    <>
      <h2>Bienvenida al bosque de lo natural.</h2>
      <p>
        La magia está en los detalles. Cuidarte también puede ser un ritual.
      </p>
      <Button text="Explorá la magia" icon={<FaStar />} onClick={handleStar} />
    </>
  );
}

export default Home;
