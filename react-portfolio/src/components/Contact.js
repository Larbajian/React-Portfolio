import React, {useState} from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {

    const [email, setEmail] = useState('');
    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

 const handleSenderInput = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
        setEmail(inputValue);
    } else if (inputType === 'firstName') {
        setfirstName(inputValue);
    } else if (inputType === 'lastName') {
        setlastName(inputValue);
    } else {
        setMessage(inputValue);
    }
    };

const handleMessageSend = (e) => {

    e.preventDefault();
    if (!validateEmail(email)) {
        setErrorMessage('Email is invalid');
        return;
      }
      //SEND EMAIL
  
      // If everything goes according to plan, we want to clear out the input after a successful registration.
     setEmail('');
     setfirstName('');
     setlastName('');
     setMessage('');
    };
   
///////////////////////////////////////////////////////////////////////////


    return (
      <div>
        <h1> Contact Me </h1>
        <form onSubmit={handleMessageSend}>
          <div>
            <label for="firstName">First Name:</label>
            <input
            value= {firstName}
            onChange={handleSenderInput}
              type="text"
              placeholder="First Name"
              name="firstName"
              id="firstName"
            />
          </div>

          <div>
            <label for="lastName">Last Name:</label>
            <input
             value= {lastName}
             onChange={handleSenderInput}
              type="text"
              placeholder="Last Name"
              name="lastName"
              id="lastName"
            />
          </div>

          <div>
            <label for="email">Email:</label>
            <input
             value= {email}
             onChange={handleSenderInput}
              type="text"
              placeholder="username@email.com"
              name="email"
              id="email"
            />
          </div>

          <div>
            <label for="message">Message:</label>
            <textarea
             value= {message}
             onChange={handleSenderInput}
              rows="5"
              type="text"
              placeholder="Your message!"
              name="message"
              id="message"
            >
            </textarea>
          </div>

          <div>
            <button onClick={handleMessageSend} type="submit" id="send" > 
                Send!
            </button>
          </div>
        </form>
        {errorMessage && (
        <div>
          <p>{errorMessage}</p>
        </div>
      )}
      </div>
    );
}

export default Contact;