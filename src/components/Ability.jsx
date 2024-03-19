export const Ability = ({ abilities }) => {
  return (
    <div className="first-box">
      {abilities.map((ability, index) => {
        return (
          <p key={index} className="p-ability">
            [ {ability.ability.name} ]
          </p>
        );
      })}
    </div>
  );
};
