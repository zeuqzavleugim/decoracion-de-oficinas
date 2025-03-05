import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Nav, U as UsoGeneral, F as Form, a as Footer } from "./UsoGeneral-Ddt5WNia.js";
import { C as CorteVinilTextil, a as CorteTextilVinil, b as CorteViniloTextil } from "./Corte-vinilotextil-D13ceVz2.js";
import { R as RecorteVinilTextil } from "./Recorte-de-vinil-textil-DhU0P2Uu.js";
import "react";
import "axios";
const GaleriaRecorteVinilTextil = [
  {
    img: RecorteVinilTextil,
    alt: "Recorte de Vinil Textil",
    titulo: "Playera IPADE"
  },
  {
    img: CorteVinilTextil,
    alt: "Recorte de Vinil Textil",
    titulo: "Corte de Vinil para Textil"
  },
  {
    img: CorteTextilVinil,
    alt: "Recorte de Vinil Textil",
    titulo: "Recorte de vinil"
  },
  {
    img: CorteViniloTextil,
    alt: "Recorte de Vinil Textil",
    titulo: "Playera MEXICO"
  }
];
function GaleRecorteVinilTextil(params) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Personalización de Ropa y Textiles" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("div", { className: "colorGr", children: [
      /* @__PURE__ */ jsx("h1", { className: "divCenter h1", children: "Recorte de Vinil Textil" }),
      /* @__PURE__ */ jsx("h2", { className: "divCenter h4", children: "Nuestra galeria de los proyectos" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "galeria", children: GaleriaRecorteVinilTextil.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "galeria-item", children: [
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
  GaleRecorteVinilTextil as default
};
