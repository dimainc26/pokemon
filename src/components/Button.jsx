export const Button = ({ off, color, children }) => {
  function finalColor(color) {
    let finalColor = "";

    switch (color) {
      case "black":
        finalColor = "#000000";
        break;
      case "blue":
        finalColor = "#0D47A1";
        break;
      case "grey":
        finalColor = "#424242";
        break;
      case "green":
        finalColor = "#1B5E20";
        break;
      case "pink":
        finalColor = "#AD1457";
        break;
      case "purple":
        finalColor = "#4A148C";
        break;
      case "red":
        finalColor = "#B71C1C";
        break;
      case "white":
        finalColor = "#FFFFFF";
        break;
      case "yellow":
        finalColor = "#F9A825";
        break;
      case "brown":
        finalColor = "#5D4037";
        break;
      default:
        finalColor = "var(--back-color)"; 
        break;
    }

    return finalColor;
  }

  return (
    <div>
      <button
        className={off === false ? "btn" : "btn-off"}
        style={{
          borderColor: 'var(--back-color)',
          backgroundColor: off === false ? color : "none",
        }}
      >
        {" "}
        {children}{" "}
      </button>
    </div>
  );
};
