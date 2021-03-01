import "./style.css"

function Modal(props) {
   
    if(!props.show){
        return null;
    }
  return (
    <div className="wrapper" onClick={props.closeModal}>
        <div className="panel-modal">
            {props.children}
            <button onClick={props.closeModal}>OK!</button>   
        </div>
    </div>
  );
}

export default Modal;
