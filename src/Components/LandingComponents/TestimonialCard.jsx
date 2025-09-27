import React from "react";
import "./testimonials.css";
import Avatar from "../../assets/Images/user.png";
function TestimonialCard() {

  return (
    <div className="testimonial-card chat-style"   >
       <div className="testimonial-header d-flex align-items-center gap-3">
        <img
          className="user-icon bounce-avatar"
          src={Avatar}
          alt="Avatar"
        />
        <span className="testimonial-user fw-bold">{"مستخدم"}</span>
      </div>

      <div className="testimonial-feedback">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, autem!</p>
      </div>

     
    </div>
  );
}

export default TestimonialCard;
