import { Project } from "@/types/project";

export const projects: Project[] = [
    // Web Projects
    {
        id: 'web-1',
        title: 'E-commerce Platform',
        description: 'Full-featured online shopping platform with payment integration',
        imageUrl: '/assets/mini-shop.png',
        techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
        category: 'web',
        links: {
            github: 'https://github.com/Njau-dev/PhoneHome',
            live: 'https://ecommerce-demo.com'
        },
        overview: 'A modern e-commerce platform built with Next.js featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.',
        features: [
            'Real-time inventory synchronization',
            'Secure payment processing with Stripe',
            'Advanced product filtering and search',
            'Customer accounts and order history',
            'Admin dashboard for inventory management',
            'Email notifications for orders'
        ],
        challenges: 'Managing real-time inventory across multiple warehouses while ensuring data consistency and handling high traffic during sales events.',
        solutions: 'Implemented Redis caching for inventory data, used PostgreSQL with optimistic locking, and deployed on Vercel edge network for global performance.',
        company: 'Freelance',
        duration: '3 months',
        role: 'Full Stack Developer',
        screenshots: ['/assets/mini-shop.png', '/assets/hero_image.png']
    },
    {
        id: 'web-2',
        title: 'Minecraft Servers Hosting',
        description: 'Minecraft server hosting platform with automated deployment',
        imageUrl: '/assets/cli.png',
        techStack: ['HTML', 'SCSS', 'Python', 'Flask'],
        category: 'web',
        links: {
            github: '#',
            cached: '#'
        },
        overview: 'A web platform that allows users to easily deploy and manage Minecraft servers with one-click setup and automated backups.',
        features: [
            'One-click server deployment',
            'Automated backups',
            'Server monitoring dashboard',
            'Plugin marketplace',
            'User management system'
        ],
        company: 'Personal Project',
        duration: '2 months',
        role: 'Solo Developer',
        screenshots: ['/assets/cli.png']
    },
    {
        id: 'web-3',
        title: 'Discord Anti-Crash Bot',
        description: 'Advanced Discord bot for server protection',
        imageUrl: '/assets/payroll.png',
        techStack: ['React', 'Express', 'Discord.js', 'Node.js'],
        category: 'web',
        links: {
            github: '#'
        },
        overview: 'A comprehensive Discord bot with web dashboard for managing server security, moderation, and automated responses.',
        features: [
            'Real-time threat detection',
            'Automated moderation actions',
            'Customizable command system',
            'Web dashboard for configuration',
            'Analytics and logging'
        ],
        company: 'Open Source',
        duration: '4 months',
        role: 'Lead Developer',
        collaborators: [
            {
                name: 'John Doe',
                role: 'Backend Developer',
                github: 'https://github.com/johndoe'
            }
        ],
        screenshots: ['/assets/payroll.png']
    },

    // Mobile Projects
    {
        id: 'mobile-1',
        title: 'Fitness Tracker App',
        description: 'Cross-platform fitness tracking mobile application',
        imageUrl: '/assets/about-image.png',
        techStack: ['React Native', 'TypeScript', 'Firebase', 'Redux'],
        category: 'mobile',
        platform: 'Cross-platform',
        links: {
            github: '#',
            appStore: '#',
            playStore: '#'
        },
        overview: 'A comprehensive fitness tracking app that helps users monitor their workouts, nutrition, and progress with AI-powered recommendations.',
        features: [
            'Workout tracking with timer',
            'Nutrition logging and calorie counter',
            'Progress charts and analytics',
            'AI-powered workout recommendations',
            'Social features and challenges',
            'Integration with wearable devices'
        ],
        company: 'Startup Co',
        duration: '6 months',
        role: 'Mobile Developer',
        screenshots: ['/assets/about-image.png', '/assets/hero_image.png']
    },

    // CLI Projects
    {
        id: 'cli-1',
        title: 'Scaffold CLI',
        description: 'Command-line tool for developer productivity',
        imageUrl: '/assets/cli.png',
        techStack: ['Python', 'Typer', 'Poetry', 'Rich'],
        category: 'cli',
        links: {
            github: 'https://github.com/Njau-dev/scaffold-cli'
        },
        overview: 'A powerful CLI tool that automates common development tasks, from project scaffolding to deployment automation.',
        features: [
            'Project scaffolding with templates',
            'Git workflow automation',
            'Environment management',
            'Code generation utilities',
            'Deployment helpers'
        ],
        installCommand: 'pipx install scaffold-cli',
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
        readmeUrl: '#',
        company: 'Open Source',
        duration: '2 months',
        role: 'Creator & Maintainer',
        screenshots: ['/assets/cli.png']
    },

    // No-Code Projects
    {
        id: 'nocode-1',
        title: 'Boutique Fashion Store',
        description: 'E-commerce store built on Shopify',
        imageUrl: '/assets/mini-shop.png',
        techStack: ['Shopify', 'Liquid', 'JavaScript', 'CSS'],
        category: 'nocode',
        noCodePlatform: 'Shopify',
        links: {
            live: 'https://boutique-demo.myshopify.com'
        },
        overview: 'A fully customized Shopify store for a fashion boutique featuring custom theme development and third-party app integrations.',
        features: [
            'Custom Shopify theme',
            'Product recommendations engine',
            'Customer loyalty program',
            'Instagram feed integration',
            'Advanced filtering system',
            'Newsletter automation'
        ],
        company: 'Freelance Client',
        duration: '1 month',
        role: 'Shopify Developer',
        screenshots: ['/assets/mini-shop.png', '/assets/hero_image.png']
    },
    {
        id: 'nocode-2',
        title: 'Restaurant Website',
        description: 'Modern restaurant website with online ordering',
        imageUrl: '/assets/about-image.png',
        techStack: ['Wix', 'Velo', 'JavaScript'],
        category: 'nocode',
        noCodePlatform: 'Wix',
        links: {
            live: '#'
        },
        overview: 'A beautiful restaurant website with online menu, reservations, and ordering system built on Wix with custom Velo code.',
        features: [
            'Interactive menu with filtering',
            'Online reservation system',
            'Delivery/pickup ordering',
            'Payment integration',
            'Email notifications',
            'Mobile responsive design'
        ],
        company: 'Local Restaurant',
        duration: '3 weeks',
        role: 'Web Designer & Developer',
        screenshots: ['/assets/about-image.png']
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