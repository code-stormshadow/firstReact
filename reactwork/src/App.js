import React from 'react';
import './App.css';

import unsplash from './unsplash.jpg';

function App() {
  return (
    <div className="App" id='app'>
    <h1 id="h1"> Hey! I'm Emi-ife.</h1> 
    <p id="reason">The ability to create amazing products is the number 
      one reason why I love web development. It also helps that I have the 
      freedom to be creative, work with great people and web development is among 
      those careers that help professionals live a life stress-free. 
    </p>
    <h2 id="h2"> My skills</h2>
    <p id="skills"> Eager and passionate <strong>Product Designer</strong> with a background
      in web design, user research, interaction design and wireframes. I am
      excited about projects that aim at driving transformational solutions to
      deliver better customer experience and generate organizational growth.
    </p>
      <a id="external_link" href="https://dreamsactivate.com">Bring your dreams to life</a><br/>
      <img src={unsplash} className="unsplash.jpg" alt="code" width='500' height='500'/>
      
      <ol id= 'ordered' type='1'>
        <li id='service1'>UI Design</li>
        <li id='service2'>Web hosting</li>
        <li id='service3'>Software programming</li>
      </ol>
      <ul id='unordered' type='2'>
      <li id='country1'>Coffee</li>
      <li id='country2'>Tea</li>
      <li id='country3'>Milk</li>
      </ul>
      <form>
       <input type='text' id='name' placeholder='Full Name'></input> <br/>
        <input type='email' id='email_address' placeholder='Email Address'></input><br/>
        <textarea type='text' id='textarea'> Message</textarea><br/>
        <input type='radio' id='radio_male'/>
        <label for='radio_male'>Male</label>
        <input type='radio' id='radio_female'/>
        <label for='radio_female'>Female</label><br/>
        <label for='check_boxTennis'>Tennis</label>
        <input type='checkbox' id='check_box'/><br/>
        <label for='check_boxReading'>Reading</label>
        <input type='checkbox' id='check_box'/><br/>
        <label for='check_boxVolleyball'>Volleyball</label>
        <input type='checkbox' id='check_box'/><br/>
        <button type='submit' id='submit_button'>Submit</button>
        
      </form>
      <footer id='footer'>
        <p id='footer_p'>
          Author: Emi-ife Faluyi
        </p>
      </footer>
      
      
    </div>
  );
}

export default App;

