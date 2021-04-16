import './carousel-header.style.css'

export default function CarouselHeader({title,icon})
{
    return(<div className='carousel-title-container'>

        <div><img src={icon} width='35px'/></div>
        <div style={{marginLeft:'10px'}}>{title}</div>
    </div>)



}