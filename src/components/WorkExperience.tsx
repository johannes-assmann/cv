function WorkExperience () {
  return (
    <div className="section">
      <div className="headline">BERUFSERFAHRUNG</div>
      <div className="content">
        <div className="job">
          <div className="position subheadline">Consultant</div>
          {/* <p>
            Hover over this <Tooltip content="I am a tooltip!">text</Tooltip> to see the tooltip.
          </p> */}
          <div className="company">
            <a href="https://www.reply.com/vanilla-reply/de" target="_blank" className="text-[#d33e59]">Vanilla Reply</a>
          </div>
          <div className="date">10/2019 - Heute</div>
          <ul>
            <li>Projektarbeit in kleinen bis großen Projekten mit starken SCRUM-Fokus oder auch selbstorganisiert</li>
            <li>Hauptsächlich Frontend/Fullstack Arbeit in Frameworks, Javascript, HTML, CSS etc. Konzipieren und Umsetzen größerer Single Page Applications</li>
            <li>Verarbeiten von Daten aus API Endpunkten und die Darstellung im Frontend</li>
            <li>Hauptsächlich Vue 2 und Vue 3 Entwicklung</li>
            <li>React Entwicklung</li>
            <li>Ein Jahr Vue + Typescript</li>
            <li>CI/CD in GitLab und Bitbucket</li>
          </ul>
        </div>
        <div className="job">
          <div className="position subheadline">Trainee</div>
          <div className="company">
            <a href="https://www.webmen.de/" target="blank" className="text-[#d33e59]">Webmen</a>
          </div>
          <div className="date">04/2019 - 09/2019</div>
          <ul>
            <li>In kleinen Teams an Projekten gearbeitet</li>
            <li>Mehrere Wordpress Projekte</li>
            <li>Arbeit in einem größeren Projekt mit PHP, Laravel und jQuery</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience;