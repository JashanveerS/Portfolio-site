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
    <div className={styles.modalOverlay} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <h3>Resume - Jashanveer Singh</h3>
          <div className={styles.headerButtons}>
            <button className={styles.downloadBtn} onClick={handleDownload}>
              ⬇️
            </button>
            <button className={styles.closeBtn} onClick={onClose}>
              ✕
            </button>
          </div>
        </div>
        
        <div className={styles.pdfContainer}>
          <iframe 
            src={`${pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
            className={styles.pdfViewer}
            title="Resume PDF"
          />
        </div>
      </div>
    </div>
  );
}

export default PDFModal;
