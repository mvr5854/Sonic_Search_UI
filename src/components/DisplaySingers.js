import style from "../styles/DisplayResult.module.css";

/**
 * Renders a list of singers with their details.
 * 
 * @param {Object} props - The component props.
 * @param {Array} props.data - The array of singer objects containing their information.
 * 
 * @returns {JSX.Element} The rendered list of singers.
 */
export default function DisplaySingers(props) {
  return (
    <div className={style.list}>
      {props.data.map((singer) => (
        <div className={style.card} key={singer.id}>
          <div className={style.card_img_cover}>
            <img src={singer.singerCoverURL} alt="Singer Cover" />
          </div>
          <div className={style.card_details}>
            <div className={style.card_title}>{singer.name}</div>
            {singer.genres !== "" && 
              <div className={style.card_info}>
                <span className={style.card_info_heading}>Genre:</span> {singer.genres}
              </div>}
            {singer.latestAlbums !== "" &&
            <div className={style.card_info}>
              <span className={style.card_info_heading}>Latest Albums:</span> {singer.latestAlbums}
            </div>}
            {singer.topTracks !== "" &&
            <div className={style.card_info}>
              <span className={style.card_info_heading}>Top Songs:</span> {singer.topTracks}
            </div>}
          </div>
        </div>
      ))}
    </div>
  );
}
