const Card = ({name,order,hidden}) =>{
    return(
        <div className={`card ${hidden ? 'face-back' : ''}`} style={{top:`${order*8}px`,zIndex:order+1} }>
            {hidden ? 'Click to reveal' : name}
        </div>
    )
}

export {Card}