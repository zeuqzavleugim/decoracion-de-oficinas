import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Nav, U as UsoGeneral, F as Form, a as Footer } from "./UsoGeneral-Ddt5WNia.js";
import { V as VinilAdhesivo, I as Instalaci_nVinil, a as VinilFotografico } from "./vinil-fotografico-B1p6gkiJ.js";
import { I as ImpresionVinilAdherible, V as VinilesAdheribles, a as VinilesAutoadheribles, b as ViniloAdhesivo, c as VinilosDecorativos, d as VinilosParaPared, e as VinilAdhesivoo } from "./Vinil-adhesivo-CvkzWk9s.js";
import { V as VinilAdherible } from "./Vinil-adherible-DZ7BYrKJ.js";
import "react";
import "axios";
const GaleriaVinilAdhesivo = [
  {
    img: VinilAdhesivo,
    alt: "Vinil Adhesivo",
    titulo: "Vinil Adhesivo en Pared"
  },
  {
    img: ImpresionVinilAdherible,
    alt: "Montaje de Vinil Adhesivo",
    titulo: "Montaje de Vinil Adhesivo"
  },
  {
    img: VinilesAdheribles,
    alt: "Montaje de Vinil Adherible",
    titulo: "Vinil Adherible"
  },
  {
    img: VinilesAutoadheribles,
    alt: "Montaje de Vinil Auto Adherible",
    titulo: "Montaje de Vinil Auto Adherible"
  },
  {
    img: VinilAdherible,
    alt: "Montaje de Vinil Adherible",
    titulo: "Creacion de Vinil Adherible"
  },
  {
    img: Instalaci_nVinil,
    alt: "Montaje de Vinil Adherible",
    titulo: "Instalacion de Vinil Adherible"
  },
  {
    img: ViniloAdhesivo,
    alt: "Montaje de Vinil Adherible",
    titulo: "Creación de Vinil"
  },
  {
    img: VinilosDecorativos,
    alt: "Montaje de Vinil Adherible",
    titulo: "Vinil pra anuncios"
  },
  {
    img: VinilosParaPared,
    alt: "Montaje de Vinil Adherible",
    titulo: "Vinil Proximamente"
  },
  {
    img: VinilAdhesivoo,
    alt: "Montaje de Vinil Adherible",
    titulo: "Vinil en Tiendas"
  },
  {
    img: VinilFotografico,
    alt: "Montaje de Vinil Adherible",
    titulo: "Vinil Decorativo"
  }
];
function GaleVinilAdhesivo(params) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Vinil Adhesivo | Soluciones Personalizadas" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("div", { className: "colorGr", children: [
      /* @__PURE__ */ jsx("h1", { className: "divCenter h1", children: "Vinil Adhesivo" }),
      /* @__PURE__ */ jsx("h2", { className: "divCenter h4", children: "Nuestra galeria de los proyectos" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "galeria", children: GaleriaVinilAdhesivo.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "galeria-item", children: [
      /* @__PURE__ */ jsx("img", { src: item.img, alt: item.alt, className: "galeria-imagen", title: item.titulo }),
      /* @__PURE__ */ jsx("h3", { className: "galeria-titulo h3", children: /* @__PURE__ */ jsx("strong", { children: item.titulo }) })
    ] }, index)) }),
    /* @__PURE__ */ jsxs("div", { className: "form-div-duple", children: [
      /* @__PURE__ */ jsx("div", { className: "conImg", children: /* @__PURE__ */ jsx("picture", { children: /* @__PURE__ */ jsx("img", { src: UsoGeneral.ImpresionDigitalGranformato, alt: "Creatividad y Diseno Grafico", title: "Creatividad y Diseno Grafico", loading: "lazy" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "conInfo", children: /* @__PURE__ */ jsx(Form, {}) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  GaleVinilAdhesivo as default
};
