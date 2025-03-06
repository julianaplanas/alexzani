import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle, BookOpen, FileText, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function RumboALaTesis() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-primary md:py-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
            <div className="space-y-6 md:w-1/2">
              <h1 className="text-primary-foreground">Rumbo a la Tesis</h1>
              <p className="max-w-md text-lg text-primary-foreground/90">
                Acompañamiento personalizado para estudiantes universitarios en el proceso de elaboración de su tesis de
                grado o posgrado.
              </p>
              <Button asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="#contacto">
                  Agenda una consulta <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center md:w-1/2">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <Image
                  src="/placeholder.svg?height=320&width=320"
                  alt="Ilustración de libros y elementos de tesis"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col gap-12 md:flex-row">
            <div className="space-y-6 md:w-1/2">
              <h2>¿Qué es Rumbo a la Tesis?</h2>
              <p>
                Rumbo a la tesis es un programa integral de acompañamiento a tesistas que estén realizando sus trabajos finales de grado y posgrado en carreras orientadas hacia las Ciencias Sociales y Humanidades. La propuesta surge de mi propio camino como tesista, docente, tutora, directora, evaluadora de tesis y becaria, en donde comprendí que el camino académico no es un camino meramente intelectual, sino también emocional. Por ello, este programa aborda tres aspectos fundamentales: la mentalidad del tesista para superar pensamientos limitantes y avanzar con determinación, estrategias de gestión y planificación del tiempo para que el proceso no resulte abrumador, y contenidos específicos sobre escritura, estructura y metodología de una tesis.
              </p>
            </div>
            <div className="p-8 rounded-lg md:w-1/2 bg-muted">
              <h3 className="mb-4 text-xl font-bold">¿Por qué "Rumbo a la Tesis" es diferente?</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-foreground shrink-0 mt-0.5" />
                  <span>Clases ON DEMAND – Aprendé a tu ritmo con módulos estructurados que te guían paso a paso. 
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-foreground shrink-0 mt-0.5" />
                  <span>Recursos exclusivos: accedé a una lista de recursos que harán que tu camino sea mucho más sencillo y que no vuelvas a encontrarte frente a la hoja en blanco. </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-foreground shrink-0 mt-0.5" />
                  <span>Mentorías grupales – No más dudas sin respuesta. Encuentros en vivo para recibir feedback real sobre todo el proceso de escritura.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-foreground shrink-0 mt-0.5" />
                  <span>Corrección y devolución de todos tus avances – No escribís solo/a, te acompañamos en cada etapa.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-foreground shrink-0 mt-0.5" />
                  <span>Calendario de planificación personalizado – Para que gestiones tu propio tiempo y avances sin abrumarte. Sin prisa, pero sin pausa.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-foreground shrink-0 mt-0.5" />
                  <span>Tareas pequeñas, avances constantes – Un sistema diseñado para progresar sin sentirte bloqueado/a.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-foreground shrink-0 mt-0.5" />
                  <span>Mentalidad y motivación – Vencé el síndrome del impostor y el miedo al fracaso con estrategias probadas.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-secondary-foreground">Nuestros Servicios</h2>
            <p className="max-w-2xl mx-auto text-secondary-foreground/80">
              Ofrezco diferentes modalidades de acompañamiento para adaptarme a tus necesidades específicas.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Service 1 */}
            <div className="p-6 transition-shadow bg-white border rounded-lg shadow-sm border-border hover:shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Asesoramiento Inicial</h3>
              <p className="mb-4 text-muted-foreground">
                Sesiones para definir el tema, plantear objetivos y diseñar la estructura metodológica de tu
                investigación.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-primary-foreground shrink-0" />
                  <span className="text-sm">Definición del tema y problema de investigación</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-primary-foreground shrink-0" />
                  <span className="text-sm">Planteamiento de objetivos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-primary-foreground shrink-0" />
                  <span className="text-sm">Diseño metodológico</span>
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="p-6 transition-shadow bg-white border rounded-lg shadow-sm border-border hover:shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-accent">
                <FileText className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Revisión y Feedback</h3>
              <p className="mb-4 text-muted-foreground">
                Revisión detallada de tus avances con feedback constructivo para mejorar la calidad de tu trabajo.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-accent-foreground shrink-0" />
                  <span className="text-sm">Revisión de borradores</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-accent-foreground shrink-0" />
                  <span className="text-sm">Feedback detallado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-accent-foreground shrink-0" />
                  <span className="text-sm">Sugerencias de mejora</span>
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="p-6 transition-shadow bg-white border rounded-lg shadow-sm border-border hover:shadow-md">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-secondary">
                <Users className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Acompañamiento Completo</h3>
              <p className="mb-4 text-muted-foreground">
                Seguimiento integral desde la definición del tema hasta la presentación final de tu tesis.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-secondary-foreground shrink-0" />
                  <span className="text-sm">Todas las etapas del proceso</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-secondary-foreground shrink-0" />
                  <span className="text-sm">Sesiones regulares de seguimiento</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-secondary-foreground shrink-0" />
                  <span className="text-sm">Preparación para la defensa</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Nuestro Proceso</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Un enfoque estructurado para guiarte paso a paso en la elaboración de tu tesis.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {/* Step 1 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary">
                <span className="text-xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="mb-2 text-xl font-bold">Diagnóstico</h3>
              <p className="text-muted-foreground">
                Evaluamos tu situación actual y definimos un plan de trabajo personalizado.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary">
                <span className="text-xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="mb-2 text-xl font-bold">Planificación</h3>
              <p className="text-muted-foreground">
                Establecemos objetivos claros y un cronograma realista para tu proyecto.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary">
                <span className="text-xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="mb-2 text-xl font-bold">Desarrollo</h3>
              <p className="text-muted-foreground">
                Trabajamos juntos en la elaboración de cada capítulo con revisiones periódicas.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-primary">
                <span className="text-xl font-bold text-primary-foreground">4</span>
              </div>
              <h3 className="mb-2 text-xl font-bold">Finalización</h3>
              <p className="text-muted-foreground">
                Revisión final y preparación para la presentación y defensa de tu tesis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Testimonios</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Escucha las experiencias de estudiantes que han participado en el programa Rumbo a la Tesis.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Instagram Embedded Video 1 */}
            <div className="w-full overflow-hidden rounded-lg aspect-square bg-muted">
              <div>
                <blockquote 
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/reel/DDZp2I_Rh5q/?utm_source=ig_embed"
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
            {/* Instagram Embedded Video 2 */}
            <div className="w-full overflow-hidden rounded-lg aspect-square bg-muted">
              <div>
                <blockquote
                  className="instagram-media"
                  data-instgrm-captioned
                  data-instgrm-permalink="https://www.instagram.com/reel/DDZs8S5RIYA/?utm_source=ig_embed&amp;utm_campaign=loading"
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

            {/* Instagram Embedded Video 3 */}
            <div className="w-full overflow-hidden rounded-lg aspect-square bg-muted">
              <div>
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/reel/DDeve0KRDmp/?utm_source=ig_embed&amp;utm_campaign=loading"
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
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 bg-muted">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col gap-12 md:flex-row">
            <div className="space-y-6 md:w-1/2">
              <h2> ¡Tu tesis no tiene que ser una pesadilla!</h2>
              <p>
                Convertí el proceso en un camino claro y ordenado con el mejor acompañamiento. ¡Agendá una entrevista personalizada conmigo para conocer el programa en profundidad, charlar sobre tu situación actual y ver si podemos ayudarte!
              </p>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <a href="https://calendly.com/alexzani/rumbo-a-la-tesis-entrevista" target="_blank" rel="noopener noreferrer">
                  Agendar una consulta
                </a>
              </Button>
              <p>
              ¿Ya sabés que querés acceder a Rumbo a la tesis? Reservá tu lugar pagando antes. Tendrás acceso directo a todos los contenidos on demand en el momento del pago y recibirás un mail con los primeros pasos a seguir. <Link href="https://pay.hotmart.com/V91707822J?off=g4pl0ags">¡No pierdas tu lugar! </Link>
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm md:w-1/2">
              <div className="w-full aspect-video">
                {/* Calendly inline widget - replace with your actual Calendly link */}
                <iframe
                  src="https://calendly.com/alexzani/rumbo-a-la-tesis-entrevista"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  title="Calendly Scheduling"
                  className="rounded-md"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

