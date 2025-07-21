import React from 'react';
import styles from './PDFModal.module.css';

function PDFModal({ isOpen, onClose, pdfUrl }) {
  if (!isOpen) return null;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Jashanveer_Singh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={`${styles.modalOverlay} fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-2 md:p-4`} 
      onClick={handleBackdropClick}
    >
      <div className={`${styles.modalContent} w-full h-full max-w-6xl max-h-[95vh] bg-white dark:bg-gray-900 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden animate-slide-up`}>
        <div className={`${styles.modalHeader} flex justify-between items-center p-4 md:p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800`}>
          <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white truncate pr-4">
            Resume - Jashanveer Singh
          </h3>
          <div className="flex items-center gap-2 flex-shrink-0">
            <button 
              className={`${styles.downloadBtn} bg-blue-600 hover:bg-blue-700 text-white p-2 md:p-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg`}
              onClick={handleDownload}
              title="Download Resume"
            >
              ⬇️
            </button>
            <button 
              className={`${styles.closeBtn} w-8 h-8 md:w-10 md:h-10 border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110`}
              onClick={onClose}
              title="Close Modal"
            >
              ✕
            </button>
          </div>
        </div>
        
        <div className={`${styles.pdfContainer} flex-1 overflow-hidden`}>
          <iframe 
            src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            className={`${styles.pdfViewer} w-full h-full border-none`}
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  );
}

export default PDFModal;
