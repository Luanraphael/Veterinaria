import Image from "next/image";
import type { ReactNode } from "react";
import { Check, ChevronsDown, Gift, Minus, Plus, TriangleAlert } from "lucide-react";

const IMG = "/assets";
const CHECKOUT_URL = "https://pay.hotmart.com/H108156880H?checkoutMode=10";
const display = "font-display";

/* ------------------------------------------------------------------ */
/* Conteúdo                                                            */
/* ------------------------------------------------------------------ */

const MAIN_PRODUCT = "300 Mapas Mentales de Medicina Veterinaria";

const HERO_BULLETS = [
  "Acceso de por vida",
  "Entrega inmediata en tu correo electrónico",
  "Garantía incondicional de 7 días",
];

const INCLUDES_TOP = [
  MAIN_PRODUCT,
  "Estudia anatomía, fisiología, farmacología, patología, parasitología y microbiología con mapas visuales claros, organizados y fáciles de repasar.",
  "Conoce las principales enfermedades de perros, gatos, bovinos, equinos y otras especies, incluyendo sus causas, síntomas, diagnóstico, tratamiento y prevención.",
  "Aprende a identificar signos clínicos, interpretar parámetros normales y comprender los exámenes utilizados en la evaluación de diferentes animales.",
  "Repasa los principales medicamentos veterinarios, sus mecanismos de acción, indicaciones, contraindicaciones y efectos adversos.",
  "Comprende los sistemas digestivo, respiratorio, cardiovascular, nervioso, muscular y reproductor con ilustraciones que facilitan el aprendizaje.",
  "Estudia procedimientos clínicos, vacunación, desparasitación, nutrición, reproducción y cuidados preventivos de animales pequeños, grandes y exóticos.",
  "Organiza tus estudios, repasa conceptos importantes antes de los exámenes y consulta los temas esenciales durante tus prácticas veterinarias.",
  "125 Mapas Mentales de Farmacología Veterinaria",
  "112 Flashcards de Medicina Veterinaria para Memorizar y Repasar",
  "70 Casos Prácticos de Cálculo de Dosis y Medicamentos Veterinarios",
];

const INCLUDES_BOTTOM = [
  "Material listo para imprimir o estudiar desde el celular",
  "Archivos en PDF de alta calidad",
  "Acceso inmediato, descarga segura y uso ilimitado",
];

const TRUST_BADGES = [
  { label: "7 días de garantía", icon: null },
  { label: "Acceso inmediato", icon: "icone-acesso.png" },
  { label: "Soporte especializado", icon: "icone-suporte.png" },
  { label: "Satisfacción garantizada", icon: "icone-satisfacao.png" },
  { label: "Compra 100% segura", icon: "icone-compra-segura.png" },
];

type ShowcasePage = { title: string; img: string; w: number; h: number };

const toPages = (titles: string[], first: number, w: number, h: number): ShowcasePage[] =>
  titles.map((title, i) => ({ title, img: `pagina-${String(first + i).padStart(2, "0")}.png`, w, h }));

// Páginas reais dos mapas mentais, mostradas no carrossel "Mira el material por dentro".
const SHOWCASE = toPages(
  [
    "Perros (Caninos)",
    "Gatos (Felinos)",
    "Conejos (Lagomorfos)",
    "Caballos (Equinos)",
    "Bovinos",
    "Porcinos",
    "Ovinos",
    "Caprinos",
    "Aves",
    "Cobayas (Cuyos)",
  ],
  1,
  1491,
  1055,
);

// Segunda fileira, logo abaixo: páginas de enfermedades, complementando a primeira.
const SHOWCASE_DISEASES = toPages(
  [
    "Mastitis Caprina",
    "Escorbuto en Cobayas (Cuyos)",
    "Enfermedad Respiratoria en Aves",
    "Mastitis Bovina",
    "Pododermatitis en Ovinos",
    "Laminitis Equina",
    "Complejo Respiratorio Porcino",
    "Estasis Gastrointestinal en Conejos",
    "FLUTD en Gatos (Felinos)",
    "Otitis Canina",
  ],
  11,
  1448,
  1086,
);

// O 1º card mostra o título antes da imagem; o seguinte, imagem antes do título.
const DELIVERABLES = [
  { title: MAIN_PRODUCT, img: "main-300-mapas.png", titleFirst: true },
  { title: "125 Mapas Mentales de Farmacología Veterinaria", img: "item-125-farmacologia.png" },
];

const FIRST_BONUS = {
  title: "112 Flashcards de Medicina Veterinaria para Memorizar y Repasar",
  img: "bonus-112-flashcards.png",
  subtitle: "Ideales para repasar antes de un examen:",
  text: "Tarjetas de pregunta y respuesta con imágenes, pensadas para fijar lo más importante de cada tema. Úsalas para ponerte a prueba en pocos minutos, estudiar en grupo o hacer un repaso rápido el día antes del parcial.",
  price: "DE $27,90",
};

const BONUSES = [
  {
    title: "70 Casos Prácticos de Cálculo de Dosis y Medicamentos Veterinarios",
    img: "bonus-70-casos.png",
    price: "DE $37,90",
  },
];

const FEATURES = [
  {
    img: "icone-imprime.jpg",
    title: "Imprime o estudia desde el celular",
    text: "Descarga los mapas y estúdialos donde prefieras: impresos, en la tablet o en el celular. Están en alta calidad para que cada detalle se lea con claridad.",
  },
  {
    img: "icone-acceso-seguro.png",
    title: "Acceso seguro e inmediato",
    text: "Apenas se confirme tu pago, recibirás en tu correo un enlace directo para descargar todo el material. Sin esperas.",
  },
  {
    img: "icone-download.png",
    title: "Todo bien organizado",
    text: "Los mapas vienen ordenados por carpetas y temas, así encuentras rápido lo que necesitas repasar.",
  },
];

const WHY = [
  "Resume en una sola página lo que en los libros ocupa capítulos enteros, para que estudies menos horas y retengas más.",
  "Los colores, íconos e ilustraciones ayudan a tu memoria visual a recordar cada concepto con facilidad.",
  "Cubre animales pequeños, grandes y exóticos, con parámetros normales, enfermedades, prevención y cuidados.",
  "Es perfecto para repasar rápido antes de un examen, una práctica o una guardia.",
  "Te acompaña durante toda la carrera y también en tus primeros años de práctica profesional.",
];

const FOR_WHOM = [
  "Estudiantes de Medicina Veterinaria en cualquier semestre",
  "Quienes se preparan para exámenes, parciales o finales",
  "Técnicos y asistentes veterinarios",
  "Médicos veterinarios recién egresados que quieren repasar lo esencial",
  "Amantes de los animales que quieren aprender de forma seria y organizada",
];

const OFFER_ITEMS = [
  MAIN_PRODUCT,
  "125 Mapas Mentales de Farmacología Veterinaria",
  "112 Flashcards de Medicina Veterinaria para Memorizar y Repasar",
  "70 Casos Prácticos de Cálculo de Dosis y Medicamentos Veterinarios",
  "Archivos en PDF de alta calidad, listos para imprimir",
  "Acceso inmediato, descarga segura y uso ilimitado",
  "Acceso de por vida",
  "Entrega inmediata en tu correo electrónico",
];

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: "¿Cómo recibiré el material?",
    a: (
      <>
        Apenas se confirme tu pago, <strong>recibirás todo el material automáticamente</strong> en tu correo
        electrónico.
        <br />
        No necesitas enviar comprobantes ni hacer nada más: el envío es <strong>inmediato y seguro</strong>.
        <br />
        Solo asegúrate de escribir bien tu correo al momento de la compra.
      </>
    ),
  },
  {
    q: "¿El material es físico o digital?",
    a: (
      <>
        Es un <strong>material 100% digital</strong>, en PDF de alta calidad. Puedes <strong>estudiarlo desde el
        celular, la tablet o la computadora</strong>, o imprimirlo si prefieres estudiar en papel.
      </>
    ),
  },
  {
    q: "¿Tengo garantía?",
    a: (
      <>
        ¡Sí! Tienes una <strong>garantía incondicional de 7 días</strong>.
        <br />
        Puedes revisar todo el material con calma y, si por cualquier motivo no es lo que esperabas, pides el reembolso
        total. Sin complicaciones y sin preguntas.
      </>
    ),
  },
  {
    q: "¿El material está en español?",
    a: (
      <>
        Sí. Todos los mapas, flashcards y casos prácticos están <strong>completamente en español</strong>, con un
        lenguaje claro y fácil de entender.
      </>
    ),
  },
  {
    q: "¿Tengo soporte si tengo dudas?",
    a: (
      <>
        ¡Claro que sí!
        <br />
        Solo <strong>responde al correo que recibirás con tu compra</strong> y nuestro equipo te ayudará lo antes
        posible.
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Peças de clay                                                       */
/* ------------------------------------------------------------------ */

/** Seção na cor tema (esmeralda): equivale às seções de fundo azul da página original. */
function ThemeSection({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`clay-theme-slab relative w-full overflow-hidden py-14 text-white ${className}`}>
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/** Seção clara: equivale às seções de fundo branco da página original. */
function LightSection({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`relative w-full py-16 ${className}`}>
      {children}
    </section>
  );
}

function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[680px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

/** Grifo dourado sobre o esmeralda. */
function Mark({ children }: { children: ReactNode }) {
  return <span className="text-gold">{children}</span>;
}

function SoftMark({ children }: { children: ReactNode }) {
  return <span className="text-gold font-bold">{children}</span>;
}

/** Check verde nas seções claras; dourado nas seções esmeralda (o verde sumiria no fundo). */
function CheckOrb({ size = "md", onTheme = false }: { size?: "sm" | "md"; onTheme?: boolean }) {
  const dims = size === "sm" ? "h-6 w-6" : "h-7 w-7";
  const tone = onTheme ? "from-amber-300 to-amber-500" : "from-emerald-400 to-emerald-600";
  return (
    <span className={`clay-orb inline-flex ${dims} shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${tone} text-white`}>
      <Check className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} strokeWidth={3.5} />
    </span>
  );
}

function CheckList({ items, onTheme = false, className = "" }: { items: string[]; onTheme?: boolean; className?: string }) {
  return (
    <ul className={`flex flex-col gap-3.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckOrb onTheme={onTheme} />
          <span className={`pt-0.5 text-base font-medium leading-relaxed ${onTheme ? "text-white" : "text-ink"}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function CtaButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`clay-button ${display} inline-flex min-h-16 w-full items-center justify-center rounded-[20px] px-6 py-3 text-center text-base font-black tracking-wide sm:text-lg sm:w-auto ${className}`}
    >
      {children}
    </a>
  );
}

function IconOrb({ children, tone = "theme" }: { children: ReactNode; tone?: "theme" | "white" }) {
  const toneClass =
    tone === "theme"
      ? "bg-gradient-to-br from-[#10b981] to-[#065f46] text-white"
      : "bg-gradient-to-br from-white to-[#e3f6ec] text-love-600";
  return (
    <span className={`clay-orb inline-flex h-16 w-16 items-center justify-center rounded-full ${toneClass}`}>
      {children}
    </span>
  );
}

function SectionTitle({ children, onTheme = false, className = "" }: { children: ReactNode; onTheme?: boolean; className?: string }) {
  return (
    <h2
      className={`${display} text-center text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl md:text-5xl ${
        onTheme ? "text-white" : "text-ink"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

function PaymentMethods({ className = "" }: { className?: string }) {
  return (
    <div className={`mx-auto w-full max-w-[420px] ${className}`}>
      <Image src={`${IMG}/formas-pagamento.webp`} alt="Formas de pago" width={819} height={173} className="w-full" />
    </div>
  );
}

function MainMockup({ className = "", priority = false }: { className?: string; priority?: boolean }) {
  return (
    <Image
      src={`${IMG}/main-300-mapas.png`}
      alt={MAIN_PRODUCT}
      width={1306}
      height={1204}
      priority={priority}
      className={`mx-auto w-full drop-shadow-[0_14px_24px_rgba(0,0,0,0.28)] ${className}`}
    />
  );
}

/** Vitrine: as páginas horizontais passam sozinhas, em loop contínuo. */
function Showcase({ pages, reverse = false, className = "" }: { pages: ShowcasePage[]; reverse?: boolean; className?: string }) {
  const loop = [...pages, ...pages];
  return (
    <div className={`vitrine w-full overflow-hidden py-4 ${className}`}>
      <div className={`vitrine-track${reverse ? " vitrine-track-reverse" : ""}`}>
        {loop.map((p, i) => (
          <div key={`${p.img}-${i}`} className="shrink-0 pr-4" aria-hidden={i >= pages.length}>
            <Image
              src={`${IMG}/${p.img}`}
              alt={i < pages.length ? `Mapa mental: ${p.title}` : ""}
              width={p.w}
              height={p.h}
              sizes="(min-width: 640px) 440px, 300px"
              loading="eager"
              className="w-[300px] rounded-[16px] bg-white shadow-[0_12px_28px_rgba(0,30,20,0.35)] sm:w-[440px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */

export default function VeterinariaPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Blobs de fundo (luz ambiente do canvas) */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[60vh] w-[60vh] rounded-full bg-[#10b981]/10 blur-3xl" />
        <div className="absolute -right-[10%] top-[20%] h-[60vh] w-[60vh] rounded-full bg-[#f8d45c]/10 blur-3xl" />
      </div>

      {/* Barra promocional fixa */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div
          className={`${display} clay-topbar flex h-11 w-full items-center justify-center gap-1.5 px-4 text-center text-[15px] font-extrabold tracking-wide text-white`}
        >
          ¡Descuento solo
          <span className="animate-clay-blink rounded-full bg-white px-2.5 py-0.5 text-love-600 underline underline-offset-2">
            HOY
          </span>
          en esta página!
        </div>
      </div>

      <main className="flex flex-col pt-11">
        {/* 1 · HERO */}
        <ThemeSection className="pt-8! sm:pt-12!">
          <Container className="flex flex-col items-center text-center">
            <h1 className={`${display} px-2 text-[30px] font-extrabold leading-[1.18] tracking-tight sm:text-5xl md:text-6xl`}>
              Estudia veterinaria <Mark>de forma visual</Mark> y aprende <Mark>en minutos</Mark> lo que antes te tomaba
              horas.
            </h1>

            <MainMockup priority className="mt-7" />

            <p className="mt-6 text-lg font-medium leading-relaxed text-white/95 sm:text-xl">
              Descubre los <SoftMark>300 Mapas Mentales de Medicina Veterinaria</SoftMark>, una colección completa para
              estudiar <SoftMark>anatomía, fisiología, farmacología, patología y mucho más</SoftMark> de forma clara,
              organizada y fácil de repasar.
            </p>

            <CheckList items={HERO_BULLETS} onTheme className="mt-8 w-full text-left" />

            <CtaButton href="#oferta" className="mt-10">
              ¡QUIERO MIS MAPAS MENTALES!
            </CtaButton>

            <PaymentMethods className="mt-8" />
          </Container>
        </ThemeSection>

        {/* 2 · Lo que recibirás */}
        <LightSection>
          <Container>
            <h2 className={`${display} text-center text-3xl font-black leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl`}>
              Descubre <span className="text-love-500">todo lo que recibirás</span> hoy
            </h2>

            <CheckList items={INCLUDES_TOP} className="mt-10" />

            <MainMockup className="mt-10" />

            <CheckList items={INCLUDES_BOTTOM} className="mt-10" />
          </Container>
        </LightSection>

        {/* 3 · Selos de confiança */}
        <LightSection className="pt-0">
          <Container className="grid grid-cols-1 gap-5">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="clay-card flex flex-col items-center gap-3 rounded-[32px] px-6 py-6 text-center">
                {badge.icon ? (
                  <Image src={`${IMG}/${badge.icon}`} alt="" width={512} height={512} className="h-[84px] w-[84px]" />
                ) : (
                  <span className="clay-orb inline-flex h-[84px] w-[84px] items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-white">
                    <Check className="h-11 w-11" strokeWidth={3.5} />
                  </span>
                )}
                <span className={`${display} text-2xl font-extrabold text-ink`}>{badge.label}</span>
              </div>
            ))}
          </Container>
        </LightSection>

        {/* 4 · Vitrine + Tendrás acceso a + 5 · Data + 6 · Bonos */}
        <ThemeSection id="contenido">
          <Container>
            <SectionTitle onTheme>
              Mira el material <Mark>por dentro</Mark>
            </SectionTitle>
          </Container>

          <Showcase pages={SHOWCASE} className="mt-8" />
          <Showcase pages={SHOWCASE_DISEASES} reverse />

          <Container className="mt-14">
            <SectionTitle onTheme>
              Con los <Mark>300 Mapas Mentales de Medicina Veterinaria</Mark> tendrás acceso a:
            </SectionTitle>

            <div className="mt-10 flex flex-col gap-8">
              {DELIVERABLES.map((d) => {
                const title = (
                  <h3 className={`${display} px-2 text-center text-2xl font-extrabold leading-tight text-white`}>{d.title}</h3>
                );
                return (
                  <article key={d.title} className="clay-theme-card flex flex-col gap-5 rounded-[32px] p-4 sm:p-8">
                    {d.titleFirst && title}
                    <Image src={`${IMG}/${d.img}`} alt={d.title} width={1306} height={1204} className="w-full" />
                    {!d.titleFirst && title}
                  </article>
                );
              })}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href="#oferta">QUIERO RECIBIR EL MATERIAL</CtaButton>
            </div>
          </Container>

          {/* 5 · Data limite */}
          <Container className="mt-16">
            <div className="clay-theme-card flex flex-col items-center gap-6 rounded-[48px] px-6 py-10 text-center">
              <h2 className={`${display} text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl`}>
                COMPRANDO EN LOS DÍAS <Mark>22, 23 y 24 de OCTUBRE</Mark> RECIBES
              </h2>
              <IconOrb tone="white">
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>
          </Container>

          {/* 6 · Bonos */}
          <Container className="mt-16">
            <SectionTitle onTheme>
              <Mark>BONOS exclusivos</Mark> para que estudies todavía mejor
            </SectionTitle>
            <div className="mt-8 flex justify-center">
              <IconOrb tone="white">
                <Gift className="h-8 w-8" strokeWidth={2.5} />
              </IconOrb>
            </div>
            <p className="mt-8 text-center text-lg font-medium leading-relaxed text-white/95">
              Si compras hoy, además del material principal recibes <SoftMark>bonos exclusivos</SoftMark> para fijar lo
              que estudias y ganar seguridad en la práctica.
            </p>

            <div className="mt-10 flex flex-col gap-8">
              {/* 1º bônus: layout próprio (título → imagem → subtítulo → descrição) */}
              <article className="clay-theme-card flex flex-col gap-5 rounded-[32px] p-4 text-center sm:p-8">
                <h3 className={`${display} text-2xl font-extrabold leading-tight text-white`}>{FIRST_BONUS.title}</h3>
                <Image src={`${IMG}/${FIRST_BONUS.img}`} alt={FIRST_BONUS.title} width={1306} height={1204} className="w-full" />
                <h4 className={`${display} text-xl font-extrabold text-white`}>{FIRST_BONUS.subtitle}</h4>
                <p className="px-2 text-left text-base font-medium leading-relaxed text-white/90">{FIRST_BONUS.text}</p>
                <BonusPrice price={FIRST_BONUS.price} />
              </article>

              {BONUSES.map((b) => (
                <article key={b.title} className="clay-theme-card flex flex-col gap-5 rounded-[32px] p-4 pb-8 text-center sm:p-8">
                  <Image src={`${IMG}/${b.img}`} alt={b.title} width={1306} height={1204} className="mx-auto w-full" />
                  <h3 className={`${display} px-2 text-2xl font-extrabold leading-tight text-white`}>{b.title}</h3>
                  <BonusPrice price={b.price} />
                </article>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href="#oferta">QUIERO RECIBIR EL MATERIAL</CtaButton>
            </div>
          </Container>
        </ThemeSection>

        {/* 7 · Benefícios práticos */}
        <LightSection>
          <Container>
            <h2 className={`${display} clay-text-gradient text-center text-5xl font-black leading-[1.1] tracking-tight md:text-6xl`}>
              Pensado para que estudies mejor
            </h2>
            <div className="mt-8 flex justify-center">
              <IconOrb>
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>

            <div className="mx-auto mt-12 flex max-w-[480px] flex-col gap-8">
              {FEATURES.map((f) => (
                <div key={f.title} className="clay-card flex flex-col items-center gap-4 rounded-[32px] p-8 text-center">
                  <Image
                    src={`${IMG}/${f.img}`}
                    alt=""
                    width={512}
                    height={512}
                    className="h-32 w-32 object-contain mix-blend-multiply"
                  />
                  <h3 className={`${display} text-2xl font-extrabold leading-tight text-ink`}>{f.title}</h3>
                  <p className="text-base font-medium leading-relaxed text-muted">{f.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </LightSection>

        {/* 8 · ¿Por qué? + ¿Para quién? */}
        <ThemeSection>
          <Container>
            <SectionTitle onTheme>
              ¿Por qué los <Mark>300 Mapas Mentales de Medicina Veterinaria</Mark> van a cambiar tu forma de estudiar?
            </SectionTitle>

            <MainMockup className="mt-10" />

            <div className="clay-theme-card mt-12 rounded-[32px] p-6 sm:p-8">
              <CheckList items={WHY} onTheme />
            </div>

            <SectionTitle onTheme className="mt-14">
              ¿Para quién es este material?
            </SectionTitle>

            <div className="clay-theme-card mt-10 rounded-[32px] p-6 sm:p-8">
              <CheckList items={FOR_WHOM} onTheme />
            </div>
          </Container>
        </ThemeSection>

        {/* 9 · Oferta */}
        <LightSection id="oferta" className="scroll-mt-20">
          <Container>
            <SectionTitle>TENEMOS ALGO ESPECIAL PARA TI</SectionTitle>
            <div className="mt-8 flex justify-center">
              <IconOrb>
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>

            <div className="relative mt-14">
              {/* Selo "Más vendido" acima do card */}
              <div className="absolute -top-5 left-1/2 z-20 -translate-x-1/2">
                <span
                  className={`${display} clay-orb inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-br from-white to-[#e3f6ec] px-5 py-2.5 text-sm font-black tracking-wide text-love-600`}
                >
                  🌟 Más vendido
                </span>
              </div>

              <div className="clay-theme-slab relative overflow-hidden rounded-[48px] px-5 pb-10 pt-14 text-white sm:px-10">
                <div className="relative z-10 flex flex-col items-center text-center">
                  <h3 className={`${display} text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl`}>
                    300 Mapas Mentales de Medicina Veterinaria
                    <br />
                    <Mark>COMPLETO</Mark>
                  </h3>

                  <MainMockup className="mt-8" />

                  <div className="mt-8 w-full text-left">
                    <ul className="flex flex-col gap-3">
                      {OFFER_ITEMS.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckOrb size="sm" onTheme />
                          <span className="pt-0.5 text-[15px] font-bold leading-snug text-white">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className={`${display} mt-10 text-xl font-extrabold text-white/75 line-through decoration-2`}>
                    DE $ 127,00
                  </p>
                  <p className={`${display} mt-1 text-2xl font-black tracking-wide`}>HOY SOLO</p>
                  <p className={`${display} mt-1 text-8xl font-black leading-none tracking-tight`}>$10</p>
                  <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-love-600 shadow-[var(--shadow-clay-orb)]">
                    <TriangleAlert className="h-4 w-4 text-[#f59e0b]" strokeWidth={2.75} />
                    Puedes pagar en tu moneda local.
                  </p>
                  <p className={`${display} mt-6 text-lg font-black`}>O 5X DE $3,98</p>
                  <p className="text-sm font-bold text-white/90">Pago único</p>

                  <CtaButton href={CHECKOUT_URL} className="mt-6 sm:min-w-[320px]">
                    Comprar ahora
                  </CtaButton>
                  <p className="mt-3 text-xs font-bold uppercase tracking-widest text-white/85">Pago 100% seguro</p>

                  <PaymentMethods className="mt-6" />
                </div>
              </div>
            </div>
          </Container>
        </LightSection>

        {/* 10 · Garantia */}
        <ThemeSection>
          <Container>
            <div className="clay-theme-card flex flex-col items-center gap-6 rounded-[48px] px-6 py-10 text-center sm:px-10">
              <Image src={`${IMG}/selo-7-dias.png`} alt="7 días de garantía" width={150} height={150} className="h-[140px] w-[140px]" />
              <h2 className={`${display} text-3xl font-black tracking-tight sm:text-4xl`}>7 DÍAS DE GARANTÍA</h2>
              <p className="text-lg font-medium leading-relaxed text-white/95">
                Puedes comprar con total tranquilidad. Después de la compra tendrás 7 días para revisar todo el material
                y, si sientes que no es lo que esperabas, pides el reembolso completo sin complicaciones.
              </p>
              <Image src={`${IMG}/selo-site-seguro.png`} alt="Sitio seguro" width={300} height={51} className="w-[260px]" />
              <CtaButton href={CHECKOUT_URL} className="sm:min-w-[320px]">
                Comprar ahora
              </CtaButton>
            </div>
          </Container>
        </ThemeSection>

        {/* 11 · FAQ */}
        <LightSection>
          <Container>
            <div className="text-center">
              <p className={`${display} clay-text-gradient text-7xl font-black leading-none tracking-tight sm:text-8xl`}>FAQ</p>
              <h2 className={`${display} mt-3 text-2xl font-black tracking-wide text-ink sm:text-3xl`}>PREGUNTAS FRECUENTES</h2>
            </div>

            <div className="mt-10 flex flex-col gap-5">
              {FAQ.map((item, i) => (
                <details
                  key={item.q}
                  open={i === 0}
                  className="clay-faq clay-card group rounded-[24px] px-5 py-1 hover:-translate-y-1"
                >
                  <summary className="flex min-h-16 cursor-pointer items-center gap-4 py-3">
                    <span className="clay-orb inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#10b981] to-[#065f46] text-white">
                      <Plus className="faq-icon-closed h-5 w-5" strokeWidth={3} />
                      <Minus className="faq-icon-open h-5 w-5" strokeWidth={3} />
                    </span>
                    <span className={`${display} text-left text-lg font-extrabold leading-snug text-ink`}>{item.q}</span>
                  </summary>
                  <div className="pb-5 pl-14 pr-1 text-base font-medium leading-relaxed text-muted [&_strong]:font-bold [&_strong]:text-ink">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href={CHECKOUT_URL} className="sm:min-w-[320px]">
                Comprar ahora
              </CtaButton>
            </div>
          </Container>
        </LightSection>

        {/* 12 · Rodapé */}
        <footer className="pb-6 text-center text-[13px]">
          <div className="font-medium">
            <a href="#" className="mx-2.5 text-love-ink hover:underline">
              Política de Privacidad
            </a>
            <span className="text-muted">|</span>
            <a href="#" className="mx-2.5 text-love-ink hover:underline">
              Términos de Servicio
            </a>
          </div>
          <p className="mt-4 text-muted">© 2026 Todos los derechos reservados.</p>
        </footer>
      </main>
    </div>
  );
}

function BonusPrice({ price }: { price: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="clay-orb inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-white to-[#e3f6ec] text-love-600">
        <Gift className="h-6 w-6" strokeWidth={2.5} />
      </span>
      <span className={`${display} text-lg font-extrabold text-white/75 line-through decoration-2`}>{price}</span>
      <span
        className={`${display} clay-orb inline-flex items-center rounded-full bg-gradient-to-br from-amber-300 to-amber-500 px-5 py-1.5 text-base font-black tracking-widest text-white`}
      >
        GRATIS
      </span>
    </div>
  );
}
