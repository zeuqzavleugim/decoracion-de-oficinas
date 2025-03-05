import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Nav, U as UsoGeneral, F as Form, a as Footer } from "./UsoGeneral-Ddt5WNia.js";
import { S as SenaleticaSalidaEmergencia, a as SenalamientosNegocios, b as SenaleticaRutaEvacuacion, c as SenaleticaOficina } from "./Senaletica-oficina-ChKJ4Dvq.js";
import { S as SenaleticaInteriores } from "./Senaletica-interiores-knXxYuah.js";
import "react";
import "axios";
const GaleriaSenaleticaInterir = [
  {
    img: SenaleticaSalidaEmergencia,
    alt: "Senaletica Interior",
    titulo: "Creación de Señaletica Interior"
  },
  {
    img: SenalamientosNegocios,
    alt: "Senaletica Interior",
    titulo: "Preparación de Material"
  },
  {
    img: SenaleticaRutaEvacuacion,
    alt: "Senaletica Interior",
    titulo: "Preparación de Material para Señaletica"
  },
  {
    img: SenaleticaOficina,
    alt: "Senaletica Interior",
    titulo: "Señaletica Interior"
  },
  {
    img: SenaleticaInteriores,
    alt: "Senaletica Interior",
    titulo: "Señaleticas de Interiores Personalizados"
  }
];
function GaleSenaleticaExterior(params) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Señalética de Interiores | Funcionalidad" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("div", { className: "colorGr", children: [
      /* @__PURE__ */ jsx("h1", { className: "divCenter h1", children: "Señaletica de Interiores" }),
      /* @__PURE__ */ jsx("h2", { className: "divCenter h4", children: "Nuestra galeria de proyectos" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "galeria", children: GaleriaSenaleticaInterir.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "galeria-item", children: [
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
  GaleSenaleticaExterior as default
};
