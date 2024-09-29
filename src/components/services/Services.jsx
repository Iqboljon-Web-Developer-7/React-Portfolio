import React from "react";

import img1 from "@/assets/services/car.svg";
import img2 from "@/assets/services/money.svg";
import img3 from "@/assets/services/lock.svg";
import img4 from "@/assets/services/call.svg";

const Services = () => {
  return (
    <section className="services wrapper p-14">
      <div className="service bg-[#F3F5F7]">
        <img src={img1} alt="service car icon" className="max-w-12" />
        <h4 className="text-">Free Shipping</h4>
        <p>Order above $200</p>
      </div>
      <div className="service bg-[#F3F5F7]">
        <img src={img2} alt="service money icon" className="max-w-12" />
        <h4 className="text-">Money-back</h4>
        <p>30 days guarantee</p>
      </div>
      <div className="service bg-[#F3F5F7]">
        <img src={img3} alt="service lock icon" className="max-w-12" />
        <h4 className="text-">Secure Payments</h4>
        <p>Secured by Stripe</p>
      </div>
      <div className="service bg-[#F3F5F7]">
        <img src={img4} alt="service call icon" className="max-w-12" />
        <h4 className="text-">24/7 Support</h4>
        <p>Phone and Email support</p>
      </div>
    </section>
  );
};

export default Services;
