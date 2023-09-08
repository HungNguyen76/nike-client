// import loadingIcon from '@img/loading-icon.jpg'
import Spinner from "react-bootstrap/Spinner";
import "./Loading.scss";

export default function Loading() {
  return (
    // <div className='loading_container'>
    //   <img className='rotating-image' src={loadingIcon}/>
    // </div>
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}
