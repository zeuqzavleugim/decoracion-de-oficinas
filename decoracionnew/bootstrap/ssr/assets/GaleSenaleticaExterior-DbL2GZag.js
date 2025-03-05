import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Nav, U as UsoGeneral, F as Form, a as Footer } from "./UsoGeneral-Ddt5WNia.js";
import { S as SalidaEmergenciaSenal, a as SenaleticaSeguridad, b as SenalizacionEmergencia } from "./Senalizacion-de-emergencia-BY6C8bNp.js";
import { S as SenaleticaExteriores } from "./Senaletica-exteriores-BeNWSErm.js";
import "react";
import "axios";
const GaleriaSenaleticaExterior = [
  {
    img: SenaleticaExteriores,
    alt: "Senaletica de Exteriores",
    titulo: "Señaletica de Exteriores"
  },
  {
    img: SalidaEmergenciaSenal,
    alt: "Senaletica de Exteriores",
    titulo: "Creación de señaletica"
  },
  {
    img: SenaleticaSeguridad,
    alt: "Senaletica de Exteriores",
    titulo: "Señaletica de Exteriores"
  },
  {
    img: SenalizacionEmergencia,
    alt: "Senaletica de Exteriores",
    titulo: "Señaletica de Exteriores"
  }
];
function GaleSenaleticaExterior(params) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Señalética |Soluciones Visibles y Duraderas" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("div", { className: "colorGr", children: [
      /* @__PURE__ */ jsx("h1", { className: "divCenter h1", children: "Señaletica de Exteriores" }),
      /* @__PURE__ */ jsx("h2", { className: "divCenter h4", children: "Nuestra galeria de proyectos" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "galeria", children: GaleriaSenaleticaExterior.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "galeria-item", children: [
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
