import imagefinderImage from '../images/ImageFinder.webp';
import moviefinderImage from '../images/MovieFinder.webp';
import bookfinderImage from '../images/BookFinder.webp';
import phonebookImage from '../images/Phonebook.webp'
export const portfolioItems = [
  {
    title: "ImageFinder",
    tech: "React,Tailwind,JS",
    link: "https://michaldziuba.github.io/ImagesFinder/",
    preview: `${imagefinderImage}`,
    description: "WebSite for searching images with PixaBay API.",
    code: "https://github.com/MichalDziuba/ImagesFinder",
  },
  {
    title: "MoviesFinder",
    tech: "HTML,CSS,React,JS",
    link: "https://michaldziuba.github.io/goit-react-hw-05-movies/",
    preview: `${moviefinderImage}`,
    description:
      "WebSite for searching movies and details with themoviedb API.",
    code: "https://github.com/MichalDziuba/goit-react-hw-05-movies",
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
    title: "Phonebook",
    tech: "JS,CSS,React,Redux",
    link: "https://phonebook-md.netlify.app/",
    preview: `${phonebookImage}`,
    description:
      "Phone book application with user registration and login. Used Connections API as backend.",
    code: "https://github.com/MichalDziuba/goit-react-hw-08--phonebook",
  },
];
