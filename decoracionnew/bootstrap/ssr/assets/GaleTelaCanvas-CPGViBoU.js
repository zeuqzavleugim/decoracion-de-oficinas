import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Nav, U as UsoGeneral, F as Form, a as Footer } from "./UsoGeneral-Ddt5WNia.js";
import { I as Impresi_nCanvas, a as Impresi_nLienzo, C as CuadrosCanvas, P as PinturasLienzo } from "./Pinturas-en-lienzo-pHd8PHkU.js";
import { T as TelaCanvas } from "./tela-canvas-1SniH_hb.js";
import "react";
import "axios";
const GaleriaTelaCanvas = [
  {
    img: TelaCanvas,
    alt: "Cuandro Canvas",
    titulo: "Cuadro en Canvas"
  },
  {
    img: Impresi_nCanvas,
    alt: "Imprecion de Canvas",
    titulo: "Imprecion de Cuadros en Canvas"
  },
  {
    img: Impresi_nLienzo,
    alt: "Decoracion con Canvas",
    titulo: "Decoracion con Canvas"
  },
  {
    img: CuadrosCanvas,
    alt: "Cuandro Canvas",
    titulo: "Cuandro Canvas Noche Estrellada"
  },
  {
    img: PinturasLienzo,
    alt: "Cuandro Canvas",
    titulo: "Cuandro Canvas"
  }
];
function GaleTelaPlacard(params) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Tela Canvas | Impresión de Alta Definición" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("div", { className: "colorGr", children: [
      /* @__PURE__ */ jsx("h1", { className: "divCenter h1", children: "Tela Canvas" }),
      /* @__PURE__ */ jsx("h2", { className: "divCenter h4", children: "Nuestra galeria de los proyectos" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "galeria", children: GaleriaTelaCanvas.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "galeria-item", children: [
      /* @__PURE__ */ jsx("img", { src: item.img, alt: item.alt, className: "galeria-imagen", title: item.titulo }),
      /* @__PURE__ */ jsx("h3", { className: "galeria-titulo h3", children: /* @__PURE__ */ jsx("strong", { children: item.titulo }) })
    ] }, index)) }),
    /* @__PURE__ */ jsxs("div", { className: "form-div-duple", children: [
      /* @__PURE__ */ jsx("div", { className: "conImg", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: UsoGeneral.ImpresionDigitalGranformato, alt: "Impresion Digital en Gran Formato", title: "Impresion Digital en Gran Formato", loading: "lazy" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "conInfo", children: /* @__PURE__ */ jsx(Form, {}) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  GaleTelaPlacard as default
};
