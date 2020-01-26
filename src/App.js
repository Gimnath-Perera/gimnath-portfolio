import React, { useState } from 'react';
import './App.css';
import Portfolio from './components/Portfolio';
import useWindowScrollPosition from '@rehooks/window-scroll-position';
import Particles from 'react-particles-js';
import AOS from 'aos';
AOS.init({ duration: 1000, delay: 200 });

const App = () => {
  const [hovered, setHovered] = useState(false);
  const [navChange, setnavChange] = useState(false);

  const changePosition = 200;

  const particaleOpt = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 1000
        }
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        }
      }
    }
  };
  let position = useWindowScrollPosition();
  if (position.y > changePosition && !navChange) {
    setnavChange(true);
  }
  if (position.y <= changePosition && navChange) {
    setnavChange(false);
  }
  let style = {
    backgroundColor: navChange ? `#212529` : ``,
    paddingTop: navChange ? 0 : ``,
    paddingBottom: navChange ? 0 : ``
  };
  const toggleHover = () => {
    setHovered(!hovered);
  };

  const portfolioLinks = [
    {
      title: 'Tip Over Flow',
      caption: 'Online Q&A website where people can ask and answer questions',
      url:'https://github.com/Gimnath-Perera/TipOverFlow-frontend'
    },
    {
      title: 'Star Friends',
      caption: 'A platform where fans can interect with their favourite artists',
      url:''
    },
    {
      title: 'PR Studio',
      caption: 'A web platform where advertisers can publish their aricles',
      url:''
    }
  ];
  return (
    <div className='App'>
      <nav
        className='navbar navbar-expand-lg navbar-dark fixed-top'
        id='mainNav'
        style={style}
      >
        <div className='container'>
          <a
            className='navbar-brand js-scroll-trigger cssanimation leFadeInTop sequence hvr-buzz-out'
            href='#page-top'
          >
            Gimnath Perera
          </a>
          <button
            className='navbar-toggler navbar-toggler-right '
            type='button'
            data-toggle='collapse'
            data-target='#navbarResponsive'
            aria-controls='navbarResponsive'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            Menu
            <i className='fa fa-bars'></i>
          </button>
          <div className='collapse navbar-collapse' id='navbarResponsive'>
            <ul className='navbar-nav text-uppercase ml-auto'>
              <li className='nav-item'>
                <a
                  className='nav-link js-scroll-trigger  cssanimation leFadeInTop sequence'
                  href='#services'
                >
                  Intro
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link js-scroll-trigger  cssanimation leFadeInTop sequence'
                  href='#portfolio'
                >
                  Projects
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link js-scroll-trigger  cssanimation leFadeInTop sequence'
                  href='#about'
                >
                  About
                </a>
              </li>
              {/* <li className='nav-item'>
                <a
                  className='nav-link js-scroll-trigger  cssanimation leFadeInTop sequence'
                  href='#team'
                >
                  Team
                </a>
              </li> */}
              <li className='nav-item'>
                <a
                  className='nav-link js-scroll-trigger  cssanimation leFadeInTop sequence'
                  href='#contact'
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className='masthead'>
        <div className='container'>
          <Particles
            params={particaleOpt}
            style={{
              width: '100%',
              left: 0,
              right: 0,
              position: 'fixed'
            }}
          />
          <div className='intro-text'>
            <div
              // className={
              //   hovered
              //     ? `intro-heading animated  bounceIn  fast`
              //     : `intro-heading animated `
              // }
              // onMouseEnter={toggleHover}
              // onMouseLeave={toggleHover}
              className='intro-heading animated fadeInDown slower  '
            >
              Hello, I'm
              <span style={{ color: '#E31B6D' }}> Gimnath </span>
            </div>
            <div className='intro-lead-in   animated fadeInUp slower delay-1s'>
              I'm a full-stack developer
            </div>
            <div
              className='font-weight-light  animated fadeInUp slower delay-2s'
              style={{ marginBottom: 20 }}
            >
              Full-stack developer /\ Freelancer /\ Reseacher
            </div>
            <a
              className='btn btn-outline-light btn-xl  js-scroll-trigger animated fadeInRight slower delay-2s '
              href='#services'
            >
              View my work
            </a>
          </div>
        </div>
      </header>

      <section className='page-section' id='services' data-aos='slide-left'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center hvr-buzz-out'>
              <h2 className='section-heading text-uppercase'>
                Who is this guy ?
              </h2>
              <h3 className='section-subheading text-muted'>
                Since beginning my journey as a freelance designer nearly 8
                years ago, I've done remote work for agencies, consulted for
                startups, and collaborated with talented people to create
                digital products for both business and consumer use. I'm quietly
                confident, naturally curious, and perpetually working on
                improving my chops one design problem at a time.
              </h3>
            </div>
          </div>

          <div className='row text-center'>
            <div className='col-md-4 hvr-buzz-out'>
              <span className='fa-stack fa-4x hvr-bounce-in'>
                <i className='fa fa-circle fa-stack-2x text-primary'></i>
                <i className='fa fa-paint-brush fa-stack-1x fa-inverse'></i>
              </span>
              <h4 className='service-heading'>Designer</h4>
              <p className='text-muted'>
                I value simple content structure, clean design patterns, and
                thoughtful interactions.
              </p>
              <p className='text-muted'>
                Things I enjoy designing:
                <br />
                UX, UI, Web, Mobile, Apps, Logos
              </p>
              <p className='text-muted'>
                Design Tools:
                <br />
                Figma
              </p>
            </div>
            <div className='col-md-4 hvr-buzz-out'>
              <span className='fa-stack fa-4x hvr-bounce-in'>
                <i className='fa fa-circle fa-stack-2x text-primary'></i>
                <i className='fa fa-code fa-stack-1x fa-inverse'></i>
              </span>
              <h4 className='service-heading '>Front-end Developer</h4>
              <p className='text-muted'>
                I like to code things from scratch, and enjoy bringing ideas to
                life in the browser.
              </p>
              <p className='text-muted'>
                Languages I speak:
                <br />
                React, Html, Angular, CSS, Sass
              </p>
              <p className='text-muted'>
                Dev Tools:
                <br />
                Bootstrap, Codepen, Gitlab
              </p>
            </div>

            <div className='col-md-4 hvr-buzz-out'>
              <span className='fa-stack fa-4x hvr-bounce-in'>
                <i className='fa fa-circle fa-stack-2x text-primary'></i>
                <i className='fa fa-database fa-stack-1x fa-inverse'></i>
              </span>
              <h4 className='service-heading'>Back-end Developer</h4>
              <p className='text-muted'>
                I develop server-side web application logic as well as the
                integration of the front-end part.
              </p>
              <p className='text-muted'>
                Languages I speak:
                <br />
                Java, Python, Node, C#, PHP
              </p>
              <p className='text-muted'>
                Dev Tools:
                <br />
                Postman, Gitlab, Docker
              </p>
            </div>
          </div>
        </div>
      </section>

      <Portfolio portfolioLinks={portfolioLinks} />

      <section className='page-section' id='about' data-aos='zoom-in'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center hvr-buzz-out'>
              <h2 className='section-heading text-uppercase'>About</h2>
              <h3 className='section-subheading text-muted'>
                Need to know more about me :)
              </h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <ul className='timeline'>
                <li>
                  <div className='timeline-image'>
                    <span className='fa-stack fa-4x hvr-bounce-in'>
                      <i className='fa fa-laptop fa-stack-1x fa-inverse'></i>
                    </span>
                  </div>
                  <div className='timeline-panel' data-aos='fade-right'>
                    <div className='timeline-heading'>
                      <h4>2019</h4>
                      <h4 className='subheading'>
                        Started career as an intern Software Engineer
                      </h4>
                    </div>
                    <div className='timeline-body'>
                      <p className='text-muted'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt ut voluptatum eius sapiente, totam reiciendis
                        temporibus qui quibusdam, recusandae sit vero unde, sed,
                        incidunt et ea quo dolore laudantium consectetur!
                      </p>
                    </div>
                  </div>
                </li>
                <li className='timeline-inverted'>
                  <div className='timeline-image'>
                    <span className='fa-stack fa-4x hvr-bounce-in'>
                      <i className='fa fa-code fa-stack-1x fa-inverse'></i>
                    </span>
                  </div>
                  <div className='timeline-panel' data-aos='fade-left'>
                    <div className='timeline-heading'>
                      <h4>2018</h4>
                      <h4 className='subheading'>
                        Started career as a Freelancer
                      </h4>
                    </div>
                    <div className='timeline-body'>
                      <p className='text-muted'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt ut voluptatum eius sapiente, totam reiciendis
                        temporibus qui quibusdam, recusandae sit vero unde, sed,
                        incidunt et ea quo dolore laudantium consectetur!
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className='timeline-image'>
                    <span className='fa-stack fa-4x hvr-bounce-in'>
                      <i className='fa fa-graduation-cap fa-stack-1x fa-inverse'></i>
                    </span>
                  </div>
                  <div className='timeline-panel' data-aos='fade-right'>
                    <div className='timeline-heading'>
                      <h4>2017</h4>
                      <h4 className='subheading'>
                        BEng (Hons) Software Engineering
                      </h4>
                    </div>
                    <div className='timeline-body'>
                      <p className='text-muted'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt ut voluptatum eius sapiente, totam reiciendis
                        temporibus qui quibusdam, recusandae sit vero unde, sed,
                        incidunt et ea quo dolore laudantium consectetur!
                      </p>
                    </div>
                  </div>
                </li>
                <li className='timeline-inverted'>
                  <div className='timeline-image'>
                  <span className='fa-stack fa-4x hvr-bounce-in'>
                      <i className='fa fa-android fa-stack-1x fa-inverse'></i>
                    </span>
                  </div>
                  <div className='timeline-panel' data-aos='fade-left'>
                    <div className='timeline-heading'>
                      <h4>2016</h4>
                      <h4 className='subheading'>
                        Built first mobile application
                      </h4>
                    </div>
                    <div className='timeline-body'>
                      <p className='text-muted'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Sunt ut voluptatum eius sapiente, totam reiciendis
                        temporibus qui quibusdam, recusandae sit vero unde, sed,
                        incidunt et ea quo dolore laudantium consectetur!
                      </p>
                    </div>
                  </div>
                </li>
                <li className='timeline-inverted'>
                  <div className='timeline-image'>
                    <h4>
                      Where
                      <br />
                      the journey
                      <br />
                      begins !
                    </h4>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        className='bg-light page-section'
        id='team'
        data-aos='zoom-in-right'
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center'>
              <h2 className='section-heading text-uppercase'>
                Our Amazing Team
              </h2>
              <h3 className='section-subheading text-muted'>
                Lorem ipsum dolor sit amet consectetur.
              </h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-4'>
              <div className='team-member'>
                <img
                  className='mx-auto rounded-circle'
                  src='img/team/1.jpg'
                  alt=''
                />
                <h4>Kay Garland</h4>
                <p className='text-muted'>Lead Designer</p>
                <ul className='list-inline social-buttons'>
                  <li className='list-inline-item'>
                    <a href='#'>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#'>
                      <i className='fa fa-facebook-f'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#'>
                      <i
                        className='fa fa-linkedin'
                        style={{ color: 'white' }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='team-member'>
                <img
                  className='mx-auto rounded-circle'
                  src='img/team/2.jpg'
                  alt=''
                />
                <h4>Larry Parker</h4>
                <p className='text-muted'>Lead Marketer</p>
                <ul className='list-inline social-buttons'>
                  <li className='list-inline-item'>
                    <a href='#'>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#'>
                      <i className='fa fa-facebook-f'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#'>
                      <i
                        className='fa fa-linkedin'
                        style={{ color: 'white' }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='team-member'>
                <img
                  className='mx-auto rounded-circle'
                  src='img/team/3.jpg'
                  alt=''
                />
                <h4>Diana Pertersen</h4>
                <p className='text-muted'>Lead Developer</p>
                <ul className='list-inline social-buttons'>
                  <li className='list-inline-item'>
                    <a href='#'>
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#'>
                      <i className='fa fa-facebook-f'></i>
                    </a>
                  </li>
                  <li className='list-inline-item'>
                    <a href='#'>
                      <i
                        className='fa fa-linkedin'
                        style={{ color: 'white' }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8 mx-auto text-center'>
              <p className='large text-muted'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                eaque, laboriosam veritatis, quos non quis ad perspiciatis,
                totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className='py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-3 col-sm-6'>
              <a href='#'>
                <img
                  className='img-fluid d-block mx-auto'
                  src='img/logos/envato.jpg'
                  alt=''
                />
              </a>
            </div>
            <div className='col-md-3 col-sm-6'>
              <a href='#'>
                <img
                  className='img-fluid d-block mx-auto'
                  src='img/logos/designmodo.jpg'
                  alt=''
                />
              </a>
            </div>
            <div className='col-md-3 col-sm-6'>
              <a href='#'>
                <img
                  className='img-fluid d-block mx-auto'
                  src='img/logos/themeforest.jpg'
                  alt=''
                />
              </a>
            </div>
            <div className='col-md-3 col-sm-6'>
              <a href='#'>
                <img
                  className='img-fluid d-block mx-auto'
                  src='img/logos/creative-market.jpg'
                  alt=''
                />
              </a>
            </div>
          </div>
        </div>
      </section>
{/* heloooo */}
      <section className='page-section' id='contact' data-aos='zoom-in'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 text-center hvr-buzz-out'>
              <h2 className='section-heading text-uppercase'>Let's Talk</h2>
              <h3 className='section-subheading ' style={{color:'white'}}>
                If you have any request or question don't hesitate to contact
                me.
              </h3>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <form id='contactForm' name='sentMessage'>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        id='name'
                        type='text'
                        placeholder='Your Name *'
                        required='required'
                        data-validation-required-message='Please enter your name.'
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        id='email'
                        type='email'
                        placeholder='Your Email *'
                        required='required'
                        data-validation-required-message='Please enter your email address.'
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                    <div className='form-group'>
                      <input
                        className='form-control'
                        id='phone'
                        type='tel'
                        placeholder='Your Phone *'
                        required='required'
                        data-validation-required-message='Please enter your phone number.'
                      />
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <textarea
                        className='form-control'
                        id='message'
                        placeholder='Your Message *'
                        required='required'
                        data-validation-required-message='Please enter a message.'
                      ></textarea>
                      <p className='help-block text-danger'></p>
                    </div>
                  </div>
                  <div className='clearfix'></div>
                  <div className='col-lg-12 text-center'>
                    <div id='success'></div>
                    {/* <button
                      id='sendMessageButton'
                      className='btn btn-outline-light btn-xl text-uppercase hvr-bounce-in'
                      type='submit'
                    >
                      Send Message
                    </button> */}
                    <button
                      href='#'
                      class='btn btn-outline-light btn-xl text-uppercase hvr-icon-forward'
                    >
                      Send Message
                      <i class='fa fa-chevron-circle-right hvr-icon'></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className='footer'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className='col-md-4'>
              <span className='copyright'>
                Copyright &copy; Your Website 2020
              </span>
            </div>
            <div className='col-md-4'>
              <ul className='list-inline social-buttons'>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='fa fa-stack-overflow'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i className='fa fa-github'></i>
                  </a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>
                    <i
                      className='fa fa-linkedin'
                      style={{ color: 'white' }}
                    ></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-md-4'>
              <ul className='list-inline quicklinks'>
                <li className='list-inline-item'>
                  <a href='#'>Privacy Policy</a>
                </li>
                <li className='list-inline-item'>
                  <a href='#'>Terms of Use</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
