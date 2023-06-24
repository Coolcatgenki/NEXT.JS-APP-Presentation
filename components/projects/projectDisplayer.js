
export default function projectDisplayer(props){
    return(
        <div className='projectDisplay'>
        <div className='project-title'>
        <h4 className='project-title-letter'>{props.name}</h4>
        </div>
        <div className='Project-explanation'>
          <h4 className='Project-explanation-letter'>{props.explanation}</h4>
          <a className='project-button'  target="_blank" href={props.link}>GO NOW</a>
        </div>
        <div className='Project-sample'>
        <img className="project-image" src={props.img} alt='Project-photo'/>
        </div>
      </div>
    )
}