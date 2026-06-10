const detalles = document.querySelectorAll("details");

detalles.forEach((detalle) => {

    detalle.addEventListener("toggle", () => {

        if (detalle.open) {

            detalles.forEach((otro) => {

                if (otro !== detalle) {
                    otro.removeAttribute("open");
                }

            });

        }

    });

});
document.getElementById("volverArriba")
.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});