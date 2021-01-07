import React from 'react';
import "./Login.css";




export default function Login() {

    return (
       
        <section class="About_US About_US_second"  id="contact">
		<div class="container headings text-center">
			<h3 class="text-center  text_color">Contact us for more information and demo</h3>
		</div>


		<div class="container">
			<div class="row">
				<div class="col-lg-8 col-md-8 col-15 offset-lg-2 offset-md-4 offset-1">
					<form action="mailto:contact@sigmared.ai" method="POST"  name="EmailForm">

  						<div class="form-group">
    					<input name="name" type="text" class="form-control font_size_form" id="name"  autocomplete="off"
    					placeholder="Name"/>
  						</div>
  							
  						<div class="form-group">
    					<input name="email" type="email" class="form-control font_size_form" id="email" required autocomplete="off"
    					placeholder="Email"/>
  						</div>

  						<div class="form-group">
						  <input name="phone" type="text" class="form-control font_size_form" id="email" autocomplete="off"
    					placeholder="Phone"/>
  						</div>

  						<div class="form-group">
  						<textarea name="message" class="form-control font_size_form" rows="5" id="comment" placeholder="Your Message"></textarea>
						</div>


						<div class="d-flex justify-content-center ">
  						<button type="submit"  class="btn btn-primary btn-lg" value='Submit'>Submit</button>
  					    </div>
						
						</form>

						</div>


					</div>
		</div>


		

</section>
      
        
    )
}

