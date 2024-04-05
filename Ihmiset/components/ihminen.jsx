export default function Ihminen({ name, email, address, phone, website }) {
    return (
        <div className="kortti">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>{address}</p>
            <p>{phone}</p>
            <p className="bold">{website}</p>
        </div>
    )
}