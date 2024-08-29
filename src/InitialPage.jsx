import "./styles.css";
import Form from "./form/Form.jsx";
import { useState } from "react";

export default function InitialPage() {
  const [renderForm, setRenderForm] = useState(null);

  const handleShow = () => {
    setRenderForm(!renderForm);
  };
  return (
    <div>
    <div className="App" onClick={()=>{
      handleShow()
    }}>
      <h2>User Details Modal</h2>
      <button onClick={handleShow} className="Btn">
        Open Form
      </button>
      </div>
      <div>
      {renderForm ? <Form /> : null}
        </div>
      </div>   
  );
}