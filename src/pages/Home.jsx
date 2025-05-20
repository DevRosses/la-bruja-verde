import { FaStar } from "react-icons/fa";

import Button from "../components/ui/Button";


function Home() {
  const handleStar = () => {
    alert("¡La bruja verde te da la bienvenida! ");
  };

  return (
    <>
      <h2 >Bienvenido al Home</h2>
      <p>Esta es una aplicación de ejemplo para aprender React.</p>
      <Button text="¡Haz clic aquí!" icon={<FaStar />} onClick={handleStar} />
      <p>¡Gracias por visitarnos!</p>
    </>
  );
}

export default Home;
