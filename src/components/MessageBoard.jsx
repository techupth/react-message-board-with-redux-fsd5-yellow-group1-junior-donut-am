import { useDispatch } from "react-redux";
import { addText, deleteText, createText } from "../slices/messageBoardSlice";
import { useSelector } from "react-redux/es/hooks/useSelector";

function messageBoard() {
  const handlertext = useSelector((state) => {
    return state.input;
  });
  const dispatch = useDispatch();

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Message board</h1>
      <div className="message-input-container">
        <form onSubmit={(event)=>{
          event.preventDefault()
          dispatch(addText())
        }}>
          <label>
            <input
              id="message-text"
              name="message-text"
              type="text"
              placeholder="Enter message here"
              onChange={(event) => {
                dispatch(createText(event.target.value));
              }}
              value={handlertext.textInput}
            />
          </label>
          <button className="submit-message-button" type="submit">
            Submit
          </button>
        </form>
      </div>
      {handlertext.messageArray.map((item,index)=>{
        return (<div key={index} className="board">
        <div className="message">
          <h1>{item}</h1>
          <button className="delete-button"onClick={()=>{
            dispatch(deleteText(index))
          }}>x</button>
        </div>
        </div>)
      })}
    </div>
  );
}

export default messageBoard;
