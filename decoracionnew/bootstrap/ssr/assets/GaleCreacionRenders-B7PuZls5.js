import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Nav, U as UsoGeneral, F as Form, a as Footer } from "./UsoGeneral-Ddt5WNia.js";
import { C as Creaci_nRenders } from "./creación-de-renders-CQyhLBVy.js";
import { M as MuckupCuadrosCanvas, a as MuckupTupperware, R as RenderFashionCristal, b as RenderPeceraArcos } from "./Render-pecera-los-arcos2-BbrAP_nr.js";
import "react";
import "axios";
const GaleriaCreacionRenders = [
  {
    img: Creaci_nRenders,
    alt: "Render",
    titulo: "Render "
  },
  {
    img: MuckupCuadrosCanvas,
    alt: "Render de Cuadros",
    titulo: "Cuadros Canvas"
  },
  {
    img: MuckupTupperware,
    alt: "Render Tupperware",
    titulo: "Muckup Tupperware"
  },
  {
    img: RenderFashionCristal,
    alt: "Render Fashion Cristal",
    titulo: "Render de Fashion Cristal"
  },
  {
    img: RenderPeceraArcos,
    alt: "Render Pecera",
    titulo: "Pecera los Arcos"
  }
];
function GaleCreacionRenders(params) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Creación de Renders | Alta Calidad" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("div", { className: "colorGr", children: [
      /* @__PURE__ */ jsx("h1", { className: "divCenter h1", children: "Creación de Renders" }),
      /* @__PURE__ */ jsx("h2", { className: "divCenter h4", children: "Nuestra galeria de los proyectos" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "galeria", children: GaleriaCreacionRenders.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "galeria-item", children: [
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
  GaleCreacionRenders as default
};
