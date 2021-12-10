import React, { useState} from 'react';
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";



const Contact = () => {
	const [successMessage, setSuccessMessage] = useState(" ");
	 const { register, formState: { errors }, handleSubmit } = useForm();

	const serviceID = "service_ID";
	const templateID = "template_ID";
	const userId = "user_9la4WCjgKMqeLWSmGcWKC";
	const onSubmit = (data, r) => {
		sendEmail(
			serviceID,
			templateID,
			{
				name: data.name,
				email: data.email,
				subject: data.subject,
				message: data.message
			},
			userId
			)
			r.target.reset();
	}

 	const sendEmail = (serviceID, templateID, variables, userId) => {
 

	    emailjs.send(serviceID, templateID, variables, userId)
	      .then(() => {
	          setSuccessMessage("Form sent successfully");
	      }).catch(err => console.error(`Something bad happened ${err}`));
	      
	  }


	
		return (
			<div className="contacts">
				<div className="text-center">
				<h1>Contact</h1>
				<p>Placeholder</p>
					<span className="success-message"> {successMessage}</span>
				</div>
				<div className="container">
					<form onSubmit={handleSubmit(onSubmit)} >
					<div className="row">
						<div className="col-md-6 col-xs-12">
							<input
								type="text"
								className="form-control"
								placeholder="Name"
								name="name"
								{...register("name", { required: "please enter name" })}
							/>
								{errors.name?.type === 'required' && ( <span className="error">{errors.name.message}</span>)
							}
							
							<input
								type="email"
								className="form-control"
								placeholder="Email"
								name="email"
								{...register("email", { required: "please enter email" })}
							/>
								{errors.email?.type === 'required' && ( <span className="error">{errors.email.message}</span>)
							}
							<input
								type="text"
								className="form-control"
								placeholder="Subject"
								name="Subject"
							/>
						</div>
						<div className="col-md-6 col-xs-12">
							<textarea
								type="text"
								className="form-control"
								placeholder="Message"
								name="message"
								{...register("message", { required: "please enter message" })}
							>
								
							</textarea>
							{errors.message?.type === 'required' && ( <span className="error">{errors.message.message}</span>)
							}
							<button className="btn-main-offer contact-btn" type="submit">
								Contact me
							</button>
							
						</div>
					</div>
					</form>
				</div>
			</div>
			)
		}
	

export default Contact;

