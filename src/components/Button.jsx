export const Button = ({ off, color, onClick, children }) => {
  
  return (
    <div>
      <button
        onClick={onClick}
        className={off === false ? "btn" : "btn-off"}
        style={{
          borderColor: "var(--back-color)",
          backgroundColor: off === false ? color : "none",
        }}
      >
        {children}
      </button>
    </div>
  );
};
