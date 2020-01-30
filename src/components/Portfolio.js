import React from 'react';

const Portfolio = ({ portfolioLinks }) => {
  return (
    <section
      className='bg-light page-section'
      id='portfolio'
      data-aos='slide-right'
    >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 text-center hvr-buzz-out'>
            <h2 className='section-heading text-uppercase '>My Recent Work</h2>
            <h3 className='section-subheading text-muted'>
              Here are a few recent projects. Want to see more?
              <b
                className='cssanimation fadeIn infinite'
                style={{ cursor: 'pointer', marginLeft: 4 }}
              >
                Email me <span><i className="fa fa-envelope"></i></span>
              </b>
            </h3>
          </div>
        </div>
        <div className='row'>
          {portfolioLinks &&
            portfolioLinks.map(({ title, caption, url,img }, index) => (
            
              <div
                className='col-md-4 col-sm-6 portfolio-item hvr-grow '
                onClick={() => {
                  window.open(url, "_newtab");
                }}
                key={index}
                style={{ cursor: 'pointer' }}
              >
                <a className='portfolio-link' data-toggle='modal' href=''>
                  <div className='portfolio-hover'>
                    <div className='portfolio-hover-content'>
                      <i className='fa fa-github fa-3x'></i>
                      <span>Check on GitHub</span>
                    </div>
                  </div>
                  <img
                    className='img-fluid'
                    src={img}
                    alt=''
                    style={{maxHeight:220}}
                  />
                </a>
                <div className='portfolio-caption'>
                  <h4>{title}</h4>
                  <p className='text-muted'>{caption}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
