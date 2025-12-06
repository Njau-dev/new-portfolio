import { PageHeaderProps } from "@/types";


const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
    return (
        <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
            <div className="space-y-2">
                {/* Main title */}
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white lowercase">
                    <span className="text-primary">/</span> {title}
                </h1>

                {/* Description */}
                <p className="text-gray text-base sm:text-lg">
                    {description}
                </p>
            </div>
        </header>
    );
};

export default PageHeader;