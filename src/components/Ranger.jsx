export const Ranger = ({ranger}) => {
  return (
    <div className="p-stat">
      <p className="p-var">{ranger.stat.name} </p>
      <div>
        <p className="p-int"> {ranger.base_stat / 2 }</p>
        <div className="stat-container">
          <div
            className="stat-value"
            style={{ width: ranger.base_stat / 2 + "%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};
