import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function EscrituraCreativa() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-accent md:py-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
            <div className="space-y-6 md:w-1/2">
              <h1 className="text-accent-foreground">Escritura Creativa</h1>
              <p className="max-w-md text-lg text-accent-foreground/90">
                Explora el mundo de la poesía y la escritura creativa a través de mis libros, talleres y contenido
                multimedia.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="#poesia-ya">
                    Poesía Ya! <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-accent-foreground/20 text-accent-foreground">
                  <Link href="#libros">Libros publicados</Link>
                </Button>
                <Button asChild variant="outline" className="border-accent-foreground/20 text-accent-foreground">
                  <Link href="#videopoemas">Videopoemas</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:w-1/2">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Ilustración de escritura creativa"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Poesía Ya! Section */}
      <section id="poesia-ya" className="py-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="space-y-6 md:w-1/2">
              <h2>Poesía Ya!</h2>
              <p>
                El ciclo traza una cartografía poética latinoamericana. Una geografía transfeminista y coral que tiene a la palabra como acto fundante, originario, colectivo.
              </p>
              <p>
                Conduce: Alex Zani
              </p>
            </div>
            <div className="md:w-1/2">
              <div className="aspect-[4/3] w-full bg-muted rounded-lg overflow-hidden">
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
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Explora mis obras publicadas y adquiérelas directamente en las editoriales.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Book 1 */}
            <div className="p-6 transition-shadow bg-white border rounded-lg shadow-sm border-border hover:shadow-md">
              <div className="aspect-[2/3] w-full mb-4 relative">
                <Image
                  src="/placeholder.svg?height=300&width=200"
                  alt="Portada del libro 1"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">Al filo de la visión</h3>
              <p className="mb-4 text-muted-foreground">
                Breve descripción del libro, su temática y estilo. Publicado por Editorial X en 2022.
              </p>
              <Button asChild className="w-full">
                <a href="https://www.concretoeditorial.com.ar/productos/al-filo-de-la-vision-alex/" target="_blank" rel="noopener noreferrer">
                  Editorial Concreto (2023)
                </a>
              </Button>
            </div>

            {/* Book 2 */}
            <div className="p-6 transition-shadow bg-white border rounded-lg shadow-sm border-border hover:shadow-md">
              <div className="aspect-[2/3] w-full mb-4 relative">
                <Image
                  src="/placeholder.svg?height=300&width=200"
                  alt="Portada del libro 2"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">El cero es un número natural</h3>
              <p className="mb-4 text-muted-foreground">
                Breve descripción del libro, su temática y estilo. Publicado por Editorial Y en 2021.
              </p>
              <Button asChild className="w-full">
                <a href="https://www.concretoeditorial.com.ar/productos/el-cero-es-un-numero-natural-alex/ " target="_blank" rel="noopener noreferrer">
                  Editorial Concreto (2020)
                </a>
              </Button>
            </div>

            {/* Book 3 */}
            <div className="p-6 transition-shadow bg-white border rounded-lg shadow-sm border-border hover:shadow-md">
              <div className="aspect-[2/3] w-full mb-4 relative">
                <Image
                  src="/placeholder.svg?height=300&width=200"
                  alt="Portada del libro 3"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">Justo antes de olvidar mi nombre</h3>
              <p className="mb-4 text-muted-foreground">
                Breve descripción del libro, su temática y estilo. Publicado por Editorial Z en 2020.
              </p>
              <Button asChild className="w-full">
                <a href="https://www.elementodisruptivo.com.ar/ninxs-de-los-90/justo-antes-de-olvidar-mi-nombre-alex" target="_blank" rel="noopener noreferrer">
                  Editorial Elemento Disruptivo (2018)
                </a>
              </Button>
            </div>

            {/* Book 4 */}
            <div className="p-6 transition-shadow bg-white border rounded-lg shadow-sm border-border hover:shadow-md">
              <div className="aspect-[2/3] w-full mb-4 relative">
                <Image
                  src="/placeholder.svg?height=300&width=200"
                  alt="Portada del libro 4"
                  fill
                  className="object-cover rounded-md"
                />
              </div>
              <h3 className="mb-2 text-xl font-bold">Alguien muerde el extremo de su nombre: poemas lesbianos de salida del clóset</h3>
              <p className="mb-4 text-muted-foreground">
                Breve descripción del libro, su temática y estilo. Publicado por Editorial W en 2019.
              </p>
              <Button asChild className="w-full">
                <a href="https://www.elementodisruptivo.com.ar/zona-temporalmente-autonoma/alguien-muerde-el-extremo-de-su-nombre-poemas-lesbianos-de-salida-del-closet " target="_blank" rel="noopener noreferrer">
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
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Explora la poesía en formato audiovisual a través de mis videopoemas publicados en Instagram y YouTube.
            </p>
          </div>

          <div className="space-y-12">
            {/* Instagram Videos */}
            <div>
              <div className="grid gap-8 md:grid-cols-3">
                {/* Instagram Video 1 */}
                <div className="w-full overflow-hidden rounded-lg aspect-square bg-muted">
                  <div>
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink="https://www.instagram.com/reel/DF8YhJLoB0a/?utm_source=ig_embed&amp;utm_campaign=loading"
                      data-instgrm-version="14"
                      style={{
                        background: "#FFF",
                        border: "0",
                        borderRadius: "3px",
                        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                        margin: "1px",
                        maxWidth: "540px",
                        minWidth: "326px",
                        padding: "0",
                        width: "99.375%",
                      }}
                    ></blockquote>
                    <script async src="https://www.instagram.com/embed.js"></script>
                  </div>
                </div>

                {/* Instagram Video 2 */}
                <div className="w-full overflow-hidden rounded-lg aspect-square bg-muted">
                  <div>
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink="https://www.instagram.com/reel/C4NlmZRNc-O/?utm_source=ig_embed&amp;utm_campaign=loading"
                      data-instgrm-version="14"
                      style={{
                        background: "#FFF",
                        border: "0",
                        borderRadius: "3px",
                        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                        margin: "1px",
                        maxWidth: "540px",
                        minWidth: "326px",
                        padding: "0",
                        width: "99.375%",
                      }}
                    ></blockquote>
                    <script async src="https://www.instagram.com/embed.js"></script>
                  </div>
                </div>

                {/* Instagram Video 3 */}
                <div className="w-full overflow-hidden rounded-lg aspect-square bg-muted">
                  <div>
                    <blockquote
                      className="instagram-media"
                      data-instgrm-permalink="https://www.instagram.com/tv/CF-2443gvIW/?utm_source=ig_embed&amp;utm_campaign=loading"
                      data-instgrm-version="14"
                      style={{
                        background: "#FFF",
                        border: "0",
                        borderRadius: "3px",
                        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                        margin: "1px",
                        maxWidth: "540px",
                        minWidth: "326px",
                        padding: "0",
                        width: "99.375%",
                      }}
                    ></blockquote>
                    <script async src="https://www.instagram.com/embed.js"></script>
                  </div>
                </div>
              </div>
            </div>

            {/* YouTube Videos */}
            <div>
              <div className="grid gap-8 md:grid-cols-2">
                {/* YouTube Video 1 */}
                <div className="w-full overflow-hidden rounded-lg aspect-video bg-muted">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/GTlpJT1f3mc?si=P3hBO1DRcsE40BEL"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* YouTube Video 2 */}
                <div className="w-full overflow-hidden rounded-lg aspect-video bg-muted">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/WwajV16Hy1M?si=iulgHrn2td4mw4pK"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* YouTube Video 3 */}
                <div className="w-full overflow-hidden rounded-lg aspect-video bg-muted">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/GDbSP7EqDUc?si=TCN66clK0CUOUvkW"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* YouTube Video 4 */}
                <div className="w-full overflow-hidden rounded-lg aspect-video bg-muted">
                  <iframe
                    width="560"
                    height="315"
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

