import Form from "./Form"
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";


const App = () => {

  return (
    <div className="grid grid-cols-4 grid-rows-2">
      <Form/>
      <Form1/>
      <Form2/>
      <Form3/>
    </div>
  );
};

export default App;
