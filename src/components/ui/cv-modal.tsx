import { useState, useEffect } from 'react';
import { X, Download, Maximize2, Minimize2 } from 'lucide-react';

interface CVModalProps {
    isOpen: boolean;
    onClose: () => void;
    cvUrl: string;
    fileName?: string;
}

const CVModal = ({ isOpen, onClose, cvUrl, fileName = 'Jeff_Njau_CV' }: CVModalProps) => {
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = `${fileName}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const toggleFullscreen = () => {
        setIsFullscreen(!isFullscreen);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className={`relative bg-background border border-gray/30 shadow-2xl flex flex-col transition-all duration-300 ${isFullscreen
                    ? 'w-screen h-screen'
                    : 'w-[95vw] h-[90vh] max-w-6xl rounded-lg'
                    }`}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray/30">
                    <h2 className="text-xl font-semibold text-white">
                        {fileName}.pdf
                    </h2>

                    <div className="flex items-center gap-2">
                        <button
                            onClick={handleDownload}
                            className="p-2 text-gray hover:text-primary hover:bg-gray/10 rounded transition-colors"
                            title="Download CV"
                        >
                            <Download size={20} />
                        </button>

                        <button
                            onClick={toggleFullscreen}
                            className="p-2 text-gray hover:text-primary hover:bg-gray/10 rounded transition-colors"
                            title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
                        >
                            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
                        </button>

                        <button
                            onClick={onClose}
                            className="p-2 text-gray hover:text-primary hover:bg-gray/10 rounded transition-colors"
                            title="Close"
                        >
                            <X size={20} />
                        </button>
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-auto p-6 bg-[#1e1e1e]">
                    <iframe
                        src={cvUrl}
                        className="w-full h-full border-0 rounded"
                        title="CV Preview"
                    />
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-gray/30 flex justify-end gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray hover:text-white border border-gray/30 hover:border-gray/50 rounded transition-colors"
                    >
                        Close
                    </button>
                    <button
                        onClick={handleDownload}
                        className="px-4 py-2 bg-primary text-background hover:bg-primary/90 rounded transition-colors font-medium"
                    >
                        Download CV
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CVModal;