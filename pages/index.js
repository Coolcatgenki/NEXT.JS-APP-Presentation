import profile from '../public/photo.png';
import Image from 'next/image';
import {Slide, Zoom} from "@mui/material";
import {useState} from "react";
import ProjectDisplayer from "../components/projects/projectDisplayer";
import projects from "../components/projects/Projects";
import Head from "next/head";

function ProjectsDisplayed(){
 return (projects.map(function(project){
  return(
    <ProjectDisplayer key={project.id} img={project.img} name={project.name} explanation={project.explanation} link={project.link}/>
  )
 }))
}

export default function Home() {
 const [title, setTitle]= useState(false);
 const [phrase, setPhrase]= useState(false);

  function displayTitle(){
    setTitle(true);
  }

  setTimeout(displayTitle, 800);

  function displayPhrase(){
    setPhrase(true);
  }

  setTimeout(displayPhrase, 1600);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;1,400&display=swap" rel="stylesheet"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;1,400&display=swap" rel="stylesheet"></link>
      </Head>
  <main>
    <section id="presentation">
    <div className="RealPresentation">
    <div className='photo'>
    <Slide direction='right' in={true} mountOnEnter unmountOnExit timeout={{ appear: 1000, enter: 1000, exit: 1000 }}>
    <Image className="profile" src={profile}/>
    </Slide>
    </div>
    <div className='title'>
    <Zoom in={title} timeout={{ appear: 1000, enter: 1000, exit: 1000 }}>
    <h1>Hello, Im Anthony</h1>
    </Zoom>
    <Zoom in={phrase} timeout={{ appear: 1000, enter: 1000, exit: 1000 }}>
    <h3>A web developer</h3>
    </Zoom>
    </div>
    </div>
    </section>
    <section id="projects">
    <div className='RealProjects'>
     <div className='title-samples'>
      <h1 className='title-projetcs'>Deployed Samples</h1>
      <p>(The response of the api or the node-apps can take around a minute because it scale down if it was not being use)</p>
      <hr/>
     </div>
     <div className='Projects-Divisor'>
      <ProjectsDisplayed/>
    </div>
    </div>
    </section>
    </main>
    </>
  )
}
