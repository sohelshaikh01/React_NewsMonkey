import Spinner from "../assets/spinner1.gif";

function Loader() {
    return (
      <div className="m-auto flex justify-center">
        <img src={Spinner} alt="Loading..." />
      </div>
    );
}

export default Loader;
