export const Type = ({ type, color, children }) => {
  const imagePath = require(`../imgs/types/20px-${type}_icon.png`);

  return (
    <div className="t-box" style={{backgroundColor: color}} >
      <img src={imagePath} alt="" className="t-img" />
      <div className="t-text">{children}</div>
    </div>
  );
};
