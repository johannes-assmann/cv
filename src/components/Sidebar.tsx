import passbild from '../assets/profile.jpg'
import { useBase64Asset } from '../helpers/base64';

function Sidebar() {
  const profileImage = useBase64Asset("profile.jpg");
  return (
    <div className="sidebar w-7/2 bg-[#c7e4f7]">
      {/*<img src={passbild} className="profile-pic" alt="profile"  crossOrigin="anonymous" />*/}
      {profileImage ? <img src={profileImage} alt="Profile" /> : <p>Loading...</p>}
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
            <li>Javascript, Typescript, Vue2, Vue3, React</li>
            <li>HTML, CSS, SCSS, SASS</li>
            <li>Python, Pandas</li>
            <li>SQL</li>
            <li>Git, GitLab, Bitbucket</li>
          </ul>
        </div>
        <div className="list languages">
          <div className="headline">SPRACHEN</div>
          <ul className="text-xs">
            <li>Deutsch: Muttersprache</li>
            <li>Englisch: Exzellent</li>
            <li>Italienisch, Spanisch: Anfänger</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;