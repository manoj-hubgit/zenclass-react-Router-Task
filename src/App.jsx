import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Allcourses from './Pages/Allcourses';
import Fullstack from './Pages/Fullstack';
import Digitalmarketing from './Pages/Digitalmarketing';
import UiuxDesigning from './Pages/UiuxDesigning';
import Datascience from './Pages/Datascience';
import Page404 from './Pages/Page404';

const App = () => {
    let data=[
    {
      id:"1",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
      title:"Best Full-Stack Development Project Ideas in 2024",
      author:"Isha Sharma",
      date:"25 Mar, 2024",
      courseName:"fullstack" 
    },
    {
      id:"2",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/02/DBMS1.png",
      title:"10 Best Database Management Systems For Software Developers",
      author:"Isha Sharma",
      date:"24 Mar, 2024",
      courseName:"fullstack" 
    },
      {
      id:"3",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/html-css-collage-concept-with-person.jpg",
      title:"Top 10 Full-Stack Developer Frameworks in 2024",
      author:"Isha Sharma",
      date:"16 Apr, 2024",
      courseName:"fullstack" 
    },
    {
      id:"4",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/03/1.jpg",
      title:"Best Web Development Roadmap for Beginners 2024",
      author:"Isha Sharma",
      date:"16 Apr, 2024",
      courseName:"fullstack" 
    },
    {
      id:"5",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Feature-image-Best-Full-Stack-Development-Online-Courses.webp",
      title:"7 Best Full-Stack Development Online Courses [2024]",
      author:"Srinithi Sankar",
      date:"25 Mar, 2024",
      courseName:"fullstack" 
    },
    {
      id:"6",
      image:"https://www.guvi.in/blog/wp-content/uploads/2021/05/react-945x495.jpg",
      title:"6 Essential Prerequisites For Learning ReactJS",
      author:"Ramkumar",
      date:"25 Mar, 2024",
      courseName:"fullstack" 
    },
    {
      id:"7",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/ui-ux-project-ideas-for-beginners.webp",
      title:"Top 10 UI/UX Project Ideas for Beginners",
      author:"Isha Sharma",
      date:"25 Mar, 2024",
      courseName:"uiux" 
    },
    {
      id:"8",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/skilld-required-to-become-a-uui-ux-designer-2048x1072.webp",
      title:"10 Skills Required to Become a UI/UX Designer",
      author:"Isha Sharma",
      date:"26 Mar, 2024",
      courseName:"uiux" 
    },
    {
      id:"9",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-How-to-Install-Figma-On-Windows.webp",
      title:"How to Install Figma On Windows",
      author:"Meghana D",
      date:"15 Apr, 2024",
      courseName:"uiux" 
    },
    {
      id:"10",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/Future-and-Scope-of-UIUX-Design.webp",
      title:"The Future and Scope of UI/UX Design: A Comprehensive Overview",
      author:"Jaishree Tomar",
      date:"16 Apr, 2024",
      courseName:"uiux" 
    },
    {
      id:"11",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/UX-Designer-roadmap-for-beginners-2048x1072.webp",
      title:"A Complete UI/UX Designer Roadmap for Beginners",
      author:"Lukesh S",
      date:"16 Apr, 2024",
      courseName:"uiux" 
    },
    {
      id:"12",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-How-to-Download-an-Image-from-Figma.webp",
      title:"How to Download an Image from Figma? A 5-Step Guide to Help You Out",
      author:"Lukesh S",
      date:"09 Jan, 2024",
      courseName:"uiux" 
    },
    {
      id:"13",
      image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-Image-Top-Digital-Marketing-Trends-1.webp",
      title:"Top Digital Marketing Trends for 2024",
      author:"Saakshi Priyadarshini",
      date:"24 Mar, 2024",
      courseName:"digitalMarket" 
    },
    {
      id:"14",
      image:"https://www.guvi.in/blog/wp-content/uploads/2024/03/Feature-Image-Best-SEO-Tools-For-Digital-Marketing.webp",
      title:" 32 Best SEO Tools For Digital Marketing in 2024",
      author:"Saakshi Priyadarshini",
      date:"03 May, 2024",
      courseName:"digitalMarket" 
    },
    {
      id:"15",
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/10/Best-Websites-to-Learn-DIgital-Marketing-in-2023.jpg",
      title:"Best Websites to Learn Digital Marketing in 2024",
      author:"Tushar Vinocha",
      date:"14 Dec, 2023",
      courseName:"digitalMarket" 
    },
    {
      id:"16",
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/10/31958-2048x878.jpg",
      title:"6 Reasons Business Analytics Makes Digital Marketing Powerful",
      author:"Lahari Chandana",
      date:"12 Apr, 2024",
      courseName:"digitalMarket" 
    },
    {
      id:"17",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-Image-Best-Digital-Marketing-Projects-1.webp",
      title:" 10 Best Digital Marketing Projects in 2024",
      author:"Saakshi Priyadarshini",
      date:"02 Apr, 2024",
      courseName:"digitalMarket" 
    },
    {
      id:"18",
      image:"https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-The-History-and-Evolution-of-Digital-Marketing.webp",
      title:"The History and Evolution of Digital Marketing",
      author:"Saanchi Bhardwaj",
      date:"21 Mar, 2024",
      courseName:"digitalMarket" 
    },
    {
      id:"19",
      image:"https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-2048x1072.png",
      title:"Can A Commerce Student Do Data Science?",
      author:"Saakshi Priyadarshini",
      date:"16 Apr, 2024",
      courseName:"datascience" 
    },
    {
      id:"20",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/How-Long-Would-It-Take-to-Learn-Data-Science-2048x1072.png",
      title:"How Long Would It Take to Learn Data Science?",
      author:"Meghana D",
      date:"16 Apr, 2024",
      courseName:"datascience" 
    },
    {
      id:"21",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/01/paper-analysis-2-2048x1365.jpg",
      title:" How to become a Data Scientist after Mechanical Engineering?",
      author:"Lahari Chandana",
      date:"16 Apr, 2024",
      courseName:"datascience" 
    },
    {
      id:"22",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/Everything-about-Data-Scientist-Salary-in-India-2023-2048x1072.png",
      title:"Everything about Data Scientist Salary in India | 2024",

      author:"Srinithi Sankar",
      date:"02 Apr, 2024",
      courseName:"datascience" 
    },
    {
      id:"23",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/image-4.png",
      title:"Roles and Responsibilities of a Data Scientist",
      author:"Jaishree Tomar",
      date:"16 Apr, 2024",
      courseName:"datascience" 
    },
    {
      id:"24",
      image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      title:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      author:"Isha Sharma",
      date:"16 Apr, 2024",
      courseName:"datascience" 
    },

  ]

  return (


    <div>
      <BrowserRouter>
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Allcourses data={data}/>}/>
        <Route path='/fullstack' element={<Fullstack data={data}/>}/>
        <Route path='/uiux' element={<UiuxDesigning data={data}/>}/>
        <Route path='/digitalmarketing' element={<Digitalmarketing data={data}/>}/>
        <Route path='/datascience' element={<Datascience data={data}/>}/>
        <Route path='*' element={<Page404 data={data}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;