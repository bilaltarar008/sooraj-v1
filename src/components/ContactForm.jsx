// // src/components/ContactForm.jsx
// import React, { useState } from "react";

// /**
//  * Contact form - client-side only (static)
//  * On submit we simply simulate a send (no backend).
//  */
// export default function ContactForm(){
//   const [form, setForm] = useState({name:"",email:"",phone:"",message:""});
//   const [submitted, setSubmitted] = useState(false);

//   function handleChange(e){
//     setForm({...form, [e.target.name]: e.target.value});
//   }

//   function handleSubmit(e){
//     e.preventDefault();
//     // In production: send to API or email service. For now just show confirmation.
//     console.log("Contact form:", form);
//     setSubmitted(true);
//     setForm({name:"",email:"",phone:"",message:""});
//   }

//   if(submitted){
//     return <div style={{padding:14,background:"#e9fff0",borderRadius:8}}>
//       <strong>Thank you —</strong> we received your message and will contact you soon.
//     </div>;
//   }

//   return (
//     <form onSubmit={handleSubmit} aria-label="Contact form">
//       <div className="form-group">
//         <label>Name</label>
//         <input name="name" value={form.name} onChange={handleChange} required />
//       </div>
//       <div className="form-group">
//         <label>Email</label>
//         <input name="email" type="email" value={form.email} onChange={handleChange} required />
//       </div>
//       <div className="form-group">
//         <label>Phone</label>
//         <input name="phone" value={form.phone} onChange={handleChange} />
//       </div>
//       <div className="form-group">
//         <label>Message</label>
//         <textarea name="message" value={form.message} onChange={handleChange} required />
//       </div>
//       <button className="btn btn--primary" type="submit">Send Message</button>
//     </form>
//   );
// }
