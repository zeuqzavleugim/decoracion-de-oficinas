import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Nav, U as UsoGeneral, F as Form, a as Footer } from "./UsoGeneral-Ddt5WNia.js";
import { R as RotularCoche, a as RotulosParaCarros } from "./Rotulos-para-carros-Cl3mHd5K.js";
import { R as RotulacionVeh_culos } from "./Rotulacion-de-vehículos-zhhmqGNJ.js";
import "react";
import "axios";
const GaleriaRotulacionVehiculos = [
  {
    img: RotulacionVeh_culos,
    alt: "Rotulacion en vehiculos",
    titulo: "Rotulacion de Vehiculos"
  },
  {
    img: RotularCoche,
    alt: "Rotulacion en vehiculos",
    titulo: "Vinil Para Vehiculo"
  },
  {
    img: RotulosParaCarros,
    alt: "Rotulacion en vehiculos",
    titulo: 'Rotulacion "DANONE"'
  }
];
function GaleRotulacionVehiculos(params) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Personalización y Publicidad Móvil" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("div", { className: "colorGr", children: [
      /* @__PURE__ */ jsx("h1", { className: "divCenter h1", children: "Rotulación de Vehículos Personalizado" }),
      /* @__PURE__ */ jsx("h2", { className: "divCenter h4", children: "Nuestra galeria de proyectos" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "galeria", children: GaleriaRotulacionVehiculos.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "galeria-item", children: [
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
  GaleRotulacionVehiculos as default
};
