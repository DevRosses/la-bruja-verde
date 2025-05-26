import Button from "../components/ui/Button";
import { FaStar } from "react-icons/fa";
import Productos from "../pages/Products";
import ProductList from "../pages/ProductList";

function Main() {
  const handleStar = () => {
    alert("¡La bruja verde te da la bienvenida! ");
  };

  return (
    <>
      <main className="Main">
        <p>Esta es una aplicación de ejemplo para aprender React.</p>
        <Button text="¡Haz clic aquí!" icon={<FaStar />} onClick={handleStar} />
        <p>¡Gracias por visitarnos!</p>
        <Productos />
        <ProductList />
      </main>
    </>
  );
}

export default Main;
