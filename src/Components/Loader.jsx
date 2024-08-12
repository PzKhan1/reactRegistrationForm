import Spinner from 'react-bootstrap/Spinner';
import './../Style/Loader.css'
const Loader = function() {

    return <div className='load'>
         <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
}

export default Loader;
