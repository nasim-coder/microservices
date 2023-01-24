import { useState } from "react";

const Myform = () => {
    const [inputs, setInputs] = useState({});
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    function handleSubmit() {
        console.log(inputs);
        alert(inputs)
    }

  return (
      <div>
          <form onSubmit={handleSubmit}>
              <input type="text" name="name" onChange={handleChange} value={inputs.name} />
              <input type="number" name="age" onChange={handleChange} value={inputs.age} />
              <input type="submit" />
          </form>
    </div>
  )
}

export default Myform