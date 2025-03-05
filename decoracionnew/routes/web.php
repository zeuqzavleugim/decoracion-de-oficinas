<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () { return Inertia::render('Home'); })->name('home');
Route::get('/servicios-en-creatividad-y-diseno-grafico', function () { return Inertia::render('CreatividadDisenoGrafico'); })->name('servicio1');
Route::get('/impresion-de-fotografia-en-alta-resolucion', function () { return Inertia::render('ImpresionGranFormato'); })->name('servicio2');
Route::get('/instalacion-de-vinil-y-materiales-decorativos-para-empresas', function () { return Inertia::render('InstalacionVinilMaterial'); })->name('servicio3');
Route::get('/recorte-de-vinil-para-empresas', function () { return Inertia::render('RecorteVinil'); })->name('servicio4');
Route::get('/decoracion-con-vinil', function () { return Inertia::render('DecoracionVinil'); })->name('servicio5');
Route::get('/material-pop-para-empresas', function () { return Inertia::render('MaterialPop'); })->name('servicio6');
Route::get('/contacto', function () { return Inertia::render('Contacto'); })->name('servicioContacto');
Route::get('/blog', function () { return Inertia::render('Blogs'); })->name('servicioBlogs');

// Galerias
Route::get('/creacion-de-contenido', function () { return Inertia::render('galerias/GaleCreacionContenido'); })->name('galeriaCreacionContenido');
Route::get('/diseno-de-logotipos', function () { return Inertia::render('galerias/GaleDisenoLogos'); })->name('galeriaDisenoLogos');
Route::get('/creacion-de-renders', function () { return Inertia::render('galerias/GaleCreacionRenders'); })->name('galeriaCreacionRenders');
Route::get('/montaje-edicion-de-fotos', function () { return Inertia::render('galerias/GaleMontajeEdicionFotos'); })->name('galeriaMontajeEdicionFotos');
Route::get('/vinil-adhesivo', function () { return Inertia::render('galerias/GaleVinilAdhesivo'); })->name('galeriaVinilAdhesivo');
Route::get('/papel-fotografico', function () { return Inertia::render('galerias/GalePapelFotografico'); })->name('galeriaPapelFotografico');
Route::get('/tela-placard', function () { return Inertia::render('galerias/GaleTelaPlacard'); })->name('galeriaTelaPlacard');
Route::get('/impresion-de-cuadros-en-canvas', function () { return Inertia::render('galerias/GaleTelaCanvas'); })->name('galeriaTelaCanvas');
Route::get('/recorte-de-vinil-rotulacion', function () { return Inertia::render('galerias/GaleRecorteVinil'); })->name('galeriaRotulacionVinil');
Route::get('/recorte-vinil-textil', function () { return Inertia::render('galerias/GaleRecorteVinilTextil'); })->name('galeriaRecorteVinilTextirl');
Route::get('/impresion-etiquetas', function () { return Inertia::render('galerias/GaleImpresionEtiquetas'); })->name('galeriaImpresionEtiquetas');
Route::get('/rotulacion-vehiculos', function () { return Inertia::render('galerias/GaleRotulacionVehiculos'); })->name('galeriaRotulacionVehiculos');
Route::get('/senaletica-exteriores', function () { return Inertia::render('galerias/GaleSenaleticaExterior'); })->name('galeriaSenaleticaExterior');
Route::get('/senaletica-interiores', function () { return Inertia::render('galerias/GaleSenaleticaInterior'); })->name('galeriaSenaleticaInterior');
Route::get('/vinil-microperforado', function () { return Inertia::render('galerias/GaleMicroperforado'); })->name('galeriaMicroperforado');
Route::get('/wall-fabric', function () { return Inertia::render('galerias/GaleWallfabric'); })->name('galeriaWallfabric');
Route::get('/vinil-translucido', function () { return Inertia::render('galerias/GaleTranslucido'); })->name('galeriaTranlucido');
Route::get('/vinil-esmerilado', function () { return Inertia::render('galerias/GaleEsmerilado'); })->name('galeriaEsmerilado');
Route::get('/vinil-electrostatico', function () { return Inertia::render('galerias/GaleElectrostatico'); })->name('galeriaElestrostatico');
Route::get('/pizarrones-personalizados', function () { return Inertia::render('galerias/GalePizarrones'); })->name('galeriaPizarrones');
Route::get('/vinil-floor-graphic', function () { return Inertia::render('galerias/GaleFloorGrafic'); })->name('galeriaFloor');
Route::get('/acabados-arquitectonicos', function () { return Inertia::render('galerias/GaleAcabadosArqui'); })->name('galeriaArquitec');
Route::get('/vinil-polarizado', function () { return Inertia::render('galerias/GalePolarizado'); })->name('galeriaPolarizado');
Route::get('/vinil-metalizado', function () { return Inertia::render('galerias/GaleMetalizado'); })->name('galeriaMetalizado');
Route::get('/electrostaticos', function () { return Inertia::render('galerias/GaleElectro'); })->name('galeriaElectro');
Route::get('/posters', function () { return Inertia::render('galerias/GalePoster'); })->name('galeriaPoster');
Route::get('/tentcard', function () { return Inertia::render('galerias/GaleTendCard'); })->name('galeriaTentCard');

Route::get('/politicas-de-privacidad', function () { return Inertia::render('Privacidad'); })->name('politicas');
Route::get('/terminos-y-condiciones', function () { return Inertia::render('Terminos'); })->name('terminos');
Route::get('/preguntas-frecuentes', function () { return Inertia::render('PregFrecuentes'); })->name('PregFrecuentes');

Route::get('/blog/estrategias-branding-impresion-vinil-hoteles-restaurantes', function () { return Inertia::render('Blogs/EstrategiasBranding'); })->name('EstrategiasBranding');
Route::get('/blog/optimizacion-imagen-corporativa-oficinas-vinil', function () { return Inertia::render('Blogs/OptimizacionImagenCorporativa'); })->name('ImagenCorporativa');
Route::get('/blog/vinil-alta-resolucion-experiencia-cliente-restaurantes', function () { return Inertia::render('Blogs/TransformarExperienciaCliente'); })->name('TransformarExperiencia');
Route::get('/blog/poder-vinil-branding-corporativo', function () { return Inertia::render('Blogs/PoderVinilAltaResolucion'); })->name('PoderVinilAltaResolucion');
Route::get('/blog/que-es-material-pop', function () { return Inertia::render('Blogs/QueESMaterialPop'); })->name('QueEsMaterialPop');
Route::get('/blog/por-que-es-importante-un-logotipo-para-las-empresas', function () { return Inertia::render('Blogs/LogotipoParaEmpresas'); })->name('LogotipoParaEmpresas');

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

require __DIR__.'/auth.php';
