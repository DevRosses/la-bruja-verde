import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

export function dispararSweetBasico(icono, titulo, texto, textoBoton) {
  Swal.fire({
    icon: icono,
    title: titulo,
    text: texto,
    confirmButtonText: textoBoton,
  });
}

const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger",
  },
  buttonsStyling: false,
});

export function dispararSweetConfirmacion() {
  return swalWithBootstrapButtons.fire({
    title: "¿Estás seguro?",
    text: "Estas eliminando el producto del carrito.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "No, cancelar",
    reverseButtons: true,
  });
}
