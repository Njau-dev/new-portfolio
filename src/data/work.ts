import { ClientProject, WorkExperience } from "@/types";


export const workExperiences: WorkExperience[] = [
    {
        id: "lixnet-technologies",
        company: "Lixnet Technologies",
        position: "Team Lead / Full-Stack Developer",
        period: "May 2025 – Nov 2025",
        location: "Remote — Nairobi, Kenya",
        type: "employment",
        overview:
            "Worked on two core company products: an HR & Payroll system and later led development of the Lixnet Marketplace, an e-commerce platform for selling software solutions to small businesses.",
        description: [
            "Stabilized and enhanced an existing HR & Payroll system with primary ownership of the payroll module.",
            "Led a new product team in the design and development of the Lixnet Marketplace e-commerce platform."
        ],
        responsibilities: [
            "Identified and fixed 100+ critical payroll bugs affecting salary calculations and statutory deductions.",
            "Designed and implemented a centralized payroll calculation engine compliant with Kenyan regulations (NSSF, SHIF, Housing Levy).",
            "Refactored legacy Laravel code to improve data validation, accuracy, and reliability of payroll processing.",
            "Built and secured RESTful APIs consumed by a Flutter mobile application using JWT authentication and role-based access control.",
            "Transitioned into a team lead role to architect and develop the Lixnet Marketplace.",
            "Led a team of 4 developers through system design, feature development, code reviews, and sprint planning.",
            "Implemented core e-commerce features including product catalog, cart management, and checkout workflows."
        ],
        achievements: [
            "Stabilized a previously bug-prone payroll system and aligned it with Kenyan statutory compliance requirements.",
            "Delivered a functional and scalable marketplace foundation adopted by the business for software product sales.",
            "Provided technical leadership and mentorship to a small development team during a critical product phase."
        ],
        technologies: [
            "Laravel",
            "MySQL",
            "Blade",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "REST APIs",
            "JWT Authentication",
            "Flutter"
        ],
        metrics: [
            {
                label: "Payroll Bugs Fixed",
                value: "100",
                description: "Critical payroll calculation issues resolved"
            },
            {
                label: "Team Size",
                value: "4",
                description: "Developers led"
            },
            {
                label: "Compliance",
                value: "100%",
                description: "Kenyan statutory payroll rules implemented"
            }
        ],
        teamSize: "4 developers",
        duration: "7 months",
        website: "https://lixnet.net",
        images: [
            "/assets/payroll.png",
            "/assets/payroll-employees.png",
            "/assets/payroll-reports.png",
            "/assets/marketplace.png",
            "/assets/marketplace-agent.png",
            "/assets/marketplace-mobile.png"
        ],
    }
];

export const clientProjects: ClientProject[] = [
    {
        id: "phone-home-kenya",
        clientName: "Phone Home Kenya",
        projectName: "Electronics E-commerce Platform",
        period: "2024 – Present",
        type: "client",
        category: "E-commerce",
        description:
            "Full-stack e-commerce platform for selling electronics with secure payments, role-based access, and scalable infrastructure.",
        technologies: [
            "React",
            "Flask",
            "PostgreSQL",
            "Redis",
            "Cloudinary",
            "M-Pesa API",
            "Nginx"
        ],
        overview:
            "Designed, built, and deployed a production-ready electronics e-commerce platform handling real transactions, inventory management, and media-heavy product catalogs.",
        challenge:
            "The client needed a secure, scalable e-commerce solution with local payment integration (M-Pesa), efficient product management, and proper role-based access control for administrators and customers.",
        solution:
            "Built a full-stack platform with a Flask backend, React frontend, and PostgreSQL database. Integrated M-Pesa API for payments, implemented JWT-based role access, optimized performance using Redis caching, and deployed the system on a VPS using Docker and Nginx.",
        features: [
            "M-Pesa payment integration (production)",
            "Admin and customer role-based access",
            "Product catalog with pagination",
            "Image management via Cloudinary",
            "Redis caching for performance",
            "Dockerized VPS deployment"
        ],
        metrics: [
            {
                label: "Products Managed",
                value: "100+",
                description: "Product images handled via Cloudinary"
            },
            {
                label: "Transactions",
                value: "10+",
                description: "Completed real payments"
            }
        ],
        images: [
            "/assets/phk-landing.png",
            "/assets/phk-shop.png",
            "/assets/phk-detail.png",
            "/assets/phk-profile.png",
            "/assets/phk-mpesa.png",
            "/assets/phk-mobile.png",
            "/assets/phk-mobile-2.png",
            "/assets/phk-mobile-3.png",
        ],
        testimonial: {
            text:
                "The platform works exactly as we needed. Payments are reliable, the admin system is easy to use, and performance has been solid even with many products.",
            author: "Emmanuel Juma",
            role: "Phone Home Kenya"
        },
        liveUrl: "https://www.phonehome.co.ke"
    },
    {
        id: "audiopine-solutions",
        clientName: "AudioPine Solutions",
        projectName: "Agency Website",
        period: "2024 – 2025",
        type: "client",
        category: "Agency / Business",
        description:
            "Agency website built to showcase services, attract clients, and support digital solutions delivery.",
        technologies: ["React", "Tailwind CSS", "VPS Hosting"],
        overview:
            "Designed and deployed the AudioPine Solutions website, managing the full lifecycle from layout design to production deployment.",
        challenge:
            "The agency required a professional online presence to clearly communicate services, attract new clients, and support business growth.",
        solution:
            "Built a responsive, SEO-friendly website with clear service sections and inquiry flows, deployed on a VPS for reliability and performance.",
        features: [
            "Service showcase pages",
            "Responsive layout",
            "Client inquiry flow",
            "SEO-friendly structure"
        ],
        images: [
            "/assets/audiopine-landing.png",
            "/assets/audiopine-light.png",
            "/assets/audiopine-services.png",
        ],
        testimonial: {
            text:
                "The website gave our agency a professional image and helped us attract new clients quickly.",
            author: "Clinton",
            role: "AudioPine Solutions"
        },
        liveUrl: "https://audiopinesolutions.co.ke"
    },
    {
        id: "whitehorse-funeral-services",
        clientName: "Whitehorse Funeral Services",
        projectName: "Business Website",
        period: "2025",
        type: "client",
        category: "Business Website",
        description:
            "Static business website built to present services clearly and allow clients to make inquiries online.",
        technologies: ["HTML", "CSS", "JavaScript"],
        overview:
            "Developed a lightweight, accessible business website focused on clarity, speed, and ease of contact.",
        challenge:
            "The client needed an affordable online presence to communicate services and receive inquiries without complex backend systems.",
        solution:
            "Built a static website using HTML, CSS, and JavaScript with a responsive layout and a simple client-side contact form, hosted via GitHub Pages.",
        features: [
            "Responsive layout",
            "Service information pages",
            "JavaScript-powered contact form",
            "Fast-loading static pages"
        ],
        images: [
            "/assets/whitehorse-landing.png",
            "/assets/whitehorse-services.png",
            "/assets/whitehorse-testimonials.png",
            "/assets/whitehorse-mobile.png"
        ],
        testimonial: {
            text:
                "The website is simple, clear, and easy for our clients to use. It meets exactly what we needed.",
            author: "Owner",
            role: "Whitehorse Funeral Services"
        },
        liveUrl: "https://njau-dev.github.io/Whitehorse-Funeral-Services/"
    },
    {   
        id: "easybank-info",
        clientName: "EasyBank",
        projectName: "Informational Banking Website",
        period: "2024",
        type: "client",
        category: "Informational Website",
        description:
            "Informational website designed to present banking products, services, and institutional information.",
        technologies: ["HTML", "CSS", "JavaScript"],
        overview:
            "Built an informational banking website as part of a school project, delivered using real-world client-style requirements.",
        challenge:
            "The goal was to present banking information clearly and professionally without transactional functionality.",
        solution:
            "Designed a multi-page static website with clean navigation, responsive layouts, and structured service sections using HTML, CSS, and JavaScript.",
        features: [
            "Multi-page informational layout",
            "Service and product sections",
            "Responsive design",
            "Clear navigation structure"
        ],
        images: [
            "/assets/easybank.png",
            "/assets/easybank-1.png",
            "/assets/easybank-about.png",
            "/assets/easybank-mobile.png"
        ],
        liveUrl: "https://easy-bank-web-page.vercel.app/"
    },
    {
        id: "kipepeo-digital",
        clientName: "Kipepeo Digital",
        projectName: "Digital Marketing Agency Website",
        period: "2025",
        type: "client",
        category: "Agency / Marketing",
        description:
            "Agency website for a digital marketing firm focused on enhancing digital experiences and influencer marketing.",
        technologies: ["Wix", "SEO", "Content Management"],
        overview:
            "Designed and launched the Kipepeo Digital website and continue to provide maintenance, SEO optimization, and social media management.",
        challenge:
            "The agency needed a strong digital presence to showcase services, attract clients, and improve search visibility.",
        solution:
            "Built the website using Wix, optimized on-page SEO, and provided ongoing site maintenance and social media management support.",
        features: [
            "Service showcase pages",
            "SEO optimization",
            "Ongoing site maintenance",
            "Social media management support",
            "Responsive layout",
            "Chatbot integration"
        ],
        images: [
            "/assets/kipepeo.png",
            "/assets/kipepeo-1.png",
            "/assets/kipepeo-about.png",
            "/assets/kipepeo-about-1.png",
            "/assets/kipepeo-seo.png",
        ],
        testimonial: {
            text:
                "Our online visibility and branding improved significantly after the website launch and SEO updates.",
            author: "Ben",
            role: "Kipepeo Digital"
        },
        liveUrl: "https://www.kipepeodigital.co.ke"
    }
];
