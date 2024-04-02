import kuvaKatie from '../images/katie.png'

export default function Kortti({img, rating, reviewCount, location, title, price}) {
  
    return (
        <div className="kortti">
            <img src={`../images/${img}`} className='kortti--kuva' alt="" />
            <div>
                <img src="../images/star.png" className="kortti--tahti" alt="kortti" />
                <span>{' ' + rating}</span>
                <span className="harmaa"> ({reviewCount})•</span>
                <span className="harmaa">{location}</span>
            </div>
            <div className='info'>
                <p className="kortti--title">{title}</p>
                <p className="kortti--hinta">
                    <span className='lihava'>From ${price}</span> / person
                </p>
            </div>
        </div>
    );
}
