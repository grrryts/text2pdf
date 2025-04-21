'use client';

import { Worker } from '@react-pdf-viewer/core';

const PdfViewerProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.js">
      {children}
    </Worker>
  );
};

export default PdfViewerProvider;
