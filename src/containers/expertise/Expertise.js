import React, {useContext} from "react";
import "./Expertise.css";
import {techStack} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function TechExpertise() {
  const {isDark} = useContext(StyleContext);
  if (!techStack.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="projects">
        <div>
          <h1 className="skills-heading">{techStack.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {techStack.subtitle}
          </p>
          <div>
            {techStack.domains.map((domain, domain_id) => {
          return (
            <div 
            key={domain_id}
            className="projects-container"
            >
            <h2
            className={
              isDark
                ? "dark-mode project-subtitle"
                : "subTitle project-subtitle"
            }
          >
            {domain.domainName}
            <div></div>
          </h2>
                {domain.entities.map((entity, i) => {
                return (
                    <div
                    key={i}
                    className={
                        isDark
                        ? "dark-mode project-card project-card-dark"
                        : "project-card project-card-light"
                    }
                    >
                    {entity.image ? (
                        <div className="project-image">
                        <img
                            src={entity.image}
                            alt={entity.skillName}
                            className="card-image"
                        ></img>
                        </div>
                    ) : null}
                    {entity.skillName ? (
                        <div className="project-image">
                        <h3>{entity.skillName}</h3>
                        </div>
                    ) : null}
                    </div>
                );
                })}
            </div>
          );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}