/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the Content component.
 */
import About from './content_sections/About';
import AcademicProjects from './content_sections/AcademicProjects';
import Education from './content_sections/Education';
import Experience from './content_sections/Experience';
import PersonalProjects from './content_sections/PersonalProjects';
import React from 'react';
import Skills from './content_sections/Skills';

const Content = () => {
  (
    <section id="page-body" className="container">
      <About />
      <Experience />
      <Skills />
      <Education />
      <AcademicProjects />
      <PersonalProjects />
    </section>
  );
};

export default  Content;
