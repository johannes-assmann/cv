import { useRef } from 'react'
import passbild from './assets/profile.jpg'
import './App.css'
// @ts-ignore
import html2pdf from 'html2pdf.js';

function App() {
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
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    }).from(pdfRef.current).save();
  }
  return (
    <>
      <main ref={pdfRef} className="w-full min-h-screen flex text-black inter-500">
        <div className="download-button absolute top-5 right-5"><button onClick={generatePDF}>Download</button></div>
        <div className="left w-7/2 bg-[#c7e4f7]">
          <img src={passbild} className="profile-pic" alt="profile" />
          <div className="list-section p-9 pt-12">
            <div className="list contact">
              <div className="headline">KONTAKT</div>
              <ul className="text-xs">
                <li>Hagenauer Str. 2</li>
                <li>28211 Bremen</li>
                <li>017631688185</li>
                <li>johannes_assmann@live.de</li>
              </ul>
            </div>
            <div className="list about">
              <div className="headline">ÜBER MICH</div>
              <ul className="text-xs">
                <li>Geburtsdatum: 21.08.1993</li>
                <li>Natioalität: Deutsch</li>
                <li>Familienstand: Ledig</li>
                <li>Hobbies: Calisthenics, Salsa & Bachata</li>
              </ul>
            </div>
            <div className="list skills">
              <div className="headline">KENNTNISSE</div>
              <ul className="text-xs">
                <li>Javascript, Vue2, Vue3, React</li>
                <li>HTML, CSS, SCSS, SASS</li>
                <li>Python, Pandas</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right w-13/2 bg-[#fff] p-9">
          <div className="top-section">
            <div className="name pb-3">
              <h1 className="inter-500 py-1 tracking-widest text-xs">JOHANNES</h1>
              <h1 className="inter-200 py-1 tracking-[0.25em]">AßMANN</h1>
            </div>
            <h2 className="p-1 pl-3 -ml-3 bg-[#c7e4f7] inter-400 tracking-[0.6em]">SOFTWARE DEVELOPER</h2>
          </div>
          <div className="section">
            <div className="headline">BERUFSERFAHRUNG</div>
            <div className="content">
              <div className="job">
                <div className="position subheadline">Consultant</div>
                <div className="company">Vanilla Reply</div>
                <div className="date">10/2019 - Heute</div>
                <ul className="list-disc">
                  <li>Projektarbeit in kleinen bis großen Projekten mit starken SCRUM-Fokus oder auch selbstorganisiert</li>
                  <li>Hauptsächlich Frontend/Fullstack Arbeit in Frameworks, Javascript, HTML, CSS etc. Konzipieren und Umsetzen größerer Single Page Applications</li>
                  <li>Verarbeiten von Daten aus API Endpunkten und die Darstellung im Frontend</li>
                  <li>Hauptsächlich Vue 2 und Vue 3 Entwicklung</li>
                  <li>React Entwicklung</li>
                  <li>Ein Jahr Vue + Typescript</li>
                  <li>ci/cd Projekte in GitLab oder Bitbucket</li>
                </ul>
              </div>
              <div className="job">
                <div className="position subheadline">Trainee</div>
                <div className="company">Webmen</div>
                <div className="date">04/2019 - 09/2019</div>
                <ul className="list-disc">
                  <li>In kleinen Teams an Projekten gearbeitet.</li>
                  <li>Mehrere Wordpress Projekte.</li>
                  <li>Arbeit in einem größeren Projekt mit PHP, Laravel und jQuery.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="section">
            <div className="headline">STUDIUM</div>
            <div className="content">
              <div className="job">
                <div className="position subheadline">BSc. Informatik</div>
                <div className="company">Carl von Ossietzky Universität Oldenburg</div>
                <div className="date">Bis 03/2019</div>
                <ul className="list-disc">
                  <li>Softwareentwicklung mit Java gelernt.</li>
                  <li>Modul "Webentwicklung" abgeschlossen.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
