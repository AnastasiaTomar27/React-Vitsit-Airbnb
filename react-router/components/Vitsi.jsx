import { Link } from "react-router-dom/cjs/react-router-dom.min"

export default function Vitsi({vitsit, title}) {
    return (
        <div>
            <h2>{title}</h2>
            {vitsit.map((vitsi) => (
                <div key={vitsi.id}>
                    <div  className="vitsi-preview" >
                        <Link to={`/vitsit/${vitsi.id}`}>
                            <h3>{vitsi.kysymys}</h3>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    )
}