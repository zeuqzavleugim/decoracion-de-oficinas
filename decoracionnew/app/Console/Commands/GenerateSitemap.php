<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\URL as FacadesURL;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;


class GenerateSitemap extends Command
{
    // protected $signature = 'app:generate-sitemap';
    protected $signature = 'sitemap:generate';
    protected $description = 'Generate the sitemap.xml';

    // protected $description = 'Command description';

    public function __construct()
    {
        parent::__construct();
    }
    /**
     * Execute the console command.
     */
    public function handle()
    {
        Sitemap::create()
            ->add(Url::create('/')->setPriority(1.0))
            ->add(URL::create('/servicios-en-creatividad-y-diseno-grafico')->setPriority(0.8))
            ->add(Url::create('/impresion-de-fotografia-en-alta-resolucion')->setPriority(0.8))
            ->add(Url::create('/instalacion-de-vinil-y-materiales-decorativos-para-empresas')->setPriority(0.8))
            ->add(Url::create('/recorte-de-vinil-para-empresas')->setPriority(0.8))
            ->add(Url::create('/decoracion-con-vinil')->setPriority(0.8))
            ->add(Url::create('/material-pop-para-empresas')->setPriority(0.8))
            ->add(Url::create('/contacto')->setPriority(0.8))
            ->add(Url::create('/blog')->setPriority(0.8))
            ->add(Url::create('/creacion-de-contenido')->setPriority(0.7))
            ->add(Url::create('/diseno-de-logotipos')->setPriority(0.7))
            ->add(Url::create('/creacion-de-renders')->setPriority(0.7))
            ->add(Url::create('/montaje-edicion-de-fotos')->setPriority(0.7))
            ->add(Url::create('/vinil-adhesivo')->setPriority(0.7))
            ->add(Url::create('/papel-fotografico')->setPriority(0.7))
            ->add(Url::create('/tela-placard')->setPriority(0.7))
            ->add(Url::create('/impresion-de-cuadros-en-canvas')->setPriority(0.7))
            ->add(Url::create('/recorte-de-vinil-rotulacion')->setPriority(0.7))
            ->add(Url::create('/recorte-vinil-textil')->setPriority(0.7))
            ->add(Url::create('/impresion-etiquetas')->setPriority(0.7))
            ->add(Url::create('/rotulacion-vehiculos')->setPriority(0.7))
            ->add(Url::create('/senaletica-exteriores')->setPriority(0.7))
            ->add(Url::create('/senaletica-interiores')->setPriority(0.7))
            ->add(Url::create('/vinil-microperforado')->setPriority(0.7))
            ->add(Url::create('/wall-fabric')->setPriority(0.7))
            ->add(Url::create('/vinil-translucido')->setPriority(0.7))
            ->add(Url::create('/vinil-esmerilado')->setPriority(0.7))
            ->add(Url::create('/vinil-electrostatico')->setPriority(0.7))
            ->add(Url::create('/pizarrones-personalizados')->setPriority(0.7))
            ->add(Url::create('/vinil-floor-graphic')->setPriority(0.7))
            ->add(Url::create('/acabados-arquitectonicos')->setPriority(0.7))
            ->add(Url::create('/vinil-polarizado')->setPriority(0.7))
            ->add(Url::create('/vinil-metalizado')->setPriority(0.7))
            ->add(Url::create('/electrostaticos')->setPriority(0.7))
            ->add(Url::create('/posters')->setPriority(0.7))
            ->add(Url::create('/tentcard')->setPriority(0.7))
            ->add(Url::create('/politicas-de-privacidad')->setPriority(0.7))
            ->add(Url::create('/terminos-y-condiciones')->setPriority(0.7))
            ->add(Url::create('/preguntas-frecuentes')->setPriority(0.7))
            ->add(Url::create('/blog/estrategias-branding-impresion-vinil-hoteles-restaurantes')->setPriority(0.7))
            ->add(Url::create('/blog/optimizacion-imagen-corporativa-oficinas-vinil')->setPriority(0.7))
            ->add(Url::create('/blog/vinil-alta-resolucion-experiencia-cliente-restaurantes')->setPriority(0.7))
            ->add(Url::create('/blog/poder-vinil-branding-corporativo')->setPriority(0.7))
            ->add(Url::create('/blog/que-es-material-pop')->setPriority(0.7))
            ->writeToFile(public_path('sitemap.xml'));

        $this->info('Sitemap has been generated!');
    }
}
