export default function Vitsi({kysymys, vastaus}) {
    return (
        <div  className='vitsi'>
            <h3>{kysymys}</h3>
            <p>{vastaus}</p>
        </div>
    )
}