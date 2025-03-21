import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EscrituraCreativa() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
      {/* Background image with WHITE overlay applied directly in CSS */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.55)), url('/lectura.jpeg')",
          backgroundPosition: "center 40%",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Content section with black text */}
      <section className="relative py-16 md:py-24 md:h-[500px] flex items-center justify-center">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16 md:justify-between">
            {/* Text Content with black color */}
            <div className="z-10 space-y-6 md:w-1/2">
              <h1 className="text-4xl font-bold text-primary-foreground" style={{ textShadow: "1px 1px 2px rgba(255,255,255,0.5)" }}>
                Escritura Creativa
              </h1>
              <p
                className="max-w-md text-lg font-medium text-primary-foreground"
                style={{ textShadow: "1px 1px 2px rgba(255,255,255,0.5)" }}
              >
                Explora el mundo de la poesía y la escritura creativa a través de mis libros, talleres y contenido
                multimedia.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="shadow-lg bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="#poesia-ya">
                    Poesía Ya! <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-black shadow-lg text-primary-foreground hover:bg-black/10"
                  style={{ borderWidth: "2px" }}
                >
                  <Link href="#libros">Libros publicados</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-black shadow-lg text-primary-foreground hover:bg-black/10"
                  style={{ borderWidth: "2px" }}
                >
                  <Link href="#videopoemas">Videopoemas</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

      {/* Poesía Ya! Section */}
      <section id="poesia-ya" className="py-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="space-y-6 md:w-1/2">
              <h2>Poesía Ya!</h2>
              <p>
                El ciclo traza una cartografía poética latinoamericana. Una geografía transfeminista y coral que tiene a la palabra como acto fundante, originario, colectivo.
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center justify-center w-full overflow-hidden rounded-lg bg-muted">
                <iframe
                  style={{ borderRadius: "12px" }}
                  src="https://open.spotify.com/embed/show/4Fvk1dBCE7NF1KXABugJC4?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Libros Publicados Section */}
      <section id="libros" className="py-16 bg-muted">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Libros Publicados</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Book 1 */}
            <div className="flex flex-col h-full p-6 transition-shadow bg-white border rounded-lg shadow-sm border-border hover:shadow-md">
              <div className="aspect-[2/3] w-full mb-4 relative">
                <Image
                  src="/filovision.png?height=300&width=200"
                  alt="Portada del Al filo de la visión"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex-grow">
                <h3 className="mb-2 text-xl font-bold">Al filo de la visión</h3>
                <p className="mb-4 text-muted-foreground">
                  Este libro habla sobre las criaturas más bellas, raras, misteriosas del mundo: las aves. Pero no se acerca a ellas con la codicia del ornitólogo ni del cazador. Intenta entrar, con toda la delicadeza posible, en la vida de ciertos seres no humanos y escuchar lo que tienen para transmitir.
                </p>
              </div>
              <Button asChild className="w-full mt-auto">
                <a href="https://www.concretoeditorial.com.ar/productos/al-filo-de-la-vision-alex/" target="_blank" rel="noopener noreferrer">
                  Editorial Concreto (2023)
                </a>
              </Button>
            </div>

            {/* Book 2 */}
            <div className="flex flex-col h-full p-6 transition-shadow bg-white border rounded-lg shadow-sm border-border hover:shadow-md">
              <div className="aspect-[2/3] w-full mb-4 relative">
                <Image
                  src="/ceronatural.png?height=300&width=200"
                  alt="Portada de El cero es un número natural"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex-grow">
                <h3 className="mb-2 text-xl font-bold">El cero es un número natural</h3>
                <p className="mb-4 text-muted-foreground">
                  ¿Alguna vez te quedaste ciega?, pregunta uno de los versos de este libro. Es que ¿alguna vez te ubicaste en el afuera de la visión, cerraste los ojos y al abrirlo el mundo era otro? Casi como desconectarse de internet un mes y registrar el estado poético de los días. Encontrar las redes posibles, otras formas de mirar, palabras que arman luminosidades, reconstruyen la historia y rehacen el presente.
                </p>
              </div>
              <Button asChild className="w-full mt-auto">
                <a href="https://www.concretoeditorial.com.ar/productos/el-cero-es-un-numero-natural-alex/" target="_blank" rel="noopener noreferrer">
                  Editorial Concreto (2020)
                </a>
              </Button>
            </div>

            {/* Book 3 */}
            <div className="flex flex-col h-full p-6 transition-shadow bg-white border rounded-lg shadow-sm border-border hover:shadow-md">
              <div className="aspect-[2/3] w-full mb-4 relative">
                <Image
                  src="/nombre.jpeg?height=300&width=200"
                  alt="Portada de Justo antes de olvidar mi nombre"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex-grow">
                <h3 className="mb-2 text-xl font-bold">Justo antes de olvidar mi nombre</h3>
                <p className="mb-4 text-muted-foreground">
                  Este primer poemario es un ejercicio de pensarse y reconstruirse desde el afecto. Recorre las mujeres que en su vida la atravesaron.
                </p>
              </div>
              <Button asChild className="w-full mt-auto">
                <a href="https://www.elementodisruptivo.com.ar/ninxs-de-los-90/justo-antes-de-olvidar-mi-nombre-alex" target="_blank" rel="noopener noreferrer">
                  Editorial Elemento Disruptivo (2018)
                </a>
              </Button>
            </div>

            {/* Book 4 */}
            <div className="flex flex-col h-full p-6 transition-shadow bg-white border rounded-lg shadow-sm border-border hover:shadow-md">
              <div className="aspect-[2/3] w-full mb-4 relative">
                <Image
                  src="/poemaslesbianos.png?height=300&width=200"
                  alt="Portada de Alguien muerde el extremo de su nombre: poemas lesbianos de salida del clóset"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <div className="flex-grow">
                <h3 className="mb-2 text-xl font-bold">Alguien muerde el extremo de su nombre: poemas lesbianos de salida del clóset</h3>
                <p className="mb-4 text-muted-foreground">
                  Una antología de poemas de salida del clóset lesbianos donde les escritores mencionan su identidad lesbiana por primera vez. Se trata de un libro conformado con poemas de 39 poetas de todo el país que recopila vivencias y echa luz sobre ellas desde el espacio poético.
                </p>
              </div>
              <Button asChild className="w-full mt-auto">
                <a href="https://www.elementodisruptivo.com.ar/zona-temporalmente-autonoma/alguien-muerde-el-extremo-de-su-nombre-poemas-lesbianos-de-salida-del-closet" target="_blank" rel="noopener noreferrer">
                  Editorial Elemento Disruptivo
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Videopoemas Section */}
      <section id="videopoemas" className="py-16">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Videopoemas</h2>
          </div>

          <div className="space-y-12">
            {/* Instagram Videos */}
            <div>
              <div className="grid gap-8 md:grid-cols-3">
                {/* Instagram Video 1 */}
                <div className="flex flex-col items-center w-full overflow-hidden rounded-lg aspect-[9/16] bg-muted">
                  <blockquote
                    className="w-full h-full instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/reel/DF8YhJLoB0a/?utm_source=ig_embed&amp;utm_campaign=loading"
                    data-instgrm-version="14"
                  ></blockquote>
                </div>

                {/* Instagram Video 2 */}
                <div className="flex flex-col items-center w-full overflow-hidden rounded-lg aspect-[9/16] bg-muted">
                  <blockquote
                    className="w-full h-full instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/reel/C4NlmZRNc-O/?utm_source=ig_embed&amp;utm_campaign=loading"
                    data-instgrm-version="14"
                  ></blockquote>
                </div>

                {/* Instagram Video 3 */}
                <div className="flex flex-col items-center w-full overflow-hidden rounded-lg aspect-[9/16] bg-muted">
                  <blockquote
                    className="w-full h-full instagram-media"
                    data-instgrm-permalink="https://www.instagram.com/tv/CF-2443gvIW/?utm_source=ig_embed&amp;utm_campaign=loading"
                    data-instgrm-version="14"
                  ></blockquote>
                </div>
              </div>
            </div>

            {/* YouTube Videos */}
            <div>
              <div className="grid gap-8 md:grid-cols-2">
                {/* YouTube Video 1 */}
                <div className="relative w-full overflow-hidden rounded-lg aspect-video bg-muted">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/GTlpJT1f3mc?si=P3hBO1DRcsE40BEL"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* YouTube Video 2 */}
                <div className="relative w-full overflow-hidden rounded-lg aspect-video bg-muted">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/WwajV16Hy1M?si=iulgHrn2td4mw4pK"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* YouTube Video 3 */}
                <div className="relative w-full overflow-hidden rounded-lg aspect-video bg-muted">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/GDbSP7EqDUc?si=TCN66clK0CUOUvkW"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* YouTube Video 4 */}
                <div className="relative w-full overflow-hidden rounded-lg aspect-video bg-muted">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/ruzSKOzeYfc?si=585wNTuR5RseiayQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram Embed Script (Only Include Once) */}
        <script async src="https://www.instagram.com/embed.js"></script>
        <script>
          {`window.instgrm && window.instgrm.Embeds.process();`}
        </script>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-accent-foreground">¿Te interesa la escritura creativa?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-accent-foreground/90">
            Suscríbete a mi newsletter para recibir ejercicios de escritura, recomendaciones de lecturas y noticias
            sobre mis próximos libros y talleres.
          </p>
          <Button asChild className="bg-white text-accent-foreground hover:bg-white/90">
            <Link href="/newsletter">
              Sumate al Newsletter <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

