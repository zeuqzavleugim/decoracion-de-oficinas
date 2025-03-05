import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { Head } from "@inertiajs/react";
import { N as Nav, U as UsoGeneral, F as Form, a as Footer } from "./UsoGeneral-Ddt5WNia.js";
import { I as ImpresionDigitalTela, P as PlacardTela, T as TelaImpresionDigital } from "./Tela-para-impresion-digital-DdYmiw6z.js";
import { T as TelaPlacard } from "./tela-placard-BOZ5g-SP.js";
import "react";
import "axios";
const GaleriaTelaPlacard = [
  {
    img: ImpresionDigitalTela,
    alt: "Placard en Tiendas",
    titulo: "Placard en Tiendas"
  },
  {
    img: PlacardTela,
    alt: "Publicidad",
    titulo: "Publicidad"
  },
  {
    img: TelaImpresionDigital,
    alt: "Anuncion",
    titulo: "Anuncion"
  },
  {
    img: TelaPlacard,
    alt: "Tiendas Departamentales",
    titulo: "Tiendas Departamentales"
  }
];
function GaleTelaPlacard(params) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Tela Placard | Impresión de Alta Calidad" }),
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsxs("div", { className: "colorGr", children: [
      /* @__PURE__ */ jsx("h1", { className: "divCenter h1", children: "Tela Placard" }),
      /* @__PURE__ */ jsx("h2", { className: "divCenter h4", children: "Nuestra galeria de los proyectos" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "galeria", children: GaleriaTelaPlacard.map((item, index) => /* @__PURE__ */ jsxs("div", { className: "galeria-item", children: [
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
