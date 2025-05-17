import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="l-header">
        <nav className="nav bd-grid">
          <div>
            <a href="#" className="nav__logo">Madika Mishra</a>
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item"><a href="#home" className="nav__link active-link">Home</a></li>
              <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
              <li className="nav__item"><a href="#skills" className="nav__link">Skills</a></li>
              <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
              <li className="nav__item"><a href="#contact" className="nav__link">Contact</a></li>
            </ul>
          </div>

          <div className="nav__toggle" id="nav-toggle">
            <i className='bx bx-menu'></i>
          </div>
        </nav>
      </header>

      <main className="l-main">
        <section className="home bd-grid" id="home">
          <div className="home__data">
            <h1 className="home__title">Hi,<br />I'am <span className="home__title-color">Madika</span><br /> Web Developer</h1>
            <a href="#contact" className="button">Contact</a>
          </div>

          <div className="home__social">
            <a href="https://www.linkedin.com/in/madika-mishra-6484a82b5/" classNmae="home__social-icon"><i className='bx bxl-linkedin'></i></a>
            <a href="https://github.com/MadikaMishra" className="home__social-icon"><i className='bx bxl-github' ></i></a>
          </div>

          <div className="home__img">
            <img src="/image2.jpeg" alt="profile" />
          </div>
        </section>

        <section className="about section" id="about">
          <h2 className="section-title">About</h2>
          <div className="about__container bd-grid">
            <div className="about__img">
              <img src="/about image.jpeg" alt="about" />
            </div>
            <div>
              <h2 className="about__subtitle">I'am Madika</h2>
              <p className="about__text">I am currently pursuing BCA from Amity University Lucknow Campus. I am passionate about web development and exploring new technologies.</p>
            </div>
          </div>
        </section>

        <section className="skills section" id="skills">
          <h2 className="section-title">Skills</h2>
          <div className="skills__container bd-grid">
            <div>
              <h2 className="skills__subtitle">Professional Skills</h2>
              <p className="skills__text">HTML, CSS, JavaScript, React, PHP, MySQL</p>
              <div className="skills__data"><span>HTML</span><div className="skills__bar skills__html"></div></div>
              <div className="skills__data"><span>CSS</span><div className="skills__bar skills__css"></div></div>
              <div className="skills__data"><span>JavaScript</span><div className="skills__bar skills__js"></div></div>
              <div className="skills__data"><span>PHP</span><div className="skills__bar skills__php"></div></div>
            </div>
            <div>
              <img src="/skills.jpeg" alt="skills" className="skills__img" />
            </div>
          </div>
        </section>

        <section className="work section" id="work">
          <h2 className="section-title">Work</h2>
          <div className="work__container bd-grid">
            <a href="https://github.com/MadikaMishra/amazon-clone" className="work__img">
                  <img src="/work1.png" alt=""/>
            </a>
            <a href="https://github.com/MadikaMishra/game-using-html-and-css" className="work__img">
                        <img src="/work2.png" alt=""/>
                    </a>
                    <a href="https://github.com/MadikaMishra/Interactive-Resume.git" className="work__img">
                       <img src="/work3.png" alt=""/>
                    </a>
                    <a href="https://github.com/MadikaMishra/Blog-Website.git" className="work__img">
                       <img src="/work4.png" alt=""/>
                    </a>
                    <a href="https://github.com/MadikaMishra/BATCH-Assignmet.git" className="work__img">
                       <img src="/work5.png" alt=""/>
                    </a>
                    <a href="https://github.com/MadikaMishra/gym-management-system.git" className="work__img">
                       <img src="/work6.png" alt=""/>
                    </a>
          </div>
        </section>

        <section className="contact section" id="contact">
          <h2 className="section-title">Contact</h2>
          <div className="contact__container bd-grid">
            <form action="#" className="contact__form">
              <input type="text" placeholder="Name" className="contact__input" />
              <input type="email" placeholder="Email" className="contact__input" />
              <textarea placeholder="Message" className="contact__input"></textarea>
              <input type="submit" value="Send" className="contact__button button" />
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__title">Madika Mishra</p>
        <div className="footer__social">
          <a href="#" className="footer__icon"><i className='bx bxl-facebook'></i></a>
          <a href="#" className="footer__icon"><i className='bx bxl-instagram'></i></a>
          <a href="#" className="footer__icon"><i className='bx bxl-twitter'></i></a>
        </div>
        <p className="footer__copy">&#169; 2025 Madika. All rights reserved</p>
      </footer>
    </div>
  );
}

export default App;
