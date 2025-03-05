import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import axios from "axios";
const MagicPop = "/build/assets/iconMagic-CiU6lO98.png";
const Correo = "/build/assets/correo-electronico-mini-DdV81SIX.png";
const Telefono = "/build/assets/llamada-telefonica-mini-CvCrJ-uh.png";
const Icons = {
  MagicPop,
  Correo,
  Telefono
};
const WhatsB = "/build/assets/whatsapp-BtCgz4Tn.png";
const Facebook = "/build/assets/facebook-BQJt4noz.png";
const Instagram = "/build/assets/instagram-Btk2Dwh6.png";
const TikTok = "/build/assets/tik-tok-C9M6Smct.png";
const RedesSoci = {
  WhatsB,
  Facebook,
  Instagram,
  TikTok
};
function Nav() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("nav", { className: "navbar  fixed-top", children: /* @__PURE__ */ jsxs("div", { className: "container-fluid", children: [
    /* @__PURE__ */ jsxs("a", { className: "navbar-brand iconNav", href: route("home"), children: [
      " ",
      /* @__PURE__ */ jsx("img", { src: Icons.MagicPop, alt: "IconoMagicPop", title: "IconoMagicPop" }),
      " "
    ] }),
    /* @__PURE__ */ jsxs("div", { className: " positionNav", children: [
      /* @__PURE__ */ jsx("a", { href: "", className: "nav-link", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: Icons.Correo, alt: "correo", title: "correo" }) }) }),
      /* @__PURE__ */ jsx("a", { href: "tel:5526524180", className: "nav-link", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: Icons.Telefono, alt: "telefono", title: "telefono" }) }) })
    ] }),
    /* @__PURE__ */ jsx("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "offcanvas", "data-bs-target": "#offcanvasNavbar", "aria-controls": "offcanvasNavbar", "aria-label": "Toggle navigation", children: /* @__PURE__ */ jsx("span", { className: "navbar-toggler-icon" }) }),
    /* @__PURE__ */ jsxs("div", { className: "offcanvas offcanvas-end", tabIndex: -1, id: "offcanvasNavbar", "aria-labelledby": "offcanvasNavbarLabel", children: [
      /* @__PURE__ */ jsxs("div", { className: "offcanvas-header", children: [
        /* @__PURE__ */ jsx("h5", { className: "offcanvas-title iconNav", id: "offcanvasNavbarLabel", children: /* @__PURE__ */ jsx("img", { src: Icons.MagicPop, alt: "IconoMagicPop", title: "IconoMagicPop" }) }),
        /* @__PURE__ */ jsx("button", { type: "button", className: "btn-close", "data-bs-dismiss": "offcanvas", "aria-label": "Close" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "offcanvas-body", children: /* @__PURE__ */ jsxs("ul", { className: "navbar-nav justify-content-end flex-grow-1 pe-3", children: [
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link", "aria-current": "page", href: route("servicio1"), children: "Creatividad & Diseño Grafico" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link", href: route("servicio2"), children: "Impresión de Fotografia Profecional en Alta Resolución" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link", "aria-current": "page", href: route("servicio3"), children: "Instalación de Vinil y Materiales para Decoración" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link", href: route("servicio4"), children: "Recorte de Vinil" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link", href: route("servicio5"), children: "Decoración con Vinil" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link", href: "#", children: "Material Pop, Posters, Electrostaticos, Banners y Tentcard" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link", href: "#", children: "Contacto" }) }),
        /* @__PURE__ */ jsx("li", { className: "nav-item", children: /* @__PURE__ */ jsx("a", { className: "nav-link", href: "#", children: "Blog" }) }),
        /* @__PURE__ */ jsxs("li", { className: "nav-item redesFooter", children: [
          /* @__PURE__ */ jsx("a", { className: "nav-link", href: "", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: RedesSoci.Facebook, alt: "Facebook Redes", title: "Facebook Redes" }) }) }),
          /* @__PURE__ */ jsx("a", { className: "nav-link", href: "", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: RedesSoci.Instagram, alt: "Instagram Redes", title: "Instagram Redes" }) }) }),
          /* @__PURE__ */ jsx("a", { className: "nav-link", href: "", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: RedesSoci.TikTok, alt: "TikTok Redes", title: "TikTok Redes" }) }) }),
          /* @__PURE__ */ jsx("a", { className: "nav-link", href: "https://wa.me/525536615473?text=Hola%20Magic%20Pop%20Decoracion,%20quiero%20saber%20más%20sobre%20tus%20servicios,%20me%20podrías%20apoyar?", target: "_blanck", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: RedesSoci.WhatsB, alt: "Whats Redes", title: "Whats Redes" }) }) }),
          /* @__PURE__ */ jsx("a", { className: "nav-link", href: "", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: Icons.Correo, alt: "coreo", title: "coreo" }) }) })
        ] })
      ] }) })
    ] })
  ] }) }) });
}
function WhatsButon() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    "a",
    {
      href: "https://wa.me/525536615473?text=Hola%20Magic%20Pop%20Decoracion,%20quiero%20saber%20más%20sobre%20tus%20servicios,%20me%20podrías%20apoyar?",
      target: "_blanck",
      className: "btn-flotante",
      children: /* @__PURE__ */ jsx("img", { src: RedesSoci.WhatsB, alt: "Boton de whatsapp", title: "Boton de whatsapp" })
    }
  ) });
}
function Footer(params) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(WhatsButon, {}),
    /* @__PURE__ */ jsxs("footer", { children: [
      /* @__PURE__ */ jsxs("div", { className: "divCenterFooter", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid", children: [
          /* @__PURE__ */ jsx("h4", { className: "fonth4", children: "Categorías" }),
          /* @__PURE__ */ jsxs("div", { className: "divCenter", children: [
            /* @__PURE__ */ jsx("div", { className: "tamDiv1", children: /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: route("servicio1"), children: "Creatividad & Diseño Gráfico" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: route("servicio2"), children: "Impresión de Fotografia Profecional en Alta Resolución" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: route("servicio3"), children: "Instalación de Vinil y Materiales para Decoración" }) })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "tamDiv1", children: /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: route("servicio4"), children: "Recorte de Vinil" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: route("servicio5"), children: "Decoración con Vinil" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Material Pop, Posters, Electrostaticos, Banners y Tentcard" }) })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid", children: [
          /* @__PURE__ */ jsx("a", { href: "", children: /* @__PURE__ */ jsx("h4", { className: "fonth4", children: "Nosotros" }) }),
          /* @__PURE__ */ jsxs("div", { className: "divCenter", children: [
            /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("ul", { children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Contacto" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Blog" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Política de Privacidad" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "", children: "Términos y Condiciones" }) })
            ] }) }),
            /* @__PURE__ */ jsxs("div", { className: "redesFooter", children: [
              /* @__PURE__ */ jsx("a", { href: "", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: RedesSoci.Facebook, alt: "Facebook Redes", title: "Facebook Redes" }) }) }),
              /* @__PURE__ */ jsx("a", { href: "", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: RedesSoci.Instagram, alt: "Instagram Redes", title: "Instagram Redes" }) }) }),
              /* @__PURE__ */ jsx("a", { href: "", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: RedesSoci.TikTok, alt: "TikTok Redes", title: "TikTok Redes" }) }) }),
              /* @__PURE__ */ jsx("a", { href: "https://wa.me/525536615473?text=Hola%20Magic%20Pop%20Decoracion,%20quiero%20saber%20más%20sobre%20tus%20servicios,%20me%20podrías%20apoyar?", target: "_blanck", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: RedesSoci.WhatsB, alt: "Whats Redes", title: "Whats Redes" }) }) })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "divCenter", children: /* @__PURE__ */ jsxs("small", { children: [
        "©2024 ",
        /* @__PURE__ */ jsx("a", { href: route("home"), children: "Magic Pop" })
      ] }) })
    ] })
  ] });
}
function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    asunto: "",
    message: "",
    checked: false
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    city: "",
    phone: "",
    asunto: "",
    message: "",
    checked: ""
  });
  const [isValid, setIsValid] = useState(false);
  const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const regexPhone = /^[0-9]{10}$/;
  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every((value) => value !== "" && value !== false);
    const noErrors = Object.values(errors).every((error) => error === "");
    setIsValid(allFieldsFilled && noErrors);
  }, [formData, errors]);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value
    }));
    let error = "";
    if (type === "text" || type === "textarea") {
      if (value === "" || value.length <= 2) {
        error = "Este campo es obligatorio y debe tener más de dos caracteres.";
      }
    } else if (type === "email") {
      if (!regexEmail.test(value)) {
        error = "El correo electrónico no es válido.";
      }
    } else if (type === "tel") {
      if (!regexPhone.test(value)) {
        error = "El número de teléfono debe tener 10 dígitos.";
      }
    } else if (type === "checkbox") {
      error = !checked ? "Debe aceptar las políticas de privacidad." : "";
    }
    setErrors((prevState) => ({
      ...prevState,
      [name]: error
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/contact", formData);
      if (response.status === 200) {
        window.location.href = "/";
      }
    } catch (error) {
      alert("Hubo un error al enviar el formulario.");
      console.error("Error al enviar el formulario:", error);
    }
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "seccion-text", children: /* @__PURE__ */ jsxs("form", { id: "contact", action: "contact", method: "post", autoComplete: "off", onSubmit: handleSubmit, children: [
    /* @__PURE__ */ jsx("input", { type: "hidden", name: "_token", id: "token", value: "{{ csrf_token() }}" }),
    /* @__PURE__ */ jsxs("div", { className: "contac-formul", children: [
      /* @__PURE__ */ jsxs("div", { className: "contac-formul-div", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "name",
            placeholder: "Nombre *",
            value: formData.name,
            onChange: handleChange,
            className: "form-control ${errors.name ? 'is-invalid' : ''}"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "color-blanc ${errors.name ? 'is-invalid' : ''}", children: errors.name })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "contac-formul-div", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "email",
            name: "email",
            placeholder: "Correo *",
            value: formData.email,
            onChange: handleChange,
            className: "form-control ${errors.email ? 'is-invalid' : ''}"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "color-blanc ${errors.name ? 'is-invalid' : ''}", children: errors.email })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "contac-formul-div", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "city",
            placeholder: "Ciudad *",
            value: formData.city,
            onChange: handleChange,
            className: "form-control ${errors.city ? 'is-invalid' : ''}"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "color-blanc", children: errors.city })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "contac-formul-div", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "tel",
            name: "phone",
            placeholder: "Teléfono *",
            value: formData.phone,
            onChange: handleChange,
            className: "form-control ${errors.phone ? 'is-invalid' : ''}"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "color-blanc", children: errors.phone })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "contac-formul", children: [
      /* @__PURE__ */ jsxs("div", { className: "contac-formul-div", children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "text",
            name: "asunto",
            placeholder: "Asunto *",
            value: formData.asunto,
            onChange: handleChange,
            className: "form-control ${errors.asunto ? 'is-invalid' : ''}"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: "color-blanc", children: errors.asunto })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "contac-formul-div", children: /* @__PURE__ */ jsx(
        "textarea",
        {
          name: "message",
          id: "mensaje",
          cols: "70",
          rows: "5",
          placeholder: "Mensaje * Estimado proveedor este 'FORMULARIO' es para uso exclusivo del área de ventas y servicio a clientes. En caso de que usted esté interesado en hacernos llegar información sobre sus promociones, productos o servicios, hágalo por favor al siguiente correo: compras@magicpop.com.mx y evite que su correo sea reportado como SPAM. Gracias.",
          value: formData.message,
          onChange: handleChange,
          className: "form-control ${errors.message ? 'is-invalid' : ''}"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "contac-formul-div", children: /* @__PURE__ */ jsx("button", { type: "submit", className: "form-control form-button ${!isValid ? 'none' : ''}", disabled: !isValid, children: "Enviar" }) }),
      /* @__PURE__ */ jsxs("div", { className: "contac-formul-div color-blanc", children: [
        /* @__PURE__ */ jsxs("label", { className: "contac-formul-div-politics", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              name: "checked",
              checked: formData.checked,
              onChange: handleChange,
              className: "form-control"
            }
          ),
          "Políticas de Privacidad",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("small", { children: "El Aviso de Privacidad es un documento que informa a los usuarios sobre el manejo de sus datos personales. Existen tres tipos de Avisos de Privacidad: Integral, Simplificado y Corto, cada uno adaptado a distintas necesidades y situaciones. El Aviso de Privacidad establece las prácticas y condiciones que los usuarios deben conocer y aceptar al interactuar con diversos contenidos, productos o servicios." })
        ] }),
        /* @__PURE__ */ jsx("span", { children: errors.checked })
      ] })
    ] })
  ] }) }) });
}
const InstalacióndeVinilCircular = "/build/assets/Instalaci%C3%B3ndeVinil-Circular-D9r3JVkr.png";
const Creatividadydiseñografico = "/build/assets/Creatividadydise%C3%B1ografico-DtshdnhO.png";
const ImpresionDigitalGranformato = "/build/assets/Impresion-digitalygranformato-QA1mk64Y.png";
const Recortedevinil = "/build/assets/Recortedevinil-Csu-svRz.png";
const DecoraciónconVinil = "/build/assets/Decoraci%C3%B3nconVinil-BudC_NZF.png";
const UsoGeneral = {
  InstalacióndeVinilCircular,
  Creatividadydiseñografico,
  ImpresionDigitalGranformato,
  Recortedevinil,
  DecoraciónconVinil
};
export {
  Form as F,
  Icons as I,
  Nav as N,
  RedesSoci as R,
  UsoGeneral as U,
  Footer as a
};
