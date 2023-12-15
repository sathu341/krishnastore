import ProgressBar from 'react-bootstrap/ProgressBar';

function Progressb() {
  return (
    <div>
     <i></i> <ProgressBar variant="success" now={40} />
      <ProgressBar variant="info" now={20} />
      <ProgressBar variant="warning" now={60} />
      <ProgressBar variant="danger" now={80} />
    </div>
  );
}

export default Progressb;