import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Nav, U as UsoGeneral, F as Form, a as Footer } from "./UsoGeneral-Ddt5WNia.js";
import { I as ImpresionStickers, a as ImpresionEtiquetasAdhesivas, b as ImpresionEtiquetas } from "./Impresion-de-etiquetas-Bgk3Tl_s.js";
import { I as ImprimirEtiquetas } from "./Imprimir-etiquetas-C5PJrSG5.js";
import "react";
import "axios";
const GaleriaImpresionEtiquetas = [
  {
    img: ImprimirEtiquetas,
    alt: "Impresion de Etiquetas",
    titulo: "Impresion de etiquetas Circulares"
  },
  {
    img: ImpresionStickers,
    alt: "Impresion de Etiquetas",
    titulo: "Etiquetas Tutsi POP"
  },
  {
    img: ImpresionEtiquetasAdhesivas,
    alt: "Impresion de Etiquetas",
    titulo: "Etiquetas Jalate ALVentura"
  },
  {
    img: ImpresionEtiquetas,
    alt: "Impresion de Etiquetas",
    titulo: "Etiquetas 100% Personalizadas"
  }
];
function GaleImpresionEtiquetas(params) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Etiquetas Personalizadas para Empresas" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("div", { className: "colorGr", children: [
      /* @__PURE__ */ jsx("h1", { className: "divCenter h1", children: "Impresion de etiquetas Personalizadas" }),
      /* @__PURE__ */ jsx("h2", { className: "divCenter h4", children: "Nuestra galeria de proyectos" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "galeria", children: GaleriaImpresionEtiquetas.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "galeria-item", children: [
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
  GaleImpresionEtiquetas as default
};
