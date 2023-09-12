import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const SideBar = () => (
  <section id='sidebar'>
    <section id='intro'>
      <header>
        <h2>Said Badalov</h2>
        <p>
          <a href='mailto:seidbedelov00@icloud.com'>seidbedelov00@icloud.com</a>
        </p>
      </header>
    </section>

    <section className='blurb'>
      <h2>About</h2>
      <p>
        I am Said Badalov, a 19-year-old aspiring Frontend Developer with 1 year
        and 6 months of work experience in the field. Currently, I am pursuing
        my studies at Azerbaijan Oil and Industry University, specializing in
        Information Technology and Management Faculty. This academic background
        equips me with a solid foundation in both technical and management
        aspects. I am passionate about creating user-friendly interfaces and
        engaging web experiences. Through my journey as a junior frontend
        developer, I have honed my skills in HTML, CSS, JavaScript, and various
        frameworks. I am eager to continue growing and contributing to
        innovative projects in the ever-evolving tech industry.
      </p>
      <ul className='actions'>
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to='/resume' className='button'>
              Learn More
            </Link>
          ) : (
            <Link to='/about' className='button'>
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id='footer'>
      <ContactIcons />
      <p className='copyright'>
        &copy; SaidBadalov <Link to='/'>seidbedelov.vercel.app</Link>.
      </p>
    </section>
  </section>
);

export default SideBar;
