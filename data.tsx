import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin,  Instagram, Crop, Pencil, Computer, Book, Wrench, Facebook, Github, Database,MonitorSmartphone, HeartHandshake, BrainCircuit,Footprints } from "lucide-react";




export const socialNetworks = [
    {
        id: 1,
        logo: <Instagram size={30} strokeWidth={1} />,
        src: "https://www.instagram.com/nachochiappero/",
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
    {
        id: 4,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "https://web.facebook.com/nacho.chiappero/",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Wrench size={25} color="#fff" strokeWidth={1} />,
        link: "/technologies",
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
        description: "Soluciones web completas con tecnologías front-end y back-end."
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Crop />,
        title: "Branding",
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Database />,
        title: "Bases de datos",
        description: "Brindo un servicio integral para guardar y proteger la información de tu sitio y tus usuarios. ",
    },
    
    {
        icon: <MonitorSmartphone />,
        title: "Multiplataforma",
        description: "Desarrollo tu sitio para múltiples plataformas y dispositivos, según nececedidad ",
    },
    {
        icon: <HeartHandshake />,
        title: "Consultoría Web",
        description: "Asesoramiento en tecnologías como NextJS y React para optimizar tus proyectos."
    },
    {
        icon: <BrainCircuit />,
        title: "IA Básica",
        description: "Soluciones sencillas de IA para mejorar tus aplicaciones con aprendizaje automático."
    },
    {
        icon: <Footprints />,
        title: "Soporte Post-Lanzamiento",
        description: "Mantenimiento y soporte continuo para asegurar el buen funcionamiento de tus aplicaciones."
    }
];

export const dataPortfolio = [
    {
        id: 1,
        title: "CRUD Blog - Mi historia",
        image: "/image-1.png",
        urlGithub: "https://github.com/ignaciochiappero/crudblog-nextjs.git",
        urlDemo: "https://crudblog-nextjs.vercel.app",
    },
    {
        id: 2,
        title: "CRUD Task App",
        image: "/image-2.png",
        urlGithub: "https://github.com/ignaciochiappero/taskapi.git",
        urlDemo: "https://tasksfront-production.up.railway.app",
    },
    {
        id: 3,
        title: "CRUD Project Login",
        image: "/image-3.png",
        urlGithub: "https://github.com/ignaciochiappero/nachodevlogin.git",
        urlDemo: "https://nachodevlogin-production.up.railway.app",
    },
    {
        id: 4,
        title: "Chatbot - nIA",
        image: "/nIA.png",
        urlGithub: "https://github.com/ignaciochiappero/chatai-nachodev",
        urlDemo: "https://chatai-nachodev.vercel.app",
    },
 
];

export const dataTechnologies = [
    {
        id: 1,
        name: "Next JS",
        description:
            "¡Impresionante framework! Con Next.js, creo aplicaciones web rápidas y dinámicas. Su capacidad para el renderizado del lado del servidor y la generación de sitios estáticos mejora significativamente el rendimiento.",
        imageUrl: "/Next.png",
    },
    {
        id: 2,
        name: "Nest JS",
        description:
            "Me encanta trabajar con Nest.js. Este poderoso framework me permite desarrollar aplicaciones backend robustas y escalables con una arquitectura modular y bien estructurada. ¡Es perfecto para proyectos grandes!",
        imageUrl: "/Nest.png",
    },
    {
        id: 3,
        name: "React",
        description:
            "React es una herramienta esencial en mi desarrollo front-end. Con su enfoque basado en componentes, puedo crear interfaces de usuario interactivas y mantener el código limpio y reutilizable.",
        imageUrl: "/React.png",
    },
    {
        id: 4,
        name: "Mongo DB",
        description:
            "MongoDB es mi base de datos preferida para almacenar datos NoSQL. Su flexibilidad y escalabilidad me permiten manejar grandes volúmenes de datos de manera eficiente, asegurando un rendimiento óptimo.",
        imageUrl: "/Mongo.png",
    },
    {
        id: 5,
        name: "C++",
        description:
            "C++ es fundamental en mi formación. Este lenguaje de programación me ha permitido comprender los conceptos básicos de la programación orientada a objetos y desarrollar aplicaciones de alto rendimiento.",
        imageUrl: "/C++.png",
    },
    {
        id: 6,
        name: "Java",
        description:
            "Java es un pilar en mi arsenal de programación. Con su enfoque orientado a objetos y su amplio ecosistema, puedo desarrollar aplicaciones robustas y escalables, desde juegos hasta sistemas empresariales.",
        imageUrl: "/Java.png",
    },
    {
        id: 7,
        name: "Photoshop",
        description:
            "Photoshop es mi herramienta favorita para el diseño gráfico. Me permite crear y editar imágenes con precisión y creatividad, asegurando que cada proyecto tenga un acabado profesional.",
        imageUrl: "/Photoshop.png",
    },
    {
        id: 8,
        name: "CorelDraw",
        description:
            "CorelDraw es esencial para mis proyectos de diseño vectorial. Con sus potentes herramientas de ilustración, puedo crear gráficos precisos y detallados, perfectos para logotipos y materiales impresos.",
        imageUrl: "/Corel.png",
    },
    {
        id: 9,
        name: "Vite",
        description:
            "Vite es una revelación en el desarrollo web. Con su rápida configuración y tiempo de compilación increíblemente veloz, puedo optimizar mi flujo de trabajo y mejorar la eficiencia en mis proyectos.",
        imageUrl: "/Vite.png",
    },
    {
        id: 10,
        name: "Sony Vegas",
        description:
            "Sony Vegas es mi elección para la edición de video. Su interfaz intuitiva y potentes herramientas de edición me permiten crear contenido de video profesional de manera rápida y eficiente.",
        imageUrl: "/Sony.png",
    },
    {
        id: 11,
        name: "After Effects",
        description:
            "After Effects es esencial para mis animaciones y efectos visuales. Me permite añadir dinamismo y creatividad a mis proyectos de video, logrando resultados impresionantes y de alta calidad.",
        imageUrl: "/After.png",
    }
    
];
