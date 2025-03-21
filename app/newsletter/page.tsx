"use client";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, CheckCircle, BookOpen, PenTool, ArrowRight } from "lucide-react"
import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setStatus({ success: false, message: "Por favor, ingresa un correo válido." });
      return;
    }

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ success: true, message: "¡Gracias por suscribirte!" });
        setEmail(""); // Clear input field
      } else {
        setStatus({ success: false, message: data.error || "Hubo un error, intenta de nuevo." });
      }
    } catch (error) {
      setStatus({ success: false, message: "Error al conectar con el servidor." });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 text-center bg-blue-100">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <div className="flex justify-center">
              <div className="p-4 bg-white rounded-full shadow-md">
                📩
              </div>
            </div>
            <h2 className="mt-4 text-3xl font-bold">Sumate al Newsletter</h2>
            <p className="text-gray-600">
              Permitime acompañarte en tu proceso de escritura creativa y/o académica.
            </p>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-md gap-3 mx-auto sm:flex-row">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 bg-white border border-gray-300 rounded-md"
              required
            />
            <Button type="submit" className="px-4 py-2 rounded-md bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap">
              Suscribirme
            </Button>
          </form>

          {/* Status Messages */}
          {status && (
            <p className={`text-sm mt-2 ${status.success ? "text-green-600" : "text-red-600"}`}>
              {status.message}
            </p>
          )}

          <p className="mt-4 text-sm text-gray-500">
            Nunca recibirás spam. Solo compartiré consejos útiles sobre escritura.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4">¿Por qué suscribirte?</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Al unirte a mi newsletter, recibirás contenido exclusivo diseñado para ayudarte en tu camino académico y
              creativo.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Benefit 1 */}
            <div className="p-6 bg-white border rounded-lg shadow-sm border-border">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Recursos Académicos</h3>
              <p className="mb-4 text-muted-foreground">
                Guías, plantillas y consejos prácticos para mejorar tu escritura académica y avanzar en tu tesis.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-primary-foreground shrink-0" />
                  <span className="text-sm">Plantillas para estructurar tu tesis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-primary-foreground shrink-0" />
                  <span className="text-sm">Consejos de metodología</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-primary-foreground shrink-0" />
                  <span className="text-sm">Guías de citación y referencias</span>
                </li>
              </ul>
            </div>

            {/* Benefit 2 */}
            <div className="p-6 bg-white border rounded-lg shadow-sm border-border">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-accent">
                <PenTool className="w-6 h-6 text-accent-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Inspiración Creativa</h3>
              <p className="mb-4 text-muted-foreground">
                Ejercicios de escritura, prompts y técnicas para estimular tu creatividad y mejorar tu expresión
                escrita.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-accent-foreground shrink-0" />
                  <span className="text-sm">Prompts semanales de escritura</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-accent-foreground shrink-0" />
                  <span className="text-sm">Ejercicios para superar el bloqueo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-accent-foreground shrink-0" />
                  <span className="text-sm">Técnicas narrativas innovadoras</span>
                </li>
              </ul>
            </div>

            {/* Benefit 3 */}
            <div className="p-6 bg-white border rounded-lg shadow-sm border-border">
              <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-secondary">
                <Mail className="w-6 h-6 text-secondary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Contenido Exclusivo</h3>
              <p className="mb-4 text-muted-foreground">
                Acceso anticipado a nuevos talleres, descuentos especiales y contenido que no comparto en ningún otro
                lugar.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-secondary-foreground shrink-0" />
                  <span className="text-sm">Descuentos exclusivos en talleres</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-secondary-foreground shrink-0" />
                  <span className="text-sm">Acceso anticipado a nuevos cursos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-1 text-secondary-foreground shrink-0" />
                  <span className="text-sm">Entrevistas con escritores y académicos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Frequency Section */}
      <section className="py-16 bg-muted">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col items-center gap-12 md:flex-row">
            <div className="space-y-6 md:w-1/2">
              <h2>¿Con qué frecuencia recibiré el newsletter?</h2>
              <p>
                El newsletter se envía quincenalmente, lo que significa que recibirás contenido valioso dos veces al
                mes, sin saturar tu bandeja de entrada.
              </p>
              <p>
                Cada edición está cuidadosamente diseñada para proporcionarte información relevante y práctica que
                puedas aplicar inmediatamente en tus proyectos de escritura.
              </p>
              <p>
                Además, ocasionalmente enviaré ediciones especiales con anuncios importantes, como nuevos talleres o
                recursos exclusivos.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-sm md:w-1/2">
              <h3 className="mb-4 text-xl font-bold">Lo que incluye cada edición</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-foreground shrink-0 mt-0.5" />
                  <span>Un artículo principal sobre escritura académica o creativa</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-foreground shrink-0 mt-0.5" />
                  <span>Recursos y herramientas recomendadas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-foreground shrink-0 mt-0.5" />
                  <span>Un ejercicio práctico para mejorar tus habilidades</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary-foreground shrink-0 mt-0.5" />
                  <span>Novedades sobre próximos talleres y eventos</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Newsletter Section */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Muestra de Newsletter</h2>
            <p className="max-w-2xl mx-auto text-muted-foreground">
              Aquí tienes un vistazo a lo que puedes esperar al suscribirte.
            </p>
          </div>

          <div className="max-w-3xl p-8 mx-auto bg-white border rounded-lg shadow-sm border-border">
            <div className="pb-4 mb-6 border-b">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-secondary-foreground" />
                <h3 className="text-xl font-bold">Newsletter de Escritura - Edición #42</h3>
              </div>
              <p className="text-sm text-muted-foreground">Enviado el 15 de marzo de 2025</p>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="mb-2 text-lg font-bold">Cómo estructurar el marco teórico de tu tesis</h4>
                <p className="mb-3 text-muted-foreground">
                  El marco teórico es una de las partes más importantes de tu tesis, ya que establece las bases
                  conceptuales de tu investigación...
                </p>
                <a href="#" className="inline-flex items-center font-medium text-primary-foreground">
                  Leer artículo completo <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>

              <div className="pt-6 border-t">
                <h4 className="mb-2 text-lg font-bold">Ejercicio de la semana: Escritura libre</h4>
                <p className="mb-3 text-muted-foreground">
                  Dedica 15 minutos a escribir sin parar sobre un tema que te apasione. No te preocupes por la gramática
                  o la estructura, simplemente deja fluir tus pensamientos...
                </p>
              </div>

              <div className="pt-6 border-t">
                <h4 className="mb-2 text-lg font-bold">Recurso recomendado</h4>
                <p className="mb-3 text-muted-foreground">
                  "Cómo escribir una tesis en ciencias sociales" - Una guía práctica que te ayudará a estructurar tu
                  investigación de manera efectiva...
                </p>
                <a href="#" className="inline-flex items-center font-medium text-primary-foreground">
                  Descargar recurso <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2 className="text-primary-foreground">¿Listo para recibir contenido valioso en tu bandeja de entrada?</h2>
            <p className="text-primary-foreground/90">
              Únete a cientos de estudiantes y escritores que ya se benefician de los recursos, consejos y ejercicios
              que comparto quincenalmente.
            </p>
            <div className="flex flex-col w-full max-w-md gap-3 mx-auto sm:flex-row">
              <Input type="email" placeholder="Tu correo electrónico" className="bg-white" />
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 whitespace-nowrap">
                Suscribirme ahora
              </Button>
            </div>
            <p className="text-xs text-primary-foreground/70">
              Respeto tu privacidad. Nunca compartiré tu correo electrónico con terceros.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

