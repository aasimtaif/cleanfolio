import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Typewriter from 'typewriter-effect';
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='about center'>
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>

    <h2 className='about__role'>
        <Typewriter
          options={{
            strings: ['Software Developer', 'MERN Stack Developer', 'Open Source Contributor'],
            autoStart: true,
            loop: true,
            delay: 50,
            deleteSpeed: 30,
          }}
        />
      </h2> 
      <p className='about__desc'>I love the process of changing a raw idea into a website or a product
        that impacts lives.
        I want to do work that challenges me as a developer & work that I can
        be proud of.<br />
        I am fluent in <b>Javascript</b> and <b>C++</b> and know a bit of <b>Python</b> and am working on a few
        projects in the <b>MERN</b> stack.<br />
        I plan to learn <b>Next.js</b>, <b>Three.js</b> and<b> Typescript</b> in the near future. <br /><br /></p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}


        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
