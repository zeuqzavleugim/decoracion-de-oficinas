import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Nav, U as UsoGeneral, F as Form, a as Footer } from "./UsoGeneral-Ddt5WNia.js";
import { R as RecorteVinil, C as CorteVinil, V as VinilRecorte } from "./Vinil-de-recorte-DU0LWZcb.js";
import { V as VinilAdherible } from "./Vinil-adherible-DZ7BYrKJ.js";
import "react";
import "axios";
const CorteVinill = "/build/assets/Corte-vinil-hCOnUP4h.webp";
const GaleriaRotulacionVinil = [
  {
    img: RecorteVinil,
    alt: "Montaje de Recorte de Vinil",
    titulo: "Recorte de Vinil"
  },
  {
    img: CorteVinil,
    alt: "Montaje de Vinil Adherible",
    titulo: "Corte de Vinil"
  },
  {
    img: VinilRecorte,
    alt: "Montaje de Vinil Adherible",
    titulo: "Vinil para Rotulacion"
  },
  {
    img: CorteVinill,
    alt: "Montaje de Vinil Adherible",
    titulo: "Vinil Rotulado para oficinas"
  },
  {
    img: VinilAdherible,
    alt: "Montaje de Vinil Adherible",
    titulo: "Creacion de Vinil Adherible"
  }
];
function GaleRecorteVinil(params) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Recorte de Vinil y Rotulación | Proyectos" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("div", { className: "colorGr", children: [
      /* @__PURE__ */ jsx("h1", { className: "divCenter h1", children: "Recorte de Vinil y Rotulación" }),
      /* @__PURE__ */ jsx("h2", { className: "divCenter h4", children: "Nuestra galeria de los proyectos" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "galeria", children: GaleriaRotulacionVinil.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "galeria-item", children: [
      /* @__PURE__ */ jsx("img", { src: item.img, alt: item.alt, className: "galeria-imagen", title: item.titulo }),
      /* @__PURE__ */ jsx("h3", { className: "galeria-titulo h3", children: /* @__PURE__ */ jsx("strong", { children: item.titulo }) })
    ] }, index)) }),
    /* @__PURE__ */ jsxs("div", { className: "form-div-duple", children: [
      /* @__PURE__ */ jsx("div", { className: "conImg", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: UsoGeneral.Recortedevinil, alt: "Creatividad y Diseno Grafico", title: "Creatividad y Diseno Grafico", loading: "lazy" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "conInfo", children: /* @__PURE__ */ jsx(Form, {}) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  GaleRecorteVinil as default
};
