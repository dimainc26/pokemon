export const General = ({ generation }) => {
  return (
    <div className="first-box">
      <p className="p-text">
        GENERAZIONE :{generation ? generation.name : "non trovato"}
      </p>
    </div>
  );
};
