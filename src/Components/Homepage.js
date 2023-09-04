import React from 'react'
import Header from './Header'
import '../Styles/Homepage.css'
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function Homepage() {
  return (
    <div className='homepage'>
        <Header/>
        <div className='homepage1'>
            <div className='homepage1_content'>
                <div className='greeting'>
                    <span>Hey, I'm</span>
                    <span className='name' text-color='linear-gradient(#9845E8, #33D2FF,#DD5789)'>Jeffrey Fabella</span>
                </div>
            < img className='profile_photo'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/profile_photo.jpg')} alt='profile_photo'/>
            </div>
            <span className='homepage1_description'>I'm a software engineer based in Toronto, Canada and also a communication and journalism student. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. I have been freelancing for a year now while studying at the university and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work.</span>
            <div className='social_buttons'>
                <button className='social_button'>
                        <span className='social_mediaIcons'>
                        <EmailIcon/> Send Email
                        </span>
                </button>
                <button className='social_button'>
                        <span className='social_mediaIcons'>
                        <LinkedInIcon/> LinkedIn
                        </span>
                </button>
                <button className='social_button'>
                        <span className='social_mediaIcons'>
                        <GitHubIcon/> GitHub
                        </span>
                </button>
            </div>
        </div>
          <div>
              <h1>My Tech Stack</h1>
              <h3>Technologies I've been working with recently</h3>
              <div className='techstack_icons'>
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/vscode-icons_file-type-html.svg')} alt=''/> 
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/vscode-icons_file-type-css.svg')} alt=''/> 
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/vscode-icons_file-type-js-official.svg')} alt=''/> 
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/logos_react.svg')} alt=''/> 
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/Vector.svg')} alt=''/> 
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/logos_bootstrap.svg')} alt=''/> 
              </div>
        </div>
      
    </div>
  )
}

export default Homepage
