import { useState, useEffect } from "react";
import { X, Download, Maximize2, Minimize2 } from "lucide-react";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvUrl: string;
  fileName?: string;
}

const CVModal = ({ isOpen, onClose, cvUrl, fileName = "Jeff_Njau_CV" }: CVModalProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleDownload = () => {
    const link = document.createElement("a");
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
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div
        className={`bg-background border-gray/30 relative flex flex-col border shadow-2xl transition-all duration-300 ${
          isFullscreen ? "h-screen w-screen" : "h-[90vh] w-[95vw] max-w-6xl rounded-lg"
        }`}
      >
        {/* Header */}
        <div className="border-gray/30 flex items-center justify-between border-b px-6 py-4">
          <h2 className="text-xl font-semibold text-white">{fileName}.pdf</h2>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="text-gray hover:text-primary hover:bg-gray/10 rounded p-2 transition-colors"
              title="Download CV"
            >
              <Download size={20} />
            </button>

            <button
              onClick={toggleFullscreen}
              className="text-gray hover:text-primary hover:bg-gray/10 rounded p-2 transition-colors"
              title={isFullscreen ? "Exit fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>

            <button
              onClick={onClose}
              className="text-gray hover:text-primary hover:bg-gray/10 rounded p-2 transition-colors"
              title="Close"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto bg-[#1e1e1e] p-6">
          <iframe src={cvUrl} className="h-full w-full rounded border-0" title="CV Preview" />
        </div>

        {/* Footer */}
        <div className="border-gray/30 flex justify-end gap-3 border-t px-6 py-4">
          <button
            onClick={onClose}
            className="text-gray border-gray/30 hover:border-gray/50 rounded border px-4 py-2 transition-colors hover:text-white"
          >
            Close
          </button>
          <button
            onClick={handleDownload}
            className="bg-primary text-background hover:bg-primary/90 rounded px-4 py-2 font-medium transition-colors"
          >
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default CVModal;
