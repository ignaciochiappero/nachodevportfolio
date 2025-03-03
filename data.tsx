//data.tsx

import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin,  Instagram, Crop, Pencil, Computer, Book, Wrench, Facebook, Github, Database, MonitorSmartphone, HeartHandshake, BrainCircuit, Footprints, Camera, Rocket, ShoppingCart, Gem, Award } from "lucide-react";
import { BsCheckCircle, BsWhatsapp } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";




export const socialNetworks = [
    {
        id: 1,
        logo: <FaWhatsapp size={30} strokeWidth={1} />,
        src: "https://wa.me/+543424094061",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/ignacio-chiappero-129360228/",
    },
       {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/ignaciochiappero",
    },

];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
        section:"#inicio"
    },
    {
        id: 2,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
        section:"#portfolio"
    },
    {
        id: 3,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
        section:"#about"        
    
    },
    {
        id: 4,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
        section:"#services"
    },

    {
        id: 5,
        title: "Home",
        icon: <Wrench size={25} color="#fff" strokeWidth={1} />,
        link: "/technologies",
        section:"#technologies"
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Mis comienzos como Full Stack Developer",
        subtitle: "Desarrollo Web",
        description: "Hace ya un tiempo me siento atraído nuevamente por el desarrollo de páginas web, sobre todo luego de pasar por las carreras de ingeniería y comprender más a fondo los conceptos relacionados a la programación, habiendo creado varias aplicaciones e implementaciones, me animé a adentrarme en el desarrollo web a través de frameworks de Javascript tanto Front End como Back End, usando tecnologías como NextJS, React, Angular, Typescript, NodeJS, NestJS, MongoDB, PostgreSQL, entre otras, así como frameworks de estilos como Bootstrap y TailwindCSS. Sigo aprendiendo muchísimo con cada proyecto que creo, y me formo constantemente en las nuevas tecnologías. Aprendí también a como desplegarlas desde plataformas como Vercel y Railway, a través de Git y Github.",
        date: "2024 ",
    },
    {
        id: 2,
        title: "Estudiante de ingeniería en sistemas e Inteligencia Artifical",
        subtitle: "Ingeniería",
        description: "Comencé en el año 2022 la carrera de Ingeniería en Sistemas, cursándola solo como oyente por cuestiones administrativas y laborales, aprendiendo de forma autodidacta muchos conceptos relacionados a mejorar mis habilidades dentro de la programación, mejorarndo mis conocimientos en C++, Python y Java, y un año después, con la apertura de la nueva ingeniería en Inteligencia Artificial, comencé mis estudios dentro de la misma, aprendiendo conceptos relacionados al aprendizaje autónomo, la robótica avanzada y la gestión y análisis de bases de datos para aprendizajes por regresión. Desarrollé varios mini proyectos personales en lenguajes como Java, C++ y Javascript.",
        date: "2022 - 2023",
    },
    {
        id: 3,
        title: "Profesor de tecnología, robótica y programación educativa",
        subtitle: "Tecnología, Robótica y Electrónica",
        description: "Docente en tecnología, robótica, electrónica y programación educativa, trabajé en instituciones como el Colegio Inmaculada Concepción, así como en instituciones privadas de programación y robótica educativa como ITEC y Escuela Play, fomentando el reciclado electrónico, la adaptación de componentes de circuitería a sistemas complejos utilizando Arduino, enseñando introducción a la programación desde lenguajes como C++, y programación orientada a la creación de videojuegos en entornos como Scratch y Game Maker desde el enfoque de programación por bloques.",
        date: "2021",
    },
    {
        id: 4,
        title: "Profesor en Artes Visuales",
        subtitle: "Diseño, Estética y Artes.",
        description: "Especialista en diseño y docente en Artes Visuales y Digitales, egresado del Centro Regional de Educación y Artes con promedio de 9.40/10, trabajé por más de 3 años como docente titular en instituciones educativas formales como el Colegio Inmaculada Concepción y el Colegio Nuestra Señora del Calvario, dominando tecnologías de diseño gráfico como Photoshop, Corel Draw, Gimp, Blender, Canva; así como herramientas de edición de video y sonido como Sony Vegas, Adobe Premiere, After Effects, Filmora y Audacity. ",
        date: "2020",
    },
    {
        id: 5,
        title: "Diseño Gráfico y Desarrollo Web",
        subtitle: "Mis comienzos autodidactas",
        description: "Aún estando en la escuela secundaria, incursioné muchísimo dentro del campo del diseño gráfico, tomando contacto con programas como Photoshop y Corel Draw para diseñar mis propias remeras, así como logos para trabajos individuales. Concreté algunos trabajos como freelancer, atendiendo a clientes para darle forma estética a su marca personal, y a partir de esto, comencé a adentrarme en el desarrollo de páginas web con herramientas como Wix, y hacer mis primeros trabajitos de crear webs estáticas para instituciones, para proyectos personales y para conocidos.",
        date: "2013",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 3,
        text: "Años como programador",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 10,
        text: "Años de experiencia en diseño gráfico",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 15,
        text: "Proyectos",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 20,
        text: "Dominio de tecnologías de desarrollo y diseño",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Computer />,
        title: "Desarrollo Full Stack",
        description: "Ofrezco soluciones web completas utilizando tecnologías tanto front-end como back-end, abarcando todo el proceso de desarrollo, desde la interfaz hasta la gestión del servidor."
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño interfaces web creativas y profesionales, enfocadas en la experiencia del usuario, combinando estética y funcionalidad para crear sitios atractivos y fáciles de navegar."
    },
    {
        icon: <Crop />,
        title: "Branding",
        description: "Construyo una identidad de marca sólida y coherente, que incluye el diseño de logotipos, paletas de colores y otros elementos visuales que refuerzan la presencia de tu negocio en el mercado."
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Redacto contenido persuasivo y atractivo que captura la atención de tu público objetivo, ayudando a comunicar eficazmente los valores y propuestas de tu marca."
    },
    {
        icon: <Database />,
        title: "Bases de datos",
        description: "Ofrezco soluciones integrales para el almacenamiento y protección de datos, asegurando la seguridad y accesibilidad de la información de tu sitio web y tus usuarios."
    },
    {
        icon: <MonitorSmartphone />,
        title: "Multiplataforma",
        description: "Desarrollo aplicaciones y sitios web adaptables para múltiples plataformas y dispositivos, garantizando una experiencia óptima sin importar el entorno de uso."
    },
    {
        icon: <HeartHandshake />,
        title: "Consultoría Web",
        description: "Brindo asesoramiento experto en tecnologías modernas como NextJS y React, ayudándote a optimizar el rendimiento y escalabilidad de tus proyectos web."
    },
    {
        icon: <BrainCircuit />,
        title: "IA Básica",
        description: "Implemento soluciones de inteligencia artificial básicas para añadir capacidades de aprendizaje automático a tus aplicaciones, mejorando su funcionalidad y personalización."
    },
    {
        icon: <Footprints />,
        title: "Soporte Post-Lanzamiento",
        description: "Ofrezco mantenimiento y soporte continuo para asegurar que tus aplicaciones funcionen sin problemas, adaptándolas a las necesidades cambiantes después de su lanzamiento."
    }
];

export const dataPortfolio = [
    {
      id: 1,
      title: "Nex Hub - Plataforma Gamificada",
      image: "/nexhub.png",
      urlGithub: "https://github.com/ignaciochiappero/NexHub",
      urlDemo: "https://nex-hub-beta.vercel.app/",
      description:
        "Plataforma gamificada diseñada para fomentar la participación y la motivación en entornos empresariales y educativos. Permite a los usuarios registrar logros, completar checkpoints y recibir premios personalizados. Incluye un panel de administración para gestionar usuarios, logros y recompensas. La aplicación también cuenta con un sistema de mensajería en tiempo real basado en WebSockets y un blog integrado para compartir publicaciones al estilo de Facebook. Implementa autenticación segura y subida de imágenes a Cloudinary. - Tecnologías utilizadas: Next.js + TypeScript + MySQL + Prisma + Cloudinary + Pusher + Framer Motion + TailwindCSS - Desplegada en Vercel.",
      icon: <Award size={60} />, 
    },
    {
      id: 2,
      title: "NIA - Shop",
      image: "/nia3.png",
      urlGithub: "https://github.com/ignaciochiappero/niashop",
      urlDemo: "https://niashop-six.vercel.app/",
      description:
        "Tienda online completamente funcional que permite realizar pagos mediante tarjetas de crédito, débito y PayPal. La tienda está diseñada con Next.js para el frontend, Tailwind CSS para la estilización, Prisma y PostgreSQL para la base de datos, NextAuth para la autenticación de usuarios y Cloudinary para el manejo de imágenes. - Tecnologías utilizadas: Next.js + TailwindCSS + Prisma + PostgreSQL + NextAuth + Cloudinary - Desplegada en Vercel.",
      icon: <ShoppingCart size={60} />, // Ícono de carrito de compras
    },
    {
      id: 3,
      title: "Portfolio Influencer - Jazmín Fintón",
      image: "/image-7.png",
      urlGithub: "https://github.com/ignaciochiappero/jazmindfinton",
      urlDemo: "https://jazminfinton.vercel.app/",
      description:
        "Portfolio profesional con trabajos de una influencer local, utilizando diversas tecnologías de frontend hecho a medida y pedido de la cliente, usando instancias de consultas con la misma y con un soporte constante de actualizaciones a pedido de la misma. - Tecnologías utilizadas: Next.js + Tailwind CSS + Swiper.js + JavaScript + React - Desplegada en Vercel.",
      icon: <Gem size={60} />,
    },
    {
      id: 4,
      title: "nIA Chatbot - IA",
      image: "/image-4.png",
      urlGithub: "https://github.com/ignaciochiappero/chatai-nachodev",
      urlDemo: "https://chatai-nachodev.vercel.app",
      description:
        "Aplicación web que integra un chatbot basado en el modelo de lenguaje Gemini Pro. Utiliza Next.js para el desarrollo del frontend, Tailwind CSS para la estilización y una API de streaming para manejar la interacción en tiempo real. La salida del chatbot se presenta en formato Markdown para una visualización dinámica y bien formateada. - Tecnologías utilizadas: Next.js + Tailwind CSS + Gemini Pro API + Markdown - Desplegada en Vercel.",
      icon: <BrainCircuit size={60} />,
    },
    {
      id: 5,
      title: "Reconocedor de gestos - IA",
      image: "/image-6.png",
      urlGithub: "https://github.com/ignaciochiappero/niarocketgame",
      urlDemo: "https://niarocketgame.vercel.app",
      description:
        "Videojuego experimental que utiliza tecnologías avanzadas como Next.js y MediaPipe.js para el reconocimiento de gestos. El juego responde a los movimientos de las manos para controlar las acciones en pantalla. - Tecnologías utilizadas: Next.js + MediaPipe.js - Desplegada en Vercel.",
      icon: <Rocket size={60} />,
    },
    {
      id: 6,
      title: "Reconocedor de objetos - IA",
      image: "/image-5.png",
      urlGithub: "https://github.com/ignaciochiappero/watchai-nachodev",
      urlDemo: "https://watchai-nachodev.vercel.app",
      description:
        "Aplicación web experimental que utiliza la cámara del ordenador o móvil para reconocer y diferenciar objetos genéricos y personas. Construida con Next.js para la interfaz de usuario, TensorFlow.js para el entrenamiento e implementación de modelos de aprendizaje automático, y ShadcnUI para los componentes de interfaz. - Tecnologías utilizadas: Next.js + TailwindCSS + ShadcnUI + TensorFlow.js - Desplegada en Vercel.",
      icon: <Camera size={60} />,
    },
    {
      id: 7,
      title: "CRUD Project Login",
      image: "/image-3.png",
      urlGithub: "https://github.com/ignaciochiappero/nachodevlogin.git",
      urlDemo: "https://nachodevlogin-production.up.railway.app",
      description:
        "Aplicación CRUD tipo TaskApp que permite a los usuarios agregar, editar y eliminar proyectos, con un sistema de inicio de sesión integrado mediante NextAuth para personalizar la experiencia. Utiliza Prisma como intermediario para la base de datos SQL y Radix UI junto con TailwindCSS para la interfaz de usuario. - Tecnologías utilizadas: Next.js + TypeScript + NextAuth + Radix UI + TailwindCSS + Prisma + PostgreSQL + React - Desplegada en Railway.",
      icon: <UserRound size={60} />,
    },
    {
      id: 8,
      title: "CRUD Blog - Mi historia",
      image: "/image-1.png",
      urlGithub: "https://github.com/ignaciochiappero/crudblog-nextjs.git",
      urlDemo: "https://crudblog-nextjs.vercel.app",
      description:
        "Aplicación CRUD diseñada como un blog personal para compartir información sobre mi trayectoria y permitir a los usuarios agregar sus propias experiencias de vida. Utiliza tecnologías como Next.js para el desarrollo del frontend, JavaScript y React para la construcción de la interfaz, y MongoDB para la gestión de datos. - Tecnologías utilizadas: Next.js + JavaScript + Bootstrap 5 + MongoDB + React - Desplegada en Vercel.",
      icon: <BookText size={60} />,
    },
    {
      id: 9,
      title: "CRUD Task App",
      image: "/image-2.png",
      urlGithub: "https://github.com/ignaciochiappero/taskapi.git",
      urlDemo: "https://tasksfront-production.up.railway.app",
      description:
        "Aplicación CRUD para la gestión de tareas que permite agregar y eliminarlas, así como marcar su estado de finalización. El proyecto está dividido en dos repositorios: uno para el backend (usando Nest.js) y otro para el frontend (usando Vite), con una base de datos NoSQL gestionada por el mismo servicio de despliegue. - Tecnologías utilizadas: Vite + TypeScript + TailwindCSS + Nest.js + MongoDB + React - Desplegada en Railway.",
      icon: <Pencil size={60} />,
    },
  ];
  
  export const dataTechnologies = [
    {
        id: 1,
        name: "Next.js",
        description: "Framework para crear aplicaciones web rápidas y dinámicas con características como renderizado del lado del servidor y generación de sitios estáticos, que mejoran significativamente la velocidad y el rendimiento de las aplicaciones.",
        imageUrl: "/Next.png"
    },
    {
        id: 2,
        name: "Nest.js",
        description: "Framework robusto para el desarrollo de aplicaciones backend, que facilita la creación de sistemas escalables y mantenibles mediante una arquitectura modular y bien estructurada.",
        imageUrl: "/Nest.png"
    },
    {
        id: 3,
        name: "Git",
        description: "Sistema de control de versiones distribuido que facilita la gestión y el seguimiento de cambios en el código fuente durante el desarrollo de software, permitiendo la colaboración efectiva entre múltiples desarrolladores y la conservación del historial de cambios.",
        imageUrl: "/Git.png"
    },
    {
        id: 4,
        name: "React",
        description: "Librería para el desarrollo de interfaces de usuario interactivas, que utiliza un enfoque basado en componentes para construir aplicaciones front-end con un código limpio y reutilizable.",
        imageUrl: "/React.png"
    },
    {
        id: 5,
        name: "Mongo DB",
        description: "Base de datos NoSQL que permite almacenar grandes volúmenes de datos con flexibilidad y escalabilidad, facilitando la gestión de información no estructurada y el rendimiento en aplicaciones grandes.",
        imageUrl: "/Mongo.png"
    },
    {
        id: 6,
        name: "Node.js",
        description: "Entorno de ejecución para JavaScript que permite desarrollar aplicaciones escalables y rápidas del lado del servidor, utilizando un modelo de E/S no bloqueante y un solo subproceso.",
        imageUrl: "/Node.png"
    },
    {
        id: 7,
        name: "C++",
        description: "Lenguaje de programación que proporciona herramientas para desarrollar aplicaciones de alto rendimiento y entender conceptos avanzados de programación orientada a objetos, utilizado en aplicaciones de sistemas y juegos.",
        imageUrl: "/C++.png"
    },
    {
        id: 8,
        name: "Prisma ORM",
        description: "ORM moderno que facilita el acceso a bases de datos y la gestión de datos en aplicaciones Node.js y TypeScript, proporcionando una experiencia de desarrollo más intuitiva y eficiente.",
        imageUrl: "/Prisma.png"
    },
    {
        id: 9,
        name: "PostgreSQL",
        description: "Sistema de gestión de bases de datos relacional que ofrece una alta fiabilidad y un conjunto de características avanzadas, ideal para aplicaciones que requieren un manejo robusto y seguro de datos.",
        imageUrl: "/Postgre.png"
    },
    {
        id: 10,
        name: "Java",
        description: "Lenguaje de programación orientado a objetos que ofrece un entorno estable para desarrollar aplicaciones robustas y escalables, desde aplicaciones empresariales hasta sistemas complejos y juegos.",
        imageUrl: "/Java.png"
    },
    {
        id: 11,
        name: "Photoshop",
        description: "Herramienta de diseño gráfico avanzada que permite crear y editar imágenes con precisión, ideal para proyectos que requieren un acabado profesional y creativo en el diseño visual.",
        imageUrl: "/Photoshop.png"
    },
    {
        id: 12,
        name: "CorelDraw",
        description: "Software especializado en diseño vectorial, proporcionando herramientas poderosas para crear gráficos detallados y precisos, perfectos para logotipos, ilustraciones y materiales impresos.",
        imageUrl: "/Corel.png"
    },
    {
        id: 13,
        name: "Vite",
        description: "Herramienta moderna para el desarrollo web que ofrece una configuración rápida y tiempos de compilación extremadamente cortos, optimizando el flujo de trabajo y mejorando la eficiencia en los proyectos.",
        imageUrl: "/Vite.png"
    },
    {
        id: 14,
        name: "Sony Vegas",
        description: "Software de edición de video con una interfaz intuitiva y herramientas avanzadas, que facilita la creación de contenido de video profesional de manera rápida y eficiente.",
        imageUrl: "/Sony.png"
    },
    {
        id: 15,
        name: "After Effects",
        description: "Aplicación clave para la creación de animaciones y efectos visuales en video, que permite añadir dinamismo y creatividad a proyectos de video, logrando resultados impresionantes y de alta calidad.",
        imageUrl: "/After.png"
    }
];