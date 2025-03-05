import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Nav, U as UsoGeneral, F as Form, a as Footer } from "./UsoGeneral-Ddt5WNia.js";
import { M as Microperforado } from "./microperforado-CtsUVRV1.js";
import { M as MicroperforadoVinil, V as VinilMicroperforadoo } from "./Vinil-microperforado-D8XQ1XNl.js";
import { V as VinilMicroperforado } from "./vinil-microperforado1-B7UrUcQY.js";
import "react";
import "axios";
const GaleriaMicroperforado = [
  {
    img: Microperforado,
    alt: "Decoracion Microperforado",
    titulo: "Vinil Microperforado"
  },
  {
    img: MicroperforadoVinil,
    alt: "Decoracion Microperforado",
    titulo: "Creación de Microperforado"
  },
  {
    img: VinilMicroperforadoo,
    alt: "Decoracion Microperforado",
    titulo: "Microperforado para Anuncios"
  },
  {
    img: VinilMicroperforado,
    alt: "Decoracion Microperforado",
    titulo: "Anuncios"
  }
];
function GaleMicroperforado(params) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Vinil Microperforado | Soluciones para Ventanas y Fachadas</title" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("div", { className: "colorGr", children: [
      /* @__PURE__ */ jsx("h1", { className: "divCenter h1", children: "Microperforado" }),
      /* @__PURE__ */ jsx("h2", { className: "divCenter h4", children: "Nuestra galeria de proyectos" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "galeria", children: GaleriaMicroperforado.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "galeria-item", children: [
      /* @__PURE__ */ jsx("img", { src: item.img, alt: item.alt, className: "galeria-imagen", title: item.titulo }),
      /* @__PURE__ */ jsx("h3", { className: "galeria-titulo h3", children: /* @__PURE__ */ jsx("strong", { children: item.titulo }) })
    ] }, index)) }),
    /* @__PURE__ */ jsxs("div", { className: "form-div-duple", children: [
      /* @__PURE__ */ jsx("div", { className: "conImg", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: UsoGeneral.DecoraciónconVinil, alt: "Creatividad y Diseno Grafico", title: "Creatividad y Diseno Grafico", loading: "lazy" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "conInfo", children: /* @__PURE__ */ jsx(Form, {}) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  GaleMicroperforado as default
};
