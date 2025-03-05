import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Nav, U as UsoGeneral, F as Form, a as Footer } from "./UsoGeneral-Ddt5WNia.js";
import { C as CreadorLogos, D as Dise_oLogotipos, l as logotipos, M as MDTECH } from "./MD-TECH-Imagen-de-pop-decoracion-de-negocios-CDoboPqA.js";
import "react";
import "axios";
const GaleriaDisenoLogos = [
  {
    img: CreadorLogos,
    alt: "Logotipo ESSD",
    titulo: "Logotipo de ESSD"
  },
  {
    img: Dise_oLogotipos,
    alt: "Logotipo Vinkulate",
    titulo: "Logotipo de Vinkulate"
  },
  {
    img: logotipos,
    alt: "Logotipo olife",
    titulo: "Logotipo de OLIFE"
  },
  {
    img: MDTECH,
    alt: "Logotipo MD TECH",
    titulo: "Logotipo MD Tech"
  }
];
function GaleDisenoLogos(params) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Diseño de Logotipos | BrandingPersonalizado" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("div", { className: "colorGr", children: [
      /* @__PURE__ */ jsx("h1", { className: "divCenter h1", children: "Diseño de Logos" }),
      /* @__PURE__ */ jsx("h2", { className: "divCenter h4", children: "Nuestra galeria de los proyectos" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "galeria", children: GaleriaDisenoLogos.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "galeria-item", children: [
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
  GaleDisenoLogos as default
};
