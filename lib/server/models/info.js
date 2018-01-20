/**
 * Page data
 */
const data = {
  navigation: [
    {
      label: 'bio',
      link: '#bio'
    },
    {
      label: 'education',
      link: '#education'
    },
    {
      label: 'skills',
      link: '#skills'
    },
    {
      label: 'laboral experience',
      link: '#laboral_experience'
    },
    {
      label: 'contact',
      link: '#contact'
    }
  ],
  bio: {
    name: 'Charlie Escoboza Garcia',
    birth: 'Nov 26th',
    nationality: 'dominican',
    email: 'ing.charlie.garcia@gmail.com',
    hobbies: [
      'Watching movies and TV series',
      'Listening to music',
      'Playing Video Games',
      'Watching videos of new gadgets and technologies'
    ],
    description: 'I\'m a pasionate guy who enjoy searching for new things to learn, I also enjoy on keeping things simple',
    label: 'Javascript Full Stack Web Developer',
    photo: {
      alt: 'Charlie\'s Photo',
      src: 'https://avatars1.githubusercontent.com/u/6286558?v=3&u=3979d63deef365c55d0b5cb3b974e67ff8195789&s=100'
    },
    presentation: 'Hello, I\'m a',
    social: {
      github: ['https://github.com/CharlieEscoboza', 'https://github.com/CharlieGarcia'],
      linkedIn: ['https://www.linkedin.com/in/charlie-garc%C3%ADa-1352aa76/']
    }
  },
  education: {
    courses: [
      {
        institution: {
          logo: {
            src: '//www.udoym.edu.do/img/noticia_5.jpg',
            alt: 'Universidad O & M Logo'
          },
          name: 'Universidad O & M'
        },
        course: 'Systems Engineering',
        startDate: '2009',
        endDate: '2014'
      },
      {
        institution: {
          logo: {
            src: './static/styles/images/education/udacity.svg',
            alt: 'Udacity Logo'
          },
          name: 'Udacity'
        },
        course: 'Intro to Computer Science',
        startDate: '2014',
        endDate: '2014'
      },
      {
        institution: {
          logo: {
            src: './static/styles/images/education/udacity.svg',
            alt: 'Udacity Logo'
          },
          name: 'Udacity'
        },
        course: 'Web Development',
        startDate: '2014',
        endDate: '2014'
      },
      {
        institution: {
          logo: {
            src: './static/styles/images/education/codecademy.svg',
            alt: 'Codecademy Logo'
          },
          name: 'Codecademy'
        },
        course: 'Javascript',
        startDate: '2015',
        endDate: '2015'
      },
      {
        institution: {
          logo: {
            src: './static/styles/images/education/udacity.svg',
            alt: 'Udacity Logo'
          },
          name: 'Udacity'
        },
        course: 'Object Oriented Javascript',
        startDate: '2015',
        endDate: '2015'
      },
      {
        institution: {
          logo: {
            src: '//process.filestackapi.com/ADNupMnWyR7kCWRvm76Laz/resize=width:400/https://www.filepicker.io/api/file/1fgfY40UQ0iqOOoYlHxR',
            alt: 'React JS Program Logo'
          },
          name: 'React JS Program'
        },
        course: 'React JS Program bundle',
        startDate: '2016',
        endDate: ''
      }
    ]
  },
  skills: [
    {
      image: {
        src: './static/styles/images/skills/javascript.svg',
        alt: 'Javascript Logo'
      },
      skill: 'Javascript',
      level: 3
    },
    {
      image: {
        src: './static/styles/images/skills/jquery.svg',
        alt: 'jQuery Logo'
      },
      skill: 'jQuery',
      level: 3
    },
    {
      image: {
        src: './static/styles/images/skills/html5.svg',
        alt: 'HTML Logo'
      },
      skill: 'HTML',
      level: 3
    },
    {
      image: {
        src: './static/styles/images/skills/css3.svg',
        alt: 'CSS Logo'
      },
      skill: 'CSS',
      level: 3
    },
    {
      image: {
        src: './static/styles/images/skills/sass-logo.svg',
        alt: 'Sass Logo'
      },
      skill: 'Sass',
      level: 3
    },
    {
      image: {
        src: './static/styles/images/skills/react.svg',
        alt: 'React Logo'
      },
      skill: 'React',
      level: 3
    },
    {
      image: {
        src: './static/styles/images/skills/express.svg',
        alt: 'Express Logo'
      },
      skill: 'Express',
      level: 2
    },
    {
      image: {
        src: './static/styles/images/skills/git.svg',
        alt: 'Git Logo'
      },
      skill: 'Git',
      level: 3
    },
    {
      image: {
        src: './static/styles/images/skills/mercurial.svg',
        alt: 'Mercurial Logo'
      },
      skill: 'Mercurial',
      level: 3
    }
  ],
  laborExperience: [
    {
      companyName: 'Intellisys D. Corp.',
      description: 'Intellisys is an outsourcing company dedicated to solve technology problems through developing apps on different languages and technologies',
      logo: {
        src: 'http://www.intellisysdcorp.com/wp-content/themes/Intellisys/img/logo-header.png',
        alt: 'Intellisys D. Corp. Logo'
      },
      role: 'Scrum Team Member',
      roleDescription: 'Whatever',
      startDate: '2014',
      endDate: ''
    }
  ]
};

function getData() {
  return data;
}

module.exports.getData = getData;
