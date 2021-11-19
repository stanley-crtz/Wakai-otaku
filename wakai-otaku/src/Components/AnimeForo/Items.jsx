export const Items = ({ user, msg, img='' }) => {

    return (
        <div className="foro-item">
            <div className="circle" />
            <div className="description">
                <h3>{user}</h3>
                <label>{msg}</label>
            </div>
        </div>
    )
}
