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
          <div className='homepage2'>
              <h1 className='techstack_heading1'>My Tech Stack</h1>
              <h3 className='techstack_heading3'>Technologies I've been working with recently</h3>
              <div className='techstack_icons'>
                  <div>
                  < img className='techstack' src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/html5.226x256.png')} alt='' /> 
                  </div>
                  <div>
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/css3-original.225x256.png')} alt=''/> 
                  </div>
                  <div>
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/file-type-js-official.256x256.png')} alt=''/> 
                  </div>
                  <div>
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/reactjs.256x228.png')} alt=''/> 
                  </div>
                  <div>
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/vscode-icons_file-type-tailwind.png')} alt=''/> 
                  </div>
                  <div>
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/vscode.256x256.png')} alt=''/> 
                  </div>
                  <div>
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/postman-icon.png')} alt=''/> 
                  </div>
              </div>
              <div className='techstack_icons'>
                  <div>
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/git.256x256.png')} alt=''/> 
                  </div>
                  <div>
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/github.256x250.png')} alt=''/> 
                  </div>
                  <div>
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/firebase.187x256.png')} alt=''/> 
                  </div>
                  <div>
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/navicat.png')} alt=''/> 
                  </div>
                  <div>
                  < img className='techstack' src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/nodejs.256x157.png')} alt='' /> 
                  </div>
                  <div>
                 < img className='techstack'src={require('/Users/jeffrey/Developer/react-portfolio/portfolio/src/Assets/mongodb-original-wordmark.251x256.png')} alt=''/> 
                  </div>
              </div>
          </div>
          <div className='homepage3'>
                <h1 className='experience_heading1'>Experience</h1>
                <h3 className='experience_heading3'>Work and Educational Attainment</h3> 
          </div>
      
    </div>
  )
}

export default Homepage
