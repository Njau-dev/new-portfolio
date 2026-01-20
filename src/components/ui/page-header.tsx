import { PageHeaderProps } from "@/types";

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <header className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 md:py-12">
      <div className="space-y-2">
        {/* Main title */}
        <h1 className="text-2xl font-medium text-white lowercase sm:text-3xl md:text-4xl">
          <span className="text-primary">/</span> {title}
        </h1>

        {/* Description */}
        <p className="text-gray text-base sm:text-lg">{description}</p>
      </div>
    </header>
  );
};

export default PageHeader;
