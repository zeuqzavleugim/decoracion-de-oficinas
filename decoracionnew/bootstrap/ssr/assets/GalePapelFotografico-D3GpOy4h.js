import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Nav, U as UsoGeneral, F as Form, a as Footer } from "./UsoGeneral-Ddt5WNia.js";
import { P as PapelFotogr_fico } from "./vinil-fotográfico-BT3fIy3f.js";
import { I as Impresi_nPapelFotografico, a as Impresi_nPapelFotograficoColocacion, b as ImpresionFotograficaListo } from "./Impresion-fotografica-CZjg6UP3.js";
import { V as VinilMicroperforado } from "./vinil-microperforado1-B7UrUcQY.js";
import "react";
import "axios";
const GaleriaPapelFotografico = [
  {
    img: PapelFotogr_fico,
    alt: "Papel Fotografico",
    titulo: "Cuadro en Papel Fotografico"
  },
  {
    img: Impresi_nPapelFotografico,
    alt: "Impresion Fotografico",
    titulo: "Impresion en Papel Fotografico"
  },
  {
    img: Impresi_nPapelFotograficoColocacion,
    alt: "Colocacion de Papel Fotografico",
    titulo: "Colocacion de Papel Fotografico"
  },
  {
    img: ImpresionFotograficaListo,
    alt: "Colocacion y Montaje",
    titulo: "Colocacion y Montaje"
  },
  {
    img: VinilMicroperforado,
    alt: "Colocacion y Montaje",
    titulo: "Colocacion de Micro Perforado"
  }
];
function GalePapelFotografico(params) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Papel Fotográfico | Impresión de A. R." }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("div", { className: "colorGr", children: [
      /* @__PURE__ */ jsx("h1", { className: "divCenter h1", children: "Papel Fotografico" }),
      /* @__PURE__ */ jsx("h2", { className: "divCenter h4", children: "Nuestra galeria de los proyectos" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "galeria", children: GaleriaPapelFotografico.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "galeria-item", children: [
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
  GalePapelFotografico as default
};
