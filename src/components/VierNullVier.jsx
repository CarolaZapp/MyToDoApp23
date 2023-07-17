import "./VierNullVier.css"
import img404 from "./Eintopf Logo_w.png";

const VierNullVier = () => {
  return (
    <div className="vierNullVier">
      <h1 className="header"> !! 404 error !! </h1>
      <img src={img404} alt="Bild" width="100px" />
      <h2 >Page not found! Unknown address !</h2>
    </div>
  );
};

export default VierNullVier;
