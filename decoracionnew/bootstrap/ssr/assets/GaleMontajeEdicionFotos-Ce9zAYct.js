import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Nav, U as UsoGeneral, F as Form, a as Footer } from "./UsoGeneral-Ddt5WNia.js";
import { M as MontajeEdicionFotos } from "./Montaje-y-edicion-de-fotos-DOQcWlUU.js";
import { M as MontajeEdicionFotografia, a as MontajeEdicionFo, E as Edicion, b as Montaje } from "./Montaje-y-edicion-de-fotografia-4-B9hiZRaK.js";
import "react";
import "axios";
const GaleriaMontajeEdicionFotos = [
  {
    img: MontajeEdicionFotos,
    alt: "Montaje de fotos",
    titulo: "Edicion de Fotos"
  },
  {
    img: MontajeEdicionFotografia,
    alt: "Montaje de fotos",
    titulo: "Edicion de Fotos"
  },
  {
    img: MontajeEdicionFo,
    alt: "Montaje de Fotos",
    titulo: "Montaje de Fotos"
  },
  {
    img: Edicion,
    alt: "Montaje de Fotos",
    titulo: "Montaje y Edicion"
  },
  {
    img: Montaje,
    alt: "Montaje de fotos",
    titulo: "Montaje y Edicion"
  }
];
function GaleMontajeEdicionFotos(params) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Montaje y Edición de Fotos | Creatividad" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("div", { className: "colorGr", children: [
      /* @__PURE__ */ jsx("h1", { className: "divCenter h1", children: "Montaje y Edición de Fotos" }),
      /* @__PURE__ */ jsx("h2", { className: "divCenter h4", children: "Nuestra galeria de los proyectos" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "galeria", children: GaleriaMontajeEdicionFotos.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "galeria-item", children: [
      /* @__PURE__ */ jsx("img", { src: item.img, alt: item.alt, className: "galeria-imagen", title: item.titulo }),
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
  GaleMontajeEdicionFotos as default
};
