import React, {useState} from "react";


function ContactMe() {
 
  const [formsState, setFormState] = useState({name: "", email: "", message: ""});
  const [error, setError] = useState ("");
  const {name, email, message} = formsState;

  function handleChange(e) {
    if (e.target.name === 'Email') {
      
    }
  }

  function handleSubmit(e){
    e.preventDefault();
  }


  return(
    <div className= 'box'>
      <section className= 'container'>
        <h1 id ='contact-head' className= 'mb-5 fw-bold'>Contact Jon</h1>
        <form>
          {error &&(
            <div>
              <p className = "error-text text-danger fs-3">{error}</p>
            </div>
          )}
          <div className = "mb-3">
            <label for= "input1" class= "form-label">Name</label>
            <input
            type = "name" 
            name = "name"
            class="form-control"
            id ="input1"
            placeholder="Enter your name" 
            required defaultValue={name} 
            onBlur={handleChange}>
            </input>
          </div>

          <div className = "mb-3">
            <label for= "input1" class= "form-label">Email</label>
            <input
            type = "email" 
            name = "email"
            class="form-control"
            id ="input2"
            placeholder="Enter your email" 
            required defaultValue={email} 
            onBlur={handleChange}>
            </input>
          </div>

          <div className = "mb-3">
            <label for= "input1" class= "form-label">Message</label>
            <input
            type = "message" 
            name = "message"
            class="form-control"
            id ="input3"
            placeholder="Enter your message" 
            required defaultValue={message} 
            onBlur={handleChange}>
            </input>
          </div>

          <btn class= "btn btn-outline-dark mb-5" 
              type= "submit"
              onSubmit={handleSubmit}>Contact</btn>
        </form>
      </section>
    </div>
  );
}
export default ContactMe