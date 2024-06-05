export const Translate = (key) => {
    const language = localStorage.getItem("Translate") || "en"; // Default to English if no setting is found
    switch (language) {
        case "en":
        case "sp":
        case "ku":
            return Translation[language][key] || `No translation for ${key}`; // Handle keys not found in translations
        default:
            return Translation.en[key] || `No translation for ${key}`; // Fallback to English if no valid language setting
    }
};

const Translation = {
    en: {
        Provide : ["Providing", "the best", "workforce and business solutions."],
        Home: "Workforce",
        Services: "Services",
        ContactUs: "Contact Us",
        AboutUs: "About Us",
        AlreadyCandiate: "Already a Candidate",
        WorkForce: "Our Services",
        SupplyChain: "Supply Chain",
        Consultation: "Make an Appointment",
        Jobs: "Jobs",
        OurMission : "Our Mission", 
        MissionMessage : "At our core, we are dedicated to empowering individuals to discover and achieve their career aspirations.Our comprehensive services are designed to guide you through every step of your journey, ensuring you find the path that best aligns with your skills, passions, and goals.",

        Assist: "We can assist you achieve your goals",

        Description: "Ranked among the nation's premier company for workforce development and career advancement, we are committed to connecting talent with opportunity. Our innovative approach not only nurtures your professional growth but also enhances your career trajectory, making us your best choice for success in today's competitive job market.",
        StartCareer: "Need to start a career?",
        CareerButton: "Start Your Career Journey Here",
        Objective: "Objective",
        Solution : "Solution",
        Cost : "Cost",
        Model : "Model",
        ObjectiveMessage: "Hiring professionals from Puerto Rico is to leverage their unique status as American citizens, which facilitates a seamless employment transition without the complexities of visa processes. Puerto Ricans are known for their cultural adaptability, having a blend of Latin American and U.S. influences, which enables them to integrate effectively into diverse work environments. Additionally, their bilingual capabilities in English and Spanish are a valuable asset in today's global marketplace, offering the potential for enhanced communication and outreach in multicultural settings. Hiring from Puerto Rico can enhance a company's operational capacity and diversity, and provide a competitive edge in communication within the workforce and with clients.",
        SolutionMessage : "To facilitate the hiring of Puerto Rican professionals, we'll tailor our candidate search to match the specific criteria provided by companies. We will organize interviews via Zoom or in-person, depending on the preference of the hiring company. Throughout the process, we ensure clear communication between both parties to establish a mutual understanding of expectations, which aids in creating a successful employment relationship.",
        CostMessage: ["COMPANY SIGNUP", "COVERS MARKETING ADS", "ALL PAPERWORKS", "RECRUITMENT & PLACEMENT", "$2,500 AN INDIVIDUAL"],
        ModelMessage : ["Research", "We research and find right skill sets and backgrounds for the position. We also examine your corporate culture to determine if the candidates would be a good fit.", "Screen and Forward", "We screen and forward the successful candidates that meet your ideal profile.", "Additional Services", "We can assist in onboarding employees and provide cultural training as needed using a la carte pricing model."],
        LearnMore : "Learn More",

        

        WorkForceImg1 : ["BUSINESS GROWTH THROUGH EXPERT SOLUTIONS", "By partnering with our team, you’ll tap into transformative growth and a wealth of expertise in seasoned professionals committed to growing your business to its next stage of success. Explore how our solutions will drive your vision forward, fostering a culture of accountability, growth and strategic innovation that benefits your organization, teams and people."],
        WorkForceImg2 : ["STRATEGIC MANAGEMENT CONSULTING", "Looking for more expertise-led project or consulting based work? At The Greenhouse, we redefine organizational success through a comprehensive suite of customized business consulting services"],
        WorkForceImg3 : ["WORKFORCE SOLUTIONS", "Let us help you transform your workforce and gain a competitive edge by recruiting Puerto Rican professionals. As American citizens, a smooth onboarding process is guaranteed, eliminating the usual visa complications. By integrating Puerto Rican talent into your organization, you boost operational efficiency and secure a long-term solution to keeping your positions filled."],
        WorkForceImg4 : ["LEADERSHIP RETREATS", "Embark on an immersive leadership experience with your team amidst the captivating landscapes of Puerto Rico at The Greenhouse’s Caribbean Leadership Retreat. This retreat seamlessly blends together intensive training, strategic planning and cultural immersion, offering a unique opportunity to unlock methods that will elevate your organization’s leadership team to conquer the challenges of tomorrow."],
        WorkForceImg5 : ["EXECUTIVE COACHING", "For high-achievers, the internal dialogue constitutes a significant battleground day in and day out. We guide executives like your beyond your internal struggles, propelling you toward your best and most successful self and team."],
    
        ShowMore : "Show More...",
    },
    sp: {
        Provide : ["Proporcionando", "la mejor", "fuerza laboral y soluciones comerciales."],
        Home: "Personal",
        Services: "Servicios",
        ContactUs: "Contáctenos",
        AboutUs: "Sobre nosotros",
        AlreadyCandiate: "Ya es candidato",
        WorkForce: "Nuestros servicios",
        SupplyChain: "Cadena de suministro",
        Consultation: "Haga una cita",
        Jobs: "Trabajos",
        OurMission : "Nuestra misión",
        MissionMessage : "Básicamente, nos dedicamos a capacitar a las personas para que descubran y alcancen sus aspiraciones profesionales. Nuestros servicios integrales están diseñados para guiarlo en cada paso de su viaje, asegurándole que encuentre el camino que mejor se alinee con sus habilidades, pasiones y objetivos.",

        Assist: "Podemos ayudarte a lograr tus objetivos",

        Description: "Clasificada como la empresa líder de la nación en desarrollo de la fuerza laboral y avance profesional, estamos comprometidos a conectar el talento con las oportunidades. Nuestro enfoque innovador no solo fomenta su crecimiento profesional, sino que también mejora su trayectoria profesional, lo que nos convierte en su mejor opción para el éxito en el competitivo mercado laboral actual.",
        StartCareer: "¿Necesitas comenzar una carrera?",
        CareerButton: "Inicia tu viaje profesional aquí",
        Objective : "Objetivo",
        Solution : "solución",
        Cost : "Costo",
        Model : "Modelo",
        ObjectiveMessage: "Contratar profesionales de Puerto Rico es aprovechar su estatus único como ciudadanos estadounidenses, lo que facilita una transición laboral fluida sin las complejidades de los procesos de visa. Los puertorriqueños son conocidos por su adaptabilidad cultural, ya que tienen una mezcla de influencias latinoamericanas y estadounidenses, lo que les permite integrarse eficazmente en diversos entornos laborales. Además, sus capacidades bilingües en inglés y español son un activo valioso en el mercado global actual, ya que ofrecen el potencial para mejorar la comunicación y la extensión en entornos multiculturales. La contratación en Puerto Rico puede mejorar la capacidad operativa y la diversidad de una empresa y proporcionar una ventaja competitiva en la comunicación dentro de la fuerza laboral y con los clientes.",
        SolutionMessage: "Para facilitar la contratación de profesionales puertorriqueños, adaptaremos nuestra búsqueda de candidatos para que coincida con los criterios específicos proporcionados por las empresas. Organizaremos entrevistas vía Zoom o presenciales, según la preferencia de la empresa contratante. A lo largo del proceso, aseguramos una comunicación clara entre ambas partes para establecer un entendimiento mutuo de las expectativas, lo que ayuda a crear una relación laboral exitosa.",
        CostMessage: ["Registro de empresa", "CUBIERTAS ANUNCIOS DE MARKETING", "TODOS LOS TAPETES", "RECLUTAMIENTO Y COLOCACIÓN", "$2,500 POR INDIVIDUO"],
        ModelMessage : ["Investigación", "Investigamos y encontramos conjuntos de habilidades y antecedentes adecuados para el puesto. También examinamos su cultura corporativa para determinar si los candidatos encajarían bien.", "Pantalla y adelante", "Seleccionamos y reenviamos a los candidatos seleccionados que cumplan con su perfil ideal.", "Servicios adicionales", "Podemos ayudar a incorporar empleados y brindar capacitación cultural según sea necesario utilizando un modelo de precios a la carta."],
        LearnMore: "Aprende más",


        WorkForceImg1 : ["CRECIMIENTO EMPRESARIAL A TRAVÉS DE SOLUCIONES EXPERTAS", "Al asociarse con nuestro equipo, aprovechará un crecimiento transformador y una gran experiencia en profesionales experimentados comprometidos con el crecimiento de su negocio hasta la siguiente etapa de éxito. Explore cómo nuestras soluciones impulsarán su visión, fomentando una cultura de responsabilidad, crecimiento e innovación estratégica que beneficie a su organización, sus equipos y sus personas."],
        WorkForceImg2 : ["CONSULTORÍA EN GESTIÓN ESTRATÉGICA", "¿Busca más proyectos basados en experiencia o trabajos basados en consultoría? En The Greenhouse, redefinimos el éxito organizacional a través de un conjunto integral de servicios de consultoría empresarial personalizados."],
        WorkForceImg3 : ["SOLUCIONES PARA LA FUERZA LABORAL", "Permítanos ayudarlo a transformar su fuerza laboral y obtener una ventaja competitiva al reclutar profesionales puertorriqueños. Como ciudadanos estadounidenses, se garantiza un proceso de incorporación fluido, eliminando las complicaciones habituales de las visas. Al integrar el talento puertorriqueño a su organización, aumenta la eficiencia operativa y asegura una solución a largo plazo para mantener sus puestos ocupados."],
        WorkForceImg4 : ["RETIROS DE LIDERAZGO", "Embárquese en una experiencia de liderazgo inmersiva con su equipo en medio de los cautivadores paisajes de Puerto Rico en el Caribbean Leadership Retreat de The Greenhouse. Este retiro combina a la perfección capacitación intensiva, planificación estratégica e inmersión cultural, ofreciendo una oportunidad única para desbloquear métodos que elevarán al equipo de liderazgo de su organización para conquistar los desafíos del mañana."],
        WorkForceImg5 : ["COACHING EJECUTIVO", "Para las personas con grandes logros, el diálogo interno constituye un importante campo de batalla día tras día. Guiamos a ejecutivos como usted más allá de sus luchas internas, impulsándolos hacia su mejor y más exitoso yo y equipo."],
        ShowMore : "mostrar más...",
        
    },
    ku: {
        Provide : ["دابینکردنی", "باشترین", "هێزی کار و چارەسەری بازرگانی"],
        Home: "هێزی کار",
        Services: "خزمەتگووزاریەکان",
        ContactUs: "پەیوەندیمان پێوە بکە",
        AboutUs: "دەربارەی ئێمە",
        AlreadyCandiate: "کارمەندی ئێمەیت",
        WorkForce: "خزمەت گوزاریەکانمان",
        SupplyChain: "زنجیرەی دابینکردن",
        Consultation: "ژووانمان لەگەلا بکە",
        Jobs : "کارەکان",
        OurMission: "ئەرکەکەمان",
        MissionMessage: ".لە ناوەڕۆکەکەماندا، ئێمە تایبەتین بە بەهێزکردنی تاکەکان بۆ دۆزینەوە و گەیشتن بە ئاواتەکانی پیشەیی خۆیان. خزمەتگوزارییە گشتگیرەکانمان بۆ ڕێنماییکردنت لە هەموو هەنگاوێکی گەشتەکەتدا داڕێژراون، دڵنیابوون لەوەی کە ئەو ڕێگایە دەدۆزیتەوە کە بە باشترین شێوە لەگەڵ لێهاتوویی و خولیا و ئامانجەکانتدا دەگونجێت",

        Assist : "دەتوانین یارمەتیت بدەین بۆ گەیشتن بە ئامانجەکانت",

        CareerButton : "لێرەوە گەشتی پیشەکەت دەست پێ بکە",
        Description : "لە ڕیزبەندی کۆمپانیا سەرەکییەکانی وڵاتدا بۆ پەرەپێدانی هێزی کار و پێشخستنی پیشەیی، ئێمە پابەندین بە بەستنەوەی بەهرە بە دەرفەتەوە. ڕێبازی داهێنەرانەمان نەک تەنها گەشەپێدانی پیشەیی تۆ پەروەردە دەکات بەڵکو ڕێڕەوی پیشەکەت بەرز دەکاتەوە، ئەمەش وامان لێدەکات باشترین هەڵبژاردەی تۆ بۆ سەرکەوتن لە بازاڕی کارە کێبڕکێکارەکانی ئەمڕۆدا.",
        StartCareer: "پێویستە دەست بە پیشەیەک بکەیت؟",
        Objective: "ئامانج",
        Solution: "چارەسەر",
        Cost: "نرخ",
        Model: "مۆدێل",
        ObjectiveMessage: "دامەزراندنی کەسانی پیشەیی لە پورتوگالەوە بۆ بەکارهێنانی پێگەی ناوازەی خۆیانە وەک هاوڵاتی ئەمریکی، کە ئاسانکاری دەکات بۆ گواستنەوەی بێ کێشە لە دامەزراندن بەبێ ئاڵۆزییەکانی پرۆسەکانی ڤیزا. پورتوگالیەکان بە گونجانی کولتووری خۆیان ناسراون، کە تێکەڵەیەک لە کاریگەرییەکانی ئەمریکای لاتین و ئەمریکایان هەیە، ئەمەش وایان لێدەکات بە شێوەیەکی کاریگەر تێکەڵ بە ژینگە جۆراوجۆرەکانی کارکردن بن. سەرەڕای ئەوەش، توانا دوو زمانییەکانیان بە زمانی ئینگلیزی و ئیسپانی سەرمایەیەکی بەنرخە لە بازاڕی جیهانی ئەمڕۆدا، کە توانای پەیوەندیکردن و گەیاندنی زیاتر لە شوێنە فرە کولتورییەکاندا پێشکەش دەکات. دامەزراندنی کارمەند لە پورتوگالەوە دەتوانێت توانای کارکردن و هەمەچەشنی کۆمپانیایەک بەرز بکاتەوە، و پێشەنگی کێبڕکێ لە پەیوەندیکردن لەناو هێزی کار و لەگەڵ کڕیارەکاندا دابین بکات.",
        SolutionMessage: "بۆ ئاسانکاری لە دامەزراندنی پیشەییەکانی پورتوگالی، ئێمە گەڕانی کاندیدەکانمان بە شێوەیەک ڕێکدەخەین کە لەگەڵ پێوەرە تایبەتەکانی کۆمپانیاکاندا بگونجێت. ئێمە چاوپێکەوتنەکان لە ڕێگەی زووم یان بە شێوەی کەسی ڕێکدەخەین، بەپێی ئارەزووی کۆمپانیای بەکرێگرتن. بە درێژایی پرۆسەکە، ئێمە پەیوەندییەکی ڕوون لە نێوان هەردوو لایەنەکەدا مسۆگەر دەکەین بۆ دامەزراندنی تێگەیشتنێکی هاوبەش لە چاوەڕوانییەکان، کە یارمەتیدەرە لە دروستکردنی پەیوەندییەکی سەرکەوتووی دامەزراندن.",
        CostMessage: ["واژۆکردنی کۆمپانیا", "ڕیکلامەکانی بەبازاڕکردن دەگرێتەوە", "هەموو کاغەزەکان", "دامەزراندنی کارمەند و جێگیرکردن", "٢٥٠٠ دۆلار بۆ تاکێک"],
        ModelMessage : ["توێژینەوە", "ئێمە لێکۆڵینەوە دەکەین و کۆمەڵە کارامەیی و پاشخانی گونجاو بۆ ئەو پۆستە دەدۆزینەوە. هەروەها ئێمە بە کلتوری کۆمپانیاکەتان دەکۆڵینەوە بۆ ئەوەی بزانین ئایا کاندیدەکان گونجاو دەبن یان نا.", "شاشە و پێشەوە", "ئێمە سکرین و پێشکەشکردنی ئەو کاندیدە سەرکەوتووانەی کە لەگەڵ پرۆفایلی ئایدیاڵتدا دەگونجێت.", "خزمەتگوزاری زیادە", "دەتوانین یارمەتیدەر بین لە وەرگرتنی کارمەندان و ڕاهێنانی کولتووری پێشکەش بکەین بەپێی پێویست بە بەکارهێنانی مۆدێلی نرخدانانی لاکارت."],
        LearnMore : "زانیاری زیاتر",
    
        WorkForceImg1 : ["گەشەسەندنی بازرگانی لە ڕێگەی چارەسەری پسپۆڕانەوە", "بە هاوبەشیکردن لەگەڵ تیمەکەمان، تۆ سوود لە گەشەسەندنی گۆڕانکاری و دەوڵەمەندییەکی شارەزایی لە پیشەگەرە بەئەزموونەکاندا وەردەگریت کە پابەندن بە گەشەپێدانی کارەکەت بۆ قۆناغی داهاتووی سەرکەوتنی. لێکۆڵینەوە بکە کە چۆن چارەسەرەکانمان دیدگاکەت بەرەو پێشەوە دەبەن، پەروەردەکردنی کلتوری لێپرسینەوە، گەشەکردن و داهێنانی ستراتیژی کە سوود بە ڕێکخراوەکەت و تیمەکانت و خەڵکەکەت دەگەیەنێت."],
        WorkForceImg2 : ["ڕاوێژکاری بەڕێوەبردنی ستراتیژی", "بەدوای پڕۆژەیەکی زیاتردا دەگەڕێیت بە سەرکردایەتی شارەزایی یان کارێکی ڕاوێژکاری؟ لە زە گرینهاوس، ئێمە سەرکەوتنی ڕێکخراوەیی لە ڕێگەی کۆمەڵەیەکی گشتگیر لە خزمەتگوزاری ڕاوێژکاری بازرگانی تایبەتمەند پێناسە دەکەینەوە"],
        WorkForceImg3 : ["چارەسەری هێزی کار", "با یارمەتیت بدەین لە گۆڕینی هێزی کارەکەت و بەدەستهێنانی پێشەنگی کێبڕکێ لە ڕێگەی دامەزراندنی پیشەییەکانی پورتوگالی. وەک هاووڵاتییەکی ئەمریکی، پرۆسەیەکی نەرم و نیان بۆ ناو فڕۆکەکە گەرەنتی دەکرێت، کە ئاڵۆزییە ئاساییەکانی ڤیزا لەناو دەچێت. بە تێکەڵکردنی بەهرەمەندە پورتوگالیەکان لە ڕێکخراوەکەتدا، کارایی کارکردنت بەرز دەکەیتەوە و چارەسەرێکی درێژخایەن بۆ پڕکردنەوەی پۆستەکانت دەستەبەر دەکەیت."],
        WorkForceImg4 : ["پاشەکشەی سەرکردایەتی", "دەست بکە بە ئەزموونێکی سەرکردایەتی غوڵامکەر لەگەڵ تیمەکەت لە نێوان دیمەنە سەرنجڕاکێشەکانی پورتوگال لە پاشەکشەی سەرکردایەتی کاریبی The Greenhouse’s Caribbean. ئەم پاشەکشەیە بە شێوەیەکی بێ کێشە ڕاهێنانی چڕ، پلاندانانی ستراتیژی و نوقمبوونی کولتووری تێکەڵ دەکات، دەرفەتێکی ناوازە پێشکەش دەکات بۆ کردنەوەی ئەو شێوازانەی کە تیمی سەرکردایەتی ڕێکخراوەکەت بەرز دەکەنەوە بۆ داگیرکردنی ئاستەنگەکانی سبەینێ."],
        WorkForceImg5 : ["ڕاهێنەری جێبەجێکار", "بۆ ئەوانەی دەستکەوتی بەرزن، گفتوگۆی ناوخۆیی ڕۆژ لە دوای ڕۆژ گۆڕەپانێکی شەڕی بەرچاو پێکدەهێنێت. ئێمە ڕێنمایی کارگێڕانی وەک تۆ دەکەین لە دەرەوەی ململانێ ناوخۆییەکانت، بەرەو باشترین و سەرکەوتووترین خود و تیمەکەت دەتبات."],
        ShowMore : "...بینینی زیاتر",

    }
};
