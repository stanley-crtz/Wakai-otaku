export const Information = ({posterImage, titles, startDate, synopsis, youtubeVideoId}) => {
    
    return (
        <div className="information">
            <div className="description">
                <div className="image-wrap">
                    <img src={posterImage.tiny} alt="Paisaje" />
                </div>
                <div className="details">
                    <p>Nombre: {titles.en_jp}</p>
                    <p>Emision: {startDate}</p>
                    <p>Trailer: <a target="_blank" rel="noreferrer" href={`https://www.youtube.com/watch?v=${youtubeVideoId}`}>Enlace</a></p>
                </div>
            </div>
            <div className="synopsis">
                <h2>Sinopsis</h2>
                <p>{synopsis}</p>
            </div>

        </div>
    )
}
