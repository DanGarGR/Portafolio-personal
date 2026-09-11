/* =====================================
   FILTROS DEL PORTAFOLIO
===================================== */

const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Quitar active de todos
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Activar botón seleccionado
        button.classList.add("active");

        // Categoría seleccionada
        const filter = button.getAttribute("data-filter");


        portfolioItems.forEach(item => {

            const category = item.getAttribute("data-category");


            if (filter === "all" || category === filter) {

                item.classList.remove("hidden");

            } else {

                item.classList.add("hidden");

            }

        });

    });

});


/* =====================================
   FORMULARIO DE CONTACTO
===================================== */

const contactForm = document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const nombre =
            document.getElementById("nombre").value;

        const email =
            document.getElementById("email").value;

        const asunto =
            document.getElementById("asunto").value;

        const mensaje =
            document.getElementById("mensaje").value;


        /*
            Por ahora el formulario abre el
            cliente de correo del usuario.

            Más adelante podemos conectarlo
            a Formspree, EmailJS, PHP, etc.
        */


        const mailto =
            `mailto:garciadanielivan2005@gmail.com` +
            `?subject=${encodeURIComponent(asunto)}` +
            `&body=${encodeURIComponent(
                "Nombre: " + nombre +
                "\nCorreo: " + email +
                "\n\nMensaje:\n" + mensaje
            )}`;


        window.location.href = mailto;

    });

}


/* =====================================
   NAVBAR AL HACER SCROLL
===================================== */

const navbar = document.querySelector(".navbar");


window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.padding = "10px 0";

    } else {

        navbar.style.padding = "18px 0";

    }

});


/* =====================================
   CERRAR NAVBAR EN CELULAR
===================================== */

const navLinks =
    document.querySelectorAll(".nav-link");

const navbarCollapse =
    document.querySelector(".navbar-collapse");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navbarCollapse.classList.contains("show")) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {

                bsCollapse.hide();

            }

        }

    });

});

// =========================
// GALERÍA DE IMÁGENES
// =========================

const galleryImages = document.querySelectorAll(".gallery-image");
const viewButtons = document.querySelectorAll(".view-project");
const modalImage = document.getElementById("modalImage");

// Cuando se hace clic directamente sobre una imagen
galleryImages.forEach(image => {

    image.addEventListener("click", function () {

        modalImage.src = this.src;
        modalImage.alt = this.alt;

    });

});


// Cuando se hace clic en el botón de zoom (+)
viewButtons.forEach(button => {

    button.addEventListener("click", function () {

        const image = this
            .closest(".project-card")
            .querySelector(".gallery-image");

        if (image) {

            modalImage.src = image.src;
            modalImage.alt = image.alt;

        }

    });

});