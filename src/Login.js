import React from 'react';
import "./Login.css";
import emailjs from 'emailjs-com';



export default function Login() {

	function sendEmail(e) {
		e.preventDefault();
	
		emailjs.sendForm('service_bgm7dji', 'template_lzxo1u1', e.target, 'user_ge1igHpxmNzJz99nXnHUT')
		
		  .then((result) => {
			  console.log(result.text);
		  }, (error) => {
			  console.log(error.text);
		  });
		  e.target.reset()
	  }



    return (
       
        <section class="About_US About_US_second"  id="contact">
		<div class="container headings text-center">
			<h3 class="text-center  text_color">Contact us for more information and demo</h3>
		</div>


		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-8 col-15 offset-lg-2 offset-md-4 offset-1">
					<form  onSubmit={sendEmail}  >

  						<div class="form-group">
    					<input name="name" type="text" class="form-control font_size_form"   autocomplete="off"
    					placeholder="Name"/>
  						</div>
  							
  						<div class="form-group">
    					<input name="email" type="email" class="form-control font_size_form" required autocomplete="off"
    					placeholder="Email"/>
  						</div>

  						<div class="form-group">
						  <input name="phone" type="text" class="form-control font_size_form"  autocomplete="off"
    					placeholder="Phone"/>
  						</div>

  						<div class="form-group">
  						<textarea name="message" class="form-control font_size_form" rows="5"  placeholder="Your Message"></textarea>
						</div>


						<div class="d-flex justify-content-center ">
  						<input type="submit" value="Submit"  class="btn btn-primary btn-lg" ></input>
  					    </div>
						
						</form>

						</div>


					</div>
		</div>


		

</section>
      
        
    )
}

