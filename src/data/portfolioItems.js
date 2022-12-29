import imagefinderImage from '../images/ImageFinder.webp';
import moviefinderImage from '../images/MovieFinder.webp';
import bookfinderImage from '../images/BookFinder.webp';
import phonebookImage from '../images/Phonebook.webp';
import questifyImage from '../images/Questify.webp';
export const portfolioItems = [
  {
    title: "Questify",
    tech: "React,Redux,TypeScript,Node,Tailwind",
    link: "https://questify-md.netlify.app/",
    preview: `${questifyImage}`,
    description:
      "Full Rest application. Frontend created using React/Redux and TypeScript. Backend using Node.js",
    code: "https://github.com/MichalDziuba/Questify",
  },
  {
    title: "ImageFinder",
    tech: "React,Tailwind,JS",
    link: "https://michaldziuba.github.io/ImagesFinder/",
    preview: `${imagefinderImage}`,
    description: "WebSite for searching images with PixaBay API.",
    code: "https://github.com/MichalDziuba/ImagesFinder",
  },
  {
    title: "Phonebook",
    tech: "JS,CSS,React,Redux",
    link: "https://phonebook-md.netlify.app/",
    preview: `${phonebookImage}`,
    description:
      "Phone book application with user registration and login. Used Connections API as backend.",
    code: "https://github.com/MichalDziuba/phonebook",
  },

  {
    title: "BooksFinder",
    tech: "HTML,CSS,React,JS",
    link: "https://michaldziuba.github.io/bookfinder/",
    preview: `${bookfinderImage}`,
    description: "WebSite for searching ebooks with Project Gutenberg API.",
    code: "https://github.com/MichalDziuba/bookfinder",
  },
  {
    title: "MoviesFinder",
    tech: "HTML,CSS,React,JS",
    link: "https://michaldziuba.github.io/MoviesFinder/",
    preview: `${moviefinderImage}`,
    description:
      "WebSite for searching movies and details with themoviedb API.",
    code: "https://github.com/MichalDziuba/MoviesFinder",
  },
];
