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
      image:"https://static.vecteezy.com/system/resources/previews/004/485/532/original/man-working-at-laptop-work-at-home-concept-design-freelance-man-working-on-laptop-smiling-man-is-sitting-with-laptop-around-the-internet-email-message-icons-freelancer-programmer-with-a-laptop-vector.jpg",
      title:"Best Full-Stack Development Project Ideas in 2024",
      author:"Isha Sharma",
      date:"25 Mar, 2024",
      courseName:"fullstack" 
    },
    {
      id:"2",
      image:"https://img.freepik.com/premium-vector/internet-data-management-vector-flat-illustration_450176-108.jpg",
      title:"10 Best Database Management Systems For Software Developers",
      author:"Isha Sharma",
      date:"24 Mar, 2024",
      courseName:"fullstack" 
    },
      {
      id:"3",
      image:"https://img.freepik.com/premium-vector/business-woman-working-laptop-computer-vector-illustration_77116-1945.jpg",
      title:"Top 10 Full-Stack Developer Frameworks in 2024",
      author:"Isha Sharma",
      date:"16 Apr, 2024",
      courseName:"fullstack" 
    },
    {
      id:"4",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzyhEhCHaOKabnb6ikkaxW9_7KKS9td5-L2Q&s",
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
      image:"https://res.cloudinary.com/practicaldev/image/fetch/s--G5AWXQ2H--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://dev-to-uploads.s3.amazonaws.com/i/v4y43jjfj7u5r8to8qdu.png",
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
      image:"https://t4.ftcdn.net/jpg/05/06/35/75/360_F_506357599_bjrjWJ36i3UNb7zlqUnEB13jOdXtZ4kl.jpg",
      title:"Best Websites to Learn Digital Marketing in 2024",
      author:"Tushar Vinocha",
      date:"14 Dec, 2023",
      courseName:"digitalMarket" 
    },
    {
      id:"16",
      image:"https://img.freepik.com/free-vector/people-analyzing-growth-charts_23-2148866843.jpg",
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
      image:"https://static.vecteezy.com/system/resources/thumbnails/026/728/204/small/concept-of-financial-data-management-analytics-and-data-science-with-tiny-people-risk-management-abstract-illustration-machine-learning-metaphorical-dashboard-vector.jpg",
      title:"Can A Commerce Student Do Data Science?",
      author:"Saakshi Priyadarshini",
      date:"16 Apr, 2024",
      courseName:"datascience" 
    },
    {
      id:"20",
      image:"https://miro.medium.com/v2/resize:fit:925/1*E1haIGB9K4K89PsFZgm-pw.jpeg",
      title:"How Long Would It Take to Learn Data Science?",
      author:"Meghana D",
      date:"16 Apr, 2024",
      courseName:"datascience" 
    },
    {
      id:"21",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4gJIKGWo19TK_Nu0KGNzcxPHgIRWXrTPhw&s",
      title:" How to become a Data Scientist after Mechanical Engineering?",
      author:"Lahari Chandana",
      date:"16 Apr, 2024",
      courseName:"datascience" 
    },
    {
      id:"22",
      image:"https://img.freepik.com/free-vector/salary-gap-male-female-business-characters_74855-19874.jpg",
      title:"Everything about Data Scientist Salary in India | 2024",

      author:"Srinithi Sankar",
      date:"02 Apr, 2024",
      courseName:"datascience" 
    },
    {
      id:"23",
      image:"https://av-eks-lekhak.s3.amazonaws.com/media/__sized__/article_images/image_KEBKgaE-thumbnail_webp-600x300.webp",
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