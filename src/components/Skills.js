import React from 'react';
import person from '../assets/PersonalData';

const Skills = ()=>{
    return(
      <div className="container-fluid padding bg-info text-white about" id="skills">
        <div className="row headers text-center padding">
            <div className="col-12">
                <h1 className="display-4">Skills</h1>
            </div>
            <hr />
        </div>
        <div className="row text-center padding d-flex justify-content-around">
              {person.skills.map((skill, index)=>{
                return (
                  <div key={index} className="skill padding col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
                      <i className={skill.icon}></i>
                      <h3>{skill.name}</h3>
                      <ul className="language list-inline">
                         {skill.language.map((lang, index)=>(
                          <li key={index} className="list-inline-item">{lang}</li>
                          ))}
                        </ul>
                  </div>
                )
              })}
        </div>
         
    </div>
    )

};

export default Skills;