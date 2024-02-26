import style from '../styles/DisplayResult.module.css';

/**
 * Renders a list of songs with their details.
 * 
 * @param {Object} props - The component props.
 * @param {Array} props.data - The array of songs data.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export default function DisplaySongs(props) {
    return (
        <div className={style.list}>
            {props.data.map((song) => (
                <div className={style.card} key={song.id}>
                    <div className={style.card_img_cover}>
                        <img src={song.songCoverURL} alt="Song Cover" />
                    </div>
                    <div className={style.card_details}>
                        <div className={style.card_title}>{song.title}</div>
                        <div className={style.card_info}>
                            <span>{song.artist}</span>
                            <span> &#8226; </span>
                            <span>{formatDuration(song.durationInSec)}</span>
                        </div>
                        <div className={style.card_info}>
                            <span>Album: {song.album}</span>
                            <span> &#8226; </span>
                            <span>Released: {formatDate(song.releaseDate)}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

/**
 * Formats the duration in seconds into a string representation.
 * 
 * @param {number} durationInSec - The duration in seconds.
 * @returns {string} The formatted duration string.
 */
function formatDuration(durationInSec) {
    const minutes = Math.floor(durationInSec / 60);
    const seconds = durationInSec % 60;
    return `${minutes} min ${seconds.toString().padStart(2, '0')} sec`;
}

/**
 * Formats a date into a string representation.
 * 
 * @param {Date} date - The date to be formatted.
 * @returns {string} The formatted date string.
 */
function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
    
}