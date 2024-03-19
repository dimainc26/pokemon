export const SquarePreview = ({imgLink}) => {
  return (
    <div className="mini-box-img">
      <img
        src={imgLink}
        alt="Pokemon"
        className="mini-p-image"
      />
    </div>
  );
};
