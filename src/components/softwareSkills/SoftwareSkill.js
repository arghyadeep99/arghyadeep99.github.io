import React from "react";
import "./SoftwareSkill.css";
import StyleContext from "../../contexts/StyleContext";
import {useState, useContext} from "react";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  const {isDark} = useContext(StyleContext);
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                { 
                // Since C++ logo was streching horizontally, if condition to adjust its size
                // Since dj and ci/cd logo for dark mode were not visible, if condition for the same
                // Can customize, for eg for fastapi logo can have transparent image for dark mode
                  skills.skillName === 'C++' ? <img src={skills.src} width="50" height="55" /> : 
                  skills.skillName === 'Django' && isDark ? <img src='https://www.svgrepo.com/show/353657/django-icon.svg' width="55" height="55" /> : 
                  skills.skillName === 'CI/CD' && isDark ? <img src='https://user-images.githubusercontent.com/296864/90276707-f691d800-de29-11ea-8d36-a4a756e3b524.png' width="55" height="55" /> : 
                  <img src = {skills.src} width="55" height="55" />
                }
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
