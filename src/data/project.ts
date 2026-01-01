import { Project } from "@/types/project";

export const projects: Project[] = [

    // ======================
    // WEB PROJECTS
    // ======================
    {
        id: "phone-home-kenya",
        title: "Phone Home Kenya",
        description: "Electronics e-commerce platform with local payment integration",
        imageUrl: "/assets/phk-landing.png",
        techStack: ["React", "Flask", "PostgreSQL", "Redis", "Cloudinary", "M-Pesa API"],
        category: "web",
        links: {
            github: "https://github.com/Njau-dev/PhoneHome",
            live: "https://phonehome.co.ke"
        },
        overview:
            "A production-ready electronics e-commerce platform supporting real payments, inventory management, and media-heavy product catalogs.",
        features: [
            "M-Pesa payment integration",
            "Admin and customer role-based access",
            "Product catalog with pagination",
            "Complete order management system",
            "Redis caching for performance",
            "Cloudinary image management"
        ],
        challenges:
            "Building a scalable e-commerce system with local payment support while maintaining performance with hundreds of products.",
        solutions:
            "Implemented a Flask backend with PostgreSQL, integrated M-Pesa payments, optimized performance using Redis caching, and deployed using Docker and Nginx.",
        company: "Phone Home Kenya",
        duration: "Ongoing",
        role: "Full-Stack Developer",
        screenshots: [
            "/assets/phk-landing.png",
            "/assets/phk-shop.png",
            "/assets/phk-detail.png",
            "/assets/phk-profile.png",
            "/assets/phk-mpesa.png",
            "/assets/phk-mobile.png",
            "/assets/phk-mobile-2.png",
            "/assets/phk-mobile-3.png",
        ]
    },
    {
        id: "lixnet-marketplace",
        title: "Lixnet Marketplace",
        description: "SaaS marketplace for selling software solutions to businesses",
        imageUrl: "/assets/marketplace.png",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Laravel", "MySQL"],
        category: "web",
        links: {
            github: "https://github.com/Njau-dev/lixnet-marketplace",
            live: "https://lixnet.net"
        },
        overview:
            "An e-commerce marketplace designed for selling SaaS and software solutions to small businesses.",
        features: [
            "Product listing and browsing",
            "Cart and checkout flow",
            "PesaPal payment integration",
            "Sales Agents role management",
            "Admin product management"
        ],
        challenges:
            "Delivering a scalable marketplace architecture within a tight timeline.",
        solutions:
            "Used a monorepo setup with React and Laravel, implemented clean APIs, and focused on modular feature delivery.",
        company: "Lixnet Technologies",
        duration: "4 months",
        role: "Team Lead / Full-Stack Developer",
        screenshots: [
            "/assets/marketplace.png",
            "/assets/marketplace-agent.png",
            "/assets/marketplace-mobile.png"
        ]
    },
    {
        id: "lixnet-hr-payroll",
        title: "HR & Payroll System",
        description: "Employee management and payroll compliance system",
        imageUrl: "/assets/payroll.png",
        techStack: ["Laravel", "Blade", "MySQL"],
        category: "web",
        links: {
            github: "https://github.com/lixcoder/payroll-prod",
            live: "https://evolvepayroll.lixnet.net"
        },
        overview:
            "An internal HR and payroll system focused on accurate salary calculations and statutory compliance.",
        features: [
            "Payroll calculation engine",
            "Statutory deductions (NSSF, SHIF, Housing Levy)",
            "Employee management",
            "Role-based access",
            "Payslip and reports generation",
            "Email payslip delivery"
        ],
        challenges:
            "Stabilizing a bug-prone payroll module with complex compliance rules.",
        solutions:
            "Refactored legacy Laravel code and introduced centralized payroll logic aligned with Kenyan regulations.",
        company: "Lixnet Technologies",
        duration: "3 months",
        role: "Full-Stack Developer",
        screenshots: [
            "/assets/payroll.png",
            "/assets/payroll-employees.png",
            "/assets/payroll-reports.png"
        ]
    },
    {
        id: "mini-shop",
        title: "MiniShop",
        description: "Fashion e-commerce application",
        imageUrl: "/assets/mini-shop.png",
        techStack: ["React", "TypeScript", "Laravel", "MySQL", "Tailwind CSS"],
        category: "web",
        links: {
            github: "https://github.com/Njau-dev/Mini-shop"
        },
        overview:
            "A fashion-focused e-commerce application built to explore full-stack product flows.",
        challenges:
            "Implementing a complete e-commerce flow with product management, cart functionality, and responsive design.",
        solutions:
            "Developed a React frontend with TypeScript and Tailwind CSS, and a Laravel backend for robust API handling and data management.",
        features: [
            "Product catalog",
            "Category filtering",
            "Cart functionality",
            "Responsive UI",
            "Admin product management"
        ],
        company: "Personal Project",
        duration: "1 month",
        role: "Full-Stack Developer",
        screenshots: ["/assets/mini-shop.png"]
    },
    {
        id: "audiopine-solutions",
        title: "AudioPine Solutions",
        description: "Agency landing page for digital solutions",
        imageUrl: "/assets/audiopine-landing.png",
        techStack: ["Vue 3", "Tailwind CSS"],
        category: "web",
        links: {
            github: "https://github.com/Njau-dev/Audio-pine-Solutions",
            live: "https://audiopinesolutions.co.ke"
        },
        overview:
            "A clean agency website built to showcase services and attract clients.",
        challenges:
            "Creating an engaging landing page that effectively communicates services and captures leads.",
        solutions:
            "Developed a responsive Vue 3 application with Tailwind CSS, focusing on clear service sections and lead capture forms.",
        features: [
            "Landing page",
            "Lead capture form",
            "Service sections",
            "Responsive layout",
            "Client inquiry sections"
        ],
        company: "AudioPine Solutions",
        duration: "2 months",
        role: "Frontend Developer",
        screenshots: [
            "/assets/audiopine-landing.png",
            "/assets/audiopine-light.png",
            "/assets/audiopine-services.png"
        ]
    },
    {
        id: "easybank",
        title: "EasyBank",
        description: "Informational banking website",
        imageUrl: "/assets/easybank.png",
        techStack: ["HTML", "CSS", "JavaScript"],
        category: "web",
        links: {
            github: "https://github.com/Njau-dev/Easy-Bank-web-page",
            live: "https://easy-bank-web-page.vercel.app/"
        },
        overview:
            "An informational website presenting banking products and services.",
        challenges:
            "Designing a multi-page website that effectively showcases banking services while ensuring user engagement.",
        solutions:
            "Developed a clean, easy-to-navigate site using HTML, CSS, and JavaScript with a focus on user experience and responsive design.",
        features: [
            "Multi-page informational layout",
            "Service and Blog sections",
            "Responsive design",
            "Clear navigation structure"
        ],
        company: "School Project",
        duration: "1 month",
        role: "Frontend Developer",
        screenshots: [
            "/assets/easybank.png",
            "/assets/easybank-1.png",
            "/assets/easybank-about.png",
            "/assets/easybank-mobile.png"
        ]
    },
    {
        id: "whitehorse-funeral",
        title: "Whitehorse Funeral Services",
        description: "Business website for funeral services",
        imageUrl: "/assets/whitehorse-landing.png",
        techStack: ["HTML", "CSS", "JavaScript"],
        category: "web",
        links: {
            github: "https://github.com/Njau-dev/Whitehorse-Funeral-Services",
            live: "https://njau-dev.github.io/Whitehorse-Funeral-Services/"
        },
        overview:
            "A lightweight business website designed to clearly communicate services and contact information.",
        challenges:
            "Creating a multi-page website that effectively presents funeral services while maintaining a respectful tone.",
        solutions:
            "Developed a clean, easy-to-navigate site using HTML, CSS, and JavaScript with a focus on user experience and accessibility.",
        features: [
            "Multi-page informational layout",
            "Service and Blog sections",
            "Responsive design",
            "Clear navigation structure"
        ],
        company: "Whitehorse Funeral Services",
        duration: "1 month",
        role: "Web Developer",
        screenshots: [
            "/assets/whitehorse-landing.png",
            "/assets/whitehorse-services.png",
            "/assets/whitehorse-testimonials.png",
            "/assets/whitehorse-mobile.png"
        ]
    },
    {
        id: "hsp-booking",
        title: "HSP - Home Service Providers",
        description: "Service booking web application",
        imageUrl: "/assets/hsp.png",
        techStack: ["Laravel", "React", "TypeScript", "Tailwind CSS", "MySQL"],
        category: "web",
        links: {
            github: "https://github.com/Njau-dev/Home-Service-Providers"
        },
        overview:
            "A service booking platform allowing customers to book and manage services online and service providers to attain customer bookings.",
        challenges:
            "Designing a dual-role system to cater to both customers and service providers with real-time booking capabilities.",
        solutions:
            "Implemented a Laravel backend with React frontend, created role-based access, and integrated Mpesa for seamless payments.",
        features: [
            "Seamless Booking management",
            "Real - Time Tracking",
            "Mpesa Payment Integration",
            "Smart Search & Filtering",
            "Reviews & Ratings"
        ],
        company: "Personal Project",
        duration: "2 months",
        role: "Full-Stack Developer",
        screenshots: ["/assets/hsp.png", "/assets/hsp-1.png"]
    },
    {
        id: "school-system",
        title: "School Assignment System",
        description: "Assignment and submission management system",
        imageUrl: "/assets/ss-student.png",
        techStack: ["React", "Tailwind CSS", "Node.js", "MySQL"],
        category: "web",
        links: {
            live: "https://school-system-beta.vercel.app",
            github: "https://github.com/Njau-dev/school-system"
        },
        overview:
            "A system designed to manage student assignments and submissions with a frontend-first approach.",
        challenges:
            "Creating an intuitive interface for both students and lecturers to manage assignments effectively.",
        solutions:
            "Developed a React frontend with Tailwind CSS for responsiveness, and a Node.js backend for handling assignment data and submissions.",
        features: [
            "Assignment listings",
            "Submission tracking",
            "View active assignments",
            "Grade student submissions",
            "Responsive UI"
        ],
        company: "School Project",
        duration: "2 months",
        role: "Frontend Developer",
        screenshots: [
            "/assets/ss-student.png",
            "/assets/ss-lecturer.png",
            "/assets/ss-admin.png"
        ]
    },

    // ======================
    // MOBILE PROJECTS
    // ======================
    {
        id: "local-loop",
        title: "Local Loop",
        description: "Volunteer management mobile application",
        imageUrl: "/assets/about-image.png",
        techStack: ["Flutter", "Firebase"],
        category: "mobile",
        platform: "Cross-platform",
        links: {
            github: "https://github.com/Njau-dev/local-loop-flutter"
        },
        overview:
            "A mobile app connecting NGOs and volunteers with attendance tracking and role-based access.",
        challenges:
            "Designing an intuitive mobile experience for volunteer management with scheduling capabilities.",
        solutions:
            "Utilized Flutter for cross-platform development and Firebase for real-time data syncing and authentication.",
        features: [
            "Volunteer onboarding",
            "QR-based attendance tracking",
            "Role-based access control",
            "Badges and certifications",
            "Participation tracking"
        ],
        company: "Personal Project",
        duration: "3 months",
        role: "Mobile Developer",
        screenshots: ["/assets/about-image.png"]
    },

    // ======================
    // CLI PROJECTS
    // ======================
    {
        id: "scaffold-cli",
        title: "Scaffold CLI",
        description: "A modern, interactive CLI tool for quickly scaffolding development projects with best practices built-in.",
        imageUrl: "/assets/scaffold.png",
        techStack: ["Python", "Typer", "Rich", "Pytest"],
        category: "cli",
        links: {
            github: "https://github.com/Njau-dev/scaffold-cli"
        },
        overview:
            "A CLI tool that helps developers scaffold projects and inspect templates quickly.",
        features: [
            "Interactive project scaffolding",
            "Multiple tech stacks",
            "Monorepo & Docker compose support",
            "Git & Docker integration",
            "Dependency validation",
            "Environment setup assistance"
        ],
        challenges:
            "Creating an intuitive CLI experience while managing diverse project templates and configurations.",
        solutions:
            "Leveraged Typer for CLI structure, Rich for enhanced terminal UI, and modularized template handling for scalability.",
        installCommand: "pipx install scaffold-cli",
        terminalUrl: "https://scaffold-cli-playground.fly.dev",
        cliCommands: [
            {
                command: 'scaffold new [project-name]',
                description: 'Initialize a new project with template selection',
                example: 'scaffold new my-app'
            },
            {
                command: 'scaffold info',
                description: 'Display information about the tool and its capabilities',
                example: 'scaffold info'
            },
            {
                command: 'scaffold version',
                description: 'Show the current version of the CLI tool',
                example: 'scaffold version'
            },
            {
                command: 'scaffold list',
                description: 'List all available project templates',
                example: 'scaffold list'
            }
        ],
        company: "Open Source",
        duration: "2 months",
        role: "Creator & Maintainer",
        screenshots: [
            "/assets/scaffold.png",
            "/assets/scaffold-info.png",
            "/assets/scaffold-list.png",
            "/assets/scaffold-version.png",
            "/assets/cli.png",
            "/assets/dependency-test.png"
        ]
    },

    // ======================
    // NO CODE PROJECTS
    // ======================
    {
        id: "kipepeo-digital",
        title: "Kipepeo Digital",
        description: "Digital marketing agency website",
        imageUrl: "/assets/kipepeo-1.png",
        techStack: ["Wix", "SEO"],
        category: "nocode",
        noCodePlatform: "Wix",
        links: {
            live: "https://www.kipepeodigital.co.ke"
        },
        overview:
            "Agency website focused on digital marketing, influencer marketing, and brand visibility.",
        features: [
            "Lead capture forms",
            "Service showcase pages",
            "SEO optimization",
            "Micro Influencer marketing",
            "Content management"
        ],
        company: "Kipepeo Digital",
        duration: "Ongoing",
        role: "Web Developer, Maintainer & Digital Support",
        challenges: "Maintaining a dynamic web design and improving digital presence.",
        solutions: "Utilized Wix's design tools for a modern look and implemented SEO best practices to boost visibility.",
        screenshots: [
            "/assets/kipepeo.png",
            "/assets/kipepeo-1.png",
            "/assets/kipepeo-about.png",
            "/assets/kipepeo-about-1.png",
            "/assets/kipepeo-seo.png",
        ]
    }
];

// Helper function to get projects by category
export const getProjectsByCategory = (category: string) => {
    return projects.filter(project => project.category === category);
};

// Get all unique categories
export const categories = [
    { value: 'web', label: 'Web Apps', count: projects.filter(p => p.category === 'web').length },
    { value: 'mobile', label: 'Mobile Apps', count: projects.filter(p => p.category === 'mobile').length },
    { value: 'cli', label: 'CLI Tools', count: projects.filter(p => p.category === 'cli').length },
    { value: 'nocode', label: 'No-Code', count: projects.filter(p => p.category === 'nocode').length }
];