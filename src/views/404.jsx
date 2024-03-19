import logiaImg from "../imgs/logia.png";

export const NotFoundPage = () => {
  return (
    <div className="container-404">
      <div className="left-box">
        <h1 className="title">Oooops...</h1>
        <p className="sub-title">Pagina non trovata</p>
        <p className="desc">
          La pagina che stai cercando non esiste o un altro errore è occorso,
          torna alla Home Page.
        </p>
        <button className="btn">Torna indietro</button>
      </div>
      <div className="right-box">
        <p className="big-text">404</p>
        <div className="img-box">
          <img src={logiaImg} alt="Logia" className="error-img" />
        </div>
      </div>
    </div>
  );
};
