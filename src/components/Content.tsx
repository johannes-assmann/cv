import { useState } from 'react';
import Tooltip from './Tooltip';
import WorkExperience from './WorkExperience';
import Education from './Education';
import Application from './Application';

function Content() {
  const [showApplication] = useState(true);
  const [showWorkExperience] = useState(false);
  const [showEducation] = useState(false);

  return (
    <div className="content w-13/2 bg-[#fff] p-9">
      <div className="top-section flex flex-col">
        <div className="name mb-3">
          <h1 className="default-500 py-1 tracking-widest text-xs">JOHANNES</h1>
          <h1 className="default-200 py-1 tracking-[0.25em]">AßMANN</h1>
        </div>
        <div className="px-3 py-1 mt-3 -ml-3 color-box">
          <h2 className="default-400 tracking-[0.6em]">SOFTWARE DEVELOPER</h2>
        </div>
      </div>
      {showApplication && <Application/>}
      {showWorkExperience && <WorkExperience/>}
      {showEducation && <Education/>}
    </div>
  )
}

export default Content;