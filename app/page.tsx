import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-primary md:py-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
            <div className="space-y-6 md:w-1/2">
              <h1 className="text-primary-foreground">Educación y Acompañamiento Académico</h1>
              <p className="max-w-md text-lg text-primary-foreground/90">
                Guía personalizada para estudiantes universitarios en su camino hacia la tesis y el desarrollo de
                habilidades de escritura creativa.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href="/rumbo-a-la-tesis">
                    Conoce más <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-primary-foreground/20 text-primary-foreground">
                  <Link href="/newsletter">Sumate al Newsletter</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center md:w-1/2">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Ilustración de libros y elementos educativos"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
            <div className="flex justify-center md:w-1/3">
              <div className="relative w-64 h-64 overflow-hidden rounded-full">
                <Image
                  src="/feriadellibro.jpeg?height=256&width=256"
                  alt="Foto del educador"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 md:w-2/3">
              <h2>Sobre mí</h2>
              <p>
                Soy Alex Zani y nací en un caluroso verano de 1992 en Santiago del Estero. Desde que tengo uso de razón, siempre me gustó leer y escribir, actividades que comencé a realizar desde muy temprana edad. Más tarde que pronto, descubrí la docencia. Esta es mi historia.
              </p>
              <p>
                Me formé en la Licenciatura en Ciencias de la Comunicación en la Universidad de Buenos Aires y, a mitad de mi carrera, obtuve la beca del Programa Iberoamérica de Santander Universidades para un intercambio en España. Radicada en Valencia, descubrí los caminos de la Filosofía de la educación y la Historia del arte. Al regresar, me licencié en la UBA y, junto a compañeros, fundamos un medio digital. La sed de conocimiento me impulsó a postular a la beca de la Fundación Carolina para emprender un Máster en Periodismo en la Universidad CEU-SAN Pablo de Madrid, experiencia que me permitió colaborar durante seis meses en la sección de Cultura del diario El Mundo.
              </p>
              <p>
                De vuelta en Argentina, mi camino académico se enriqueció al convertirme en becaria doctoral por CONICET en el programa de Estudios de Género de la FFyL en la UBA. Integré dos grupos de investigación: uno liderado por la Dra. Marcela País Andrade (CONICET/UBA) mediante la beca UBACyT y otro en el Latin American Interdisciplinary Gender Network coordinado por Helena López (YALE UNIVERSITY/UNAM). Sin embargo, no quise que la academia sofocara mi creatividad, por lo que realicé, en paralelo, una Maestría en Escritura Creativa dirigida por María Negroni en la UNTREF, finalizada en 2024.
              </p>
              <p>
                Durante estos años, he tenido el privilegio de compartir mi pasión por la palabra a través de la docencia. He impartido clases de lectura y escritura académica en la Universidad Nacional de Moreno, la UNTREF y la Universidad de Buenos Aires, donde fui docente del Taller de TIF orientado a la producción de textos. La docencia me ha llevado a cruzar fronteras: fui invitada a dar charlas en la Universidad de Virginia (USA) y a exponer en la Universidad Nacional Autónoma de México, gracias a CLACSO. Actualmente, en FLACSO Argentina, estoy a cargo del Módulo de Periodismo Narrativo en el posgrado "Escrituras: creatividad humana y comunicación" y coordino talleres de escritura creativa, tanto virtuales como presenciales, en encuentros íntimos con el poder transformador del lenguaje.
              </p>
              <p>
              La escritura siempre ha sido mi refugio y mi forma de conectar con el mundo. He plasmado mi sentir en tres poemarios: Justo antes de olvidar mi nombre (Elemento Disruptivo, 2018), El cero es un número natural (Concreto, 2020) y Al filo de la visión (Concreto, 2023). Mis versos también han encontrado hogar en la revista Hablar de poesía (nº 40, 2019), en el Tomo 2 de De la cultura al feminismo (2021) y en la antología CAMPO. 100 poemas sobre la tierra. 100 poetas argentinxs (Camalote, 2022). Entre los reconocimientos que he recibido destacan el galardón a la Convocatoria Epistolar por el CCR y el Goethe Institut (2020), el Primer Premio de Ensayos Estímulo CBC, UBA, el Segundo premio al Concurso de Cuentos de la Academia Nacional de Ciencias de Córdoba y una mención en el Certamen Nacional de Literatura Osvaldo Bayer 2023. He compartido mi pasión en charlas sobre género y literatura en espacios como la FILBA, FILFEM, INADI y la Academia Mexicana de la Historia, y he tenido el honor de moderar y leer poesía en eventos destacados, como el Festival Tiempo de Mujeres (México) y en el MUAC. También curé y conduje el podcast <Link href="https://open.spotify.com/playlist/01xXeNm4u04jNzKcSNPqJO">Poesía Ya! Latinoamérica camino al 8M</Link> para el Centro Cultural Kirchner.
              </p>
              <p>
              El periodismo me abrió otra ventana al mundo. Cofundé el medio digital La Primera Piedra, donde dirigí la sección de Cultura entre 2014 y 2017, y desde entonces he colaborado con numerosos medios nacionales e internacionales. En 2019, tuve el gusto de co-conducir el programa Patriarcadas en Trilce Radio, junto a Rocío Prim y Maru Lijalad. Mi paso por el diario El Mundo en Madrid me permitió sumergirme en la redacción de notas, y mis colaboraciones se extendieron a agencias y medios como Presentes, Buenos Aires Herald, Subida de Línea, El Liberal, Relatto, Missing Perspectives y El grito del sur. Una anécdota que atesoro es haber compartido un cafecito en Madrid con Fran Lebowitz, experiencia que se transformó en <Link href="https://www.elmundo.es/cultura/2018/06/28/5b33dc97468aeb01028b457e.html">una nota para El Mundo.</Link>
              </p>
              <p>
              Cada capítulo de mi vida se escribe día a día, entre la pasión por las letras y el compromiso con el saber. En estos últimos años, he descubierto que el camino académico no es solo intelectual, sino también emocional, y está profundamente atravesado por la creatividad. Tengo el firme compromiso de socializar lo aprendido y de ayudar a otrxs a cumplir sus objetivos. En esta página encontrarán mis propuestas, fruto de un camino que busca conectar, transformar y encender nuevas historias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Institutions Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Instituciones que confiaron en mi trabajo</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              He colaborado con prestigiosas instituciones académicas en el desarrollo de programas educativos y
              talleres.
            </p>
          </div>

          <div className="grid items-center grid-cols-2 gap-8 md:grid-cols-4 justify-items-center">
            <div className="flex items-center justify-center w-32 h-32">
              <Image
                src="/logos/flacso.png?height=128&width=128"
                alt="Logo Universidad 1"
                width={128}
                height={128}
                className="object-contain transition-all grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center w-32 h-32">
              <Image
                src="/logos/LAIGN.png?height=128&width=128"
                alt="Logo Universidad 2"
                width={128}
                height={128}
                className="object-contain transition-all grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center w-32 h-32">
              <Image
                src="/logos/uba.jpg?height=128&width=128"
                alt="Logo Universidad 3"
                width={128}
                height={128}
                className="object-contain transition-all grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center w-32 h-32">
              <Image
                src="/logos/unam.jpeg?height=128&width=128"
                alt="Logo Universidad 4"
                width={128}
                height={128}
                className="object-contain transition-all grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center w-32 h-32">
              <Image
                src="/logos/universityofvirginia.png?height=128&width=128"
                alt="Logo Universidad 4"
                width={128}
                height={128}
                className="object-contain transition-all grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center w-32 h-32">
              <Image
                src="/logos/UNM.png?height=128&width=128"
                alt="Logo Universidad 4"
                width={128}
                height={128}
                className="object-contain transition-all grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center w-32 h-32">
              <Image
                src="/logos/UNTREF.png?height=128&width=128"
                alt="Logo Universidad 4"
                width={128}
                height={128}
                className="object-contain transition-all grayscale hover:grayscale-0"
              />
            </div>
            <div className="flex items-center justify-center w-32 h-32">
              <Image
                src="/logos/UNTREG.png?height=128&width=128"
                alt="Logo Universidad 4"
                width={128}
                height={128}
                className="object-contain transition-all grayscale hover:grayscale-0"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-accent-foreground">¿Listo para comenzar tu camino?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-accent-foreground/90">
            Ya sea que estés trabajando en tu tesis o quieras mejorar tus habilidades de escritura, estoy aquí para
            acompañarte.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild className="bg-white text-accent-foreground hover:bg-white/90">
              <Link href="/rumbo-a-la-tesis">Rumbo a la Tesis</Link>
            </Button>
            <Button asChild className="bg-white text-accent-foreground hover:bg-white/90">
              <Link href="/escritura-creativa">Escritura Creativa</Link>
            </Button>
            <Button asChild className="bg-white text-accent-foreground hover:bg-white/90">
              <Link href="/newsletter">Sumate al Newsletter</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

