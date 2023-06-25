import Head from "next/head";
export default function New(){
    return(
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
        <section id="biography">
            <div className="biography-top">
              <div className="biography-perfil">
               <img src="../images/perfil.jpg" className="photo-biography" alt="Perfil"></img>
               <p className="ability-biography">React</p>
               <p className="ability-biography">HTML</p>
               <p className="ability-biography">JavaScript</p>
               <p className="ability-biography">Node</p>
               <p className="ability-biography">CSS</p>
               <p className="ability-biography">MERN Stack</p>
               <p className="ability-biography">API</p>
               <p className="ability-biography">MongoDB</p>
               <p className="ability-biography">Authentication</p>
             </div>
             <div className="biography-text">
             <h1>Anthony Sugashima Alegria</h1>
             <br/>             
             <h3 className="text-inneBiO"><em>Web developer</em> | Free lancer, Full Time, Part Time</h3>
             </div>
            </div>
            <div className="biography-bottom">
                <h1 className="bottom-t">The Short Story</h1>
                <hr/>
                <br/>
                <br/>
                 <p className="bottom-p">I studied systems engineering for 2 years at the national university of Trujillo and simply fell in love with programming (studies currently on pause). I migrated to Japan and entered a short programming job where I was trained with the basics of JavaScript, CSS, and more. Since then I have not stopped expanding my knowledge. My native language is Spanish, I am proficient in English and I have a level of N4 in Japanese.</p>
            </div>
        </section>
        </main>
        </>
    )
}