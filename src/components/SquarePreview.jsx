export const SquarePreview = ({onClick , imgLink}) => {
  return (
    <div onClick={onClick} className="mini-box-img">
      <img
        src={imgLink}
        alt="Pokemon"
        className="mini-p-image"
      />
    </div>
  );
};
