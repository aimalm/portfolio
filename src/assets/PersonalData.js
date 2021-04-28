import profilePiPicture from './images/profileFoto.jpg'
import resume from './documents/Aimal Maarij - CV -EN.pdf'
import culturd from './images/culturd.png'
import christmasGame from './images/christmas game.png'
import portfolio from './images/portfolio.png'
import RPS from './images/RPS Game.png';
import todo from './images/todo app.png'
import logo from './images/logo.png'
import bg1 from './images/bg-1.png'
import bg2 from './images/bg-2.jpg'


const personData = {
    about:{
            name:`Aimal Maarij`,
            phone: `+32 489 78 50 13`,
            email:`Maarij.be@gmail`,
            address:`9000 Ghent (Belgium)`,
            profession:[``,`Web Developer`],
            profilePiPicture,
            resume,
            logo
        },

    backgroundSlides:{
        slideOne:bg1,
        slideTwo:bg2,
    },

    socialMedias:[
        {
            url:`https://www.linkedin.com/in/aimal-maarij/`,
            icon:`fab fa-linkedin-in fa-2x`,
            name:`Linkedin`
        },
        {
            url:`https://github.com/aimalm`,
            icon:`fab fa-github fa-2x`,
            name:`Github`
        },
        {
            url:`https://dev.to/aimalm`,
            icon:`fab fa-dev fa-2x`,
            name:`Dev.to`
        }
    ],
    skills:[
        {
            name:`frontend`,
            language:[`HTML5`,`CSS3`,`JavaScript`,`React`,`Bootstrap 5`, `Wordpress`, `Elementor`,`Squarespace` ],
            icon:`fas fa-laptop-code`
        },
        {
            name:`backend`,
            language:[`Node`, `Express`,`PHP`],
            icon:`fas fa-code`
        },
        {
            name:`database`,
            language:[`MongoDB`,`MYSQL`],
            icon:`fas fa-database`
        },
        {
            name:`version control`,
            language:[`Git`,`Github`],
            icon:`fas fa-code-branch`
        },
        {
            name:`cloud`,
            language:[`Heroku`, `Netlify`,`Firebase`,`Siteground`],
            icon:`fas fa-cloud`
        }
    ],
    
    projects:[
        {
            title:"Culturd",
            technologies:['React', `Bootstrap`,`Node`,`Express`, `Mongodb`, `Netlify`,`Heroku`],
            about:`MERN full stack group project`,
            image: culturd,
            url:`https://culturd.netlify.app/`
        },
        {
            title:"Ho-ho-holiday",
            technologies:['HTML', `JavaScript`,`CSS`,`themoviedb.org API`],
            about:`Christmas theme JavaScript game`,
            image: christmasGame,
            url:`https://deroodirk.github.io/ho-ho-holiday/`
        },
        {
            title:"Rock paper scissors ",
            technologies:['HTML', `CSS3`,`JavaScript`],
            about:`Simple game biuld in JavaScript`,
            image: RPS,
            url:`https://aimalm.github.io/rock-paper-scissor/`
        },
        {
            title:"Todo List",
            technologies:['React',`Netlify`],
            about:`Learning CRUD opperations in react `,
            image:todo,
            url:`https://aimalm.netlify.app/`
        },
        {
            title:" Portfolio",
            technologies:['React', `Bootstrap`,`Netlify`],
            about:`Personal portfolio about me `,
            image:portfolio,
            url:`https://aimalm.netlify.app/`
        }
  ]
 
};

export default personData;