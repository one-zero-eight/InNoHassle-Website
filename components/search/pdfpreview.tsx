import type { PDFDocumentProxy } from "pdfjs-dist";
import React, { useCallback, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";

function highlightPattern(text: string, pattern: string) {
  return text.replace(pattern, (value: any) => `<mark>${value}</mark>`);
}

export declare type PdfPreviewProps = {
  file: string;
  searchText: string;
};

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const PdfPreview: React.FC<PdfPreviewProps> = ({ file, searchText }) => {
  const [pdfDocument, setPdfDocument] = useState<PDFDocumentProxy | null>(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const PAGE_MAX_HEIGHT = 400;

  function onDocumentLoadSuccess(pdf: PDFDocumentProxy) {
    setPdfDocument(pdf);
    setNumPages(pdf.numPages);
    setCurrentPage(1); // Устанавливаем текущую страницу на первую при загрузке документа
  }

  const textRenderer = useCallback(
    (textItem: { str: any }) => highlightPattern(textItem.str, searchText),
    [searchText],
  );

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : prevPage));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage < numPages ? prevPage + 1 : prevPage,
    );
  };

  return (
    <div
      className="pdf-preview-elem col-span-6"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        padding: "10px",
      }}
    >
      <div
        className="file-title"
        style={{
          display: "flex",
          alignItems: "flex-start",
          width: "100%",
          padding: "10px",

          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "1rem",
        }}
      >
        <p>File Title</p>
      </div>
      <Document
        className="rounded-2xl"
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <div
          style={{
            maxHeight: `${PAGE_MAX_HEIGHT}px`,
            overflowY: "scroll",
          }}
          className="pdf-preview-elem2 custom-preview-scrollbar"
        >
          <Page pageNumber={currentPage} customTextRenderer={textRenderer} />
        </div>
      </Document>
      <div
        className="navigation"
        style={{
          marginTop: "1.5rem",
          marginBottom: "0.5rem",
        }}
      >
        <button onClick={goToPrevPage} disabled={currentPage <= 1}>
          &lt;
        </button>
        <span>{`${currentPage}/${numPages}`}</span>
        <button onClick={goToNextPage} disabled={currentPage >= numPages}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PdfPreview; // example.pdf
