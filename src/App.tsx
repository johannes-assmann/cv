import { useRef, useState } from 'react'
import './App.css'
// @ts-ignore
import html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import Sidebar from './components/Sidebar';
import Content from './components/Content';

function App() {
  const [showDownload] = useState(true);
  const pdfRef = useRef<HTMLDivElement>(null);
  const generatePDF = () => {
    if (!pdfRef.current) {
      console.error(`couldnt find element`);
      return;
    }
    console.log('Generating PDF...');
    html2pdf().set({
      margin: 10,
      filename: "file.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: window.devicePixelRatio, useCORS: true, foreignObjectRendering: true, letterRendering: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    }).from(pdfRef.current).save();
  }
  const generatePDF2 = async () => {
    const pdfRef = document.getElementById('pdfRef');
    if (!pdfRef) {
      console.error(`Couldn't find element`);
      return;
    }
  
    await document.fonts.ready;  // Warten, bis Webfonts verfügbar sind
    await new Promise((resolve) => setTimeout(resolve, 2000)); // 1 Sekunde extra warten
  
    const dpi = window.devicePixelRatio;
    const canvas = await html2canvas(pdfRef, {
      useCORS: true, 
      scale: dpi,
      foreignObjectRendering: true,
    });
  
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({
      orientation: 'p',
      unit: 'px',
      format: [pdfRef.offsetWidth, pdfRef.offsetHeight]
    });
  
    pdf.addImage(imgData, 'PNG', 0, 0, pdfRef.offsetWidth, pdfRef.offsetHeight);
    pdf.save('output.pdf');
  };
  return (
    <>
      <main ref={pdfRef} id="pdfRef" className="container relative w-full min-h-screen flex text-black default-500">
        {showDownload && <div className="download-button absolute top-5 right-5"><button onClick={generatePDF2}>Download</button></div>}
        <Sidebar/>
        <Content/>
      </main>
    </>
  )
}

export default App
