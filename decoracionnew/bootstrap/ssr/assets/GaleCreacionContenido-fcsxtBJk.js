import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Nav, U as UsoGeneral, F as Form, a as Footer } from "./UsoGeneral-Ddt5WNia.js";
import { G as GaleContenidosDigitales, a as GaleContenidoDigital, b as GaleCreaci_nContenidosDigitales, c as GalePublicidadContenido } from "./Publicidad-de-contenido-cOkoE5gI.js";
import "react";
import "axios";
const GaleriaCreacionContenido = [
  {
    img: GaleContenidosDigitales,
    alt: "Salon de Bellesa",
    titulo: "Salon de Bellesa"
  },
  {
    img: GaleContenidoDigital,
    alt: "Web de radio",
    titulo: "Sitio WEB"
  },
  {
    img: GaleCreaci_nContenidosDigitales,
    alt: "Botiquin de OLIFE",
    titulo: "Botiquin de OLIFE"
  },
  {
    img: GalePublicidadContenido,
    alt: "Paseos de alboleada",
    titulo: "Publicidad para Paseos alboleada"
  }
];
function GaleCreacionContenido(params) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Creación de Contenido | Galería" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("div", { className: "colorGr", children: [
      /* @__PURE__ */ jsx("h1", { className: "divCenter h1", children: "Creación de Contenido" }),
      /* @__PURE__ */ jsx("h2", { className: "divCenter h4", children: "Nuestra galeria de los proyectos" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "galeria", children: GaleriaCreacionContenido.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "galeria-item", children: [
      /* @__PURE__ */ jsx("img", { src: item.img, alt: item.alt, className: "galeria-imagen" }),
      /* @__PURE__ */ jsx("h3", { className: "galeria-titulo h3", children: /* @__PURE__ */ jsx("strong", { children: item.titulo }) })
    ] }, index)) }),
    /* @__PURE__ */ jsxs("div", { className: "form-div-duple", children: [
      /* @__PURE__ */ jsx("div", { className: "conImg", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: UsoGeneral.Creatividadydiseñografico, alt: "Creatividad y Diseno Grafico", title: "Creatividad y Diseno Grafico", loading: "lazy" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "conInfo", children: /* @__PURE__ */ jsx(Form, {}) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  GaleCreacionContenido as default
};
