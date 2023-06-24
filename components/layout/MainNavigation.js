import EditAttributesIcon from '@mui/icons-material/EditAttributes';
import Link from 'next/link';

export default function MainNavigation(){

    return(
        <header>
        <div className="RealHeader">
        <div>
        <h1 className="Logo">AnProduction<EditAttributesIcon className='icon'/></h1>
        </div>
        <div className="links-space">
          <div>
           <Link href='/'>Home</Link>
          </div>
          <div>
           <a href="#projects">Sample Projects</a>
          </div>
          <div>
           <Link href="/Biography">Biography</Link>
          </div>
        </div>
        </div>
      </header>
    )
}