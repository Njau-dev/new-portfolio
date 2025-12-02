import { ClientProject, WorkExperience } from "@/types";


export const workExperiences: WorkExperience[] = [
    {
        id: "tech-company-senior",
        company: "Tech Company",
        position: "Senior Frontend Developer",
        period: "2023 - Present",
        location: "Remote",
        type: 'employment',
        description: [
            "Led development of responsive web applications using Next.js and React",
            "Collaborated with cross-functional teams to deliver high-quality products",
            "Implemented modern UI/UX designs with Tailwind CSS",
            "Optimized application performance and accessibility"
        ],
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "GraphQL"],
        overview: "Leading frontend development initiatives for a fast-growing tech company, focusing on building scalable web applications that serve thousands of users daily.",
        responsibilities: [
            "Architecting and developing new features for the main product dashboard",
            "Mentoring junior developers and conducting code reviews",
            "Collaborating with product managers and designers on feature planning",
            "Implementing automated testing and CI/CD pipelines",
            "Optimizing application performance and Core Web Vitals"
        ],
        achievements: [
            "Reduced initial page load time by 60% through code splitting and optimization",
            "Led migration from Create React App to Next.js, improving SEO and performance",
            "Established component library used across 5 different products",
            "Improved accessibility score from 72 to 98 on Lighthouse audits"
        ],
        metrics: [
            {
                label: "Performance Boost",
                value: "60%",
                description: "Faster page load times"
            },
            {
                label: "Code Coverage",
                value: "85%",
                description: "Test coverage achieved"
            },
            {
                label: "User Satisfaction",
                value: "4.8/5",
                description: "Average user rating"
            }
        ],
        images: ["/assets/hero_image.png", "/assets/cli.png"],
        teamSize: "8 developers",
        duration: "1.5 years",
        website: "https://example.com"
    },
    {
        id: "digital-agency-frontend",
        company: "Digital Agency",
        position: "Frontend Developer",
        period: "2022 - 2023",
        location: "Nairobi, Kenya",
        type: 'employment',
        description: [
            "Developed and maintained client websites and web applications",
            "Worked closely with designers to implement pixel-perfect designs",
            "Integrated RESTful APIs and third-party services",
            "Ensured cross-browser compatibility and responsive design"
        ],
        technologies: ["React", "JavaScript", "CSS", "Git", "Figma"],
        overview: "Delivered high-quality web solutions for diverse clients ranging from startups to established businesses across various industries.",
        responsibilities: [
            "Building responsive websites from design mockups",
            "Integrating payment gateways and third-party APIs",
            "Maintaining and updating existing client websites",
            "Collaborating with backend developers on API design",
            "Providing technical estimates and project timelines"
        ],
        achievements: [
            "Successfully delivered 15+ client projects on time and within budget",
            "Improved development workflow by introducing component-based architecture",
            "Reduced bug reports by 40% through comprehensive testing",
            "Received 5-star ratings from 12 out of 15 clients"
        ],
        metrics: [
            {
                label: "Projects Delivered",
                value: "15+",
                description: "Successfully completed"
            },
            {
                label: "Client Satisfaction",
                value: "96%",
                description: "Positive feedback rate"
            },
            {
                label: "Bug Reduction",
                value: "40%",
                description: "Fewer issues reported"
            }
        ],
        images: ["/assets/mini-shop.png", "/assets/payroll.png"],
        teamSize: "5 developers",
        duration: "1 year"
    },
    {
        id: "startup-junior",
        company: "Startup Co",
        position: "Junior Developer",
        period: "2021 - 2022",
        location: "Nairobi, Kenya",
        type: 'employment',
        description: [
            "Built reusable components and frontend libraries",
            "Participated in code reviews and agile development processes",
            "Contributed to improving development workflows",
            "Learned and applied best practices in web development"
        ],
        technologies: ["HTML", "CSS", "JavaScript", "React", "Redux"],
        overview: "Started my professional journey in a dynamic startup environment, contributing to the development of the company's core product while rapidly expanding my technical skills.",
        responsibilities: [
            "Developing UI components following design system guidelines",
            "Writing unit tests for components and functions",
            "Participating in daily standups and sprint planning",
            "Documenting code and creating technical guides",
            "Fixing bugs and implementing minor features"
        ],
        achievements: [
            "Built a reusable form component library used across the application",
            "Improved form validation reducing user errors by 35%",
            "Contributed to 50+ pull requests in the first 6 months",
            "Received 'Rising Star' award for quick learning and contributions"
        ],
        metrics: [
            {
                label: "Components Built",
                value: "25+",
                description: "Reusable UI components"
            },
            {
                label: "Error Reduction",
                value: "35%",
                description: "Fewer form errors"
            },
            {
                label: "Pull Requests",
                value: "50+",
                description: "In first 6 months"
            }
        ],
        images: ["/assets/about-image.png"],
        teamSize: "3 developers",
        duration: "1 year"
    }
];

export const clientProjects: ClientProject[] = [
    {
        id: "ecommerce-fashion",
        clientName: "Fashion Boutique Ltd",
        projectName: "Modern E-commerce Platform",
        period: "Q3 2024",
        type: 'client',
        category: "E-commerce",
        description: "Built a full-featured e-commerce platform with shopping cart, payment integration, and inventory management for a growing fashion boutique.",
        technologies: ["Next.js", "Stripe", "Tailwind CSS", "Prisma", "PostgreSQL"],
        overview: "Developed a modern, mobile-first e-commerce platform that increased online sales by 150% within the first three months of launch.",
        challenge: "The client had an outdated website with poor mobile experience and no proper inventory management, resulting in lost sales and customer frustration.",
        solution: "Created a responsive Next.js application with real-time inventory updates, seamless checkout experience, and integrated analytics to track customer behavior and optimize conversions.",
        features: [
            "Real-time inventory synchronization",
            "Secure payment processing with Stripe",
            "Advanced product filtering and search",
            "Customer accounts and order history",
            "Admin dashboard for inventory management",
            "Email notifications for orders and shipping"
        ],
        metrics: [
            {
                label: "Sales Increase",
                value: "150%",
                description: "Growth in first 3 months"
            },
            {
                label: "Mobile Conversions",
                value: "85%",
                description: "Of total transactions"
            },
            {
                label: "Page Speed",
                value: "95/100",
                description: "Google PageSpeed score"
            }
        ],
        images: ["/assets/mini-shop.png", "/assets/hero_image.png"],
        testimonial: {
            text: "Jeff transformed our online presence completely. Our sales have more than doubled, and customers love the new website. Highly recommended!",
            author: "Sarah Johnson",
            role: "Owner, Fashion Boutique Ltd"
        },
        liveUrl: "https://fashionboutique.example.com"
    },
    {
        id: "saas-payroll",
        clientName: "PayFlow Solutions",
        projectName: "Cloud Payroll Management System",
        period: "Q1 2024",
        type: 'client',
        category: "SaaS",
        description: "Developed a comprehensive payroll management system for small to medium businesses with automated tax calculations and reporting.",
        technologies: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
        overview: "Built a scalable SaaS platform that streamlines payroll processing for SMBs, reducing processing time from hours to minutes.",
        challenge: "Small businesses were struggling with manual payroll calculations, tax compliance, and generating reports, leading to errors and wasted time.",
        solution: "Designed and developed an intuitive payroll system with automated calculations, tax compliance features, and one-click report generation that integrates with popular accounting software.",
        features: [
            "Automated salary and tax calculations",
            "Employee self-service portal",
            "Direct deposit integration",
            "Compliance with tax regulations",
            "Customizable payslip templates",
            "Multi-company management"
        ],
        metrics: [
            {
                label: "Time Saved",
                value: "80%",
                description: "Payroll processing time"
            },
            {
                label: "Active Users",
                value: "500+",
                description: "Businesses using platform"
            },
            {
                label: "Accuracy",
                value: "99.9%",
                description: "Calculation accuracy"
            }
        ],
        images: ["/assets/payroll.png", "/assets/cli.png"],
        testimonial: {
            text: "This system has been a game-changer for our business. What used to take us 4 hours now takes 20 minutes. The ROI was immediate.",
            author: "Michael Chen",
            role: "CFO, PayFlow Solutions"
        },
        liveUrl: "https://payflow.example.com"
    },
    {
        id: "portfolio-architect",
        clientName: "Design Studio Pro",
        projectName: "Interactive Portfolio Website",
        period: "Q4 2023",
        type: 'client',
        category: "Portfolio",
        description: "Created a stunning portfolio website for an architecture firm featuring 3D model viewers and immersive project galleries.",
        technologies: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
        overview: "Developed an award-winning portfolio website that showcases architectural projects through interactive 3D models and smooth animations.",
        challenge: "The client needed a way to present their architectural projects in an engaging, interactive format that would stand out from traditional portfolio sites.",
        solution: "Built a cutting-edge website featuring WebGL-powered 3D model viewers, smooth page transitions, and an immersive gallery experience that brings architectural designs to life.",
        features: [
            "Interactive 3D model viewers",
            "Smooth scroll animations",
            "Project filtering by category",
            "Lightbox gallery with zoom",
            "Contact form with validation",
            "Blog section for updates"
        ],
        metrics: [
            {
                label: "Engagement",
                value: "320%",
                description: "Increase in time on site"
            },
            {
                label: "Inquiries",
                value: "65%",
                description: "More client inquiries"
            },
            {
                label: "Awards",
                value: "3",
                description: "Design awards won"
            }
        ],
        images: ["/assets/about-image.png", "/assets/hero_image.png"],
        testimonial: {
            text: "Our new portfolio has been incredible for business. Potential clients are blown away by the interactive 3D models. Worth every penny!",
            author: "Elena Rodriguez",
            role: "Principal Architect, Design Studio Pro"
        },
        liveUrl: "https://designstudiopro.example.com"
    }
];