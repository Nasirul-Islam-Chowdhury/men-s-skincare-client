import React from "react";

const Accordian = () => {
  return (
    <div className="container  font-primary font-semibold my-32">
      <div className="collapse collapse-plus bg-slate-100 mb-4">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          What is men's skincare service?
        </div>
        <div className="collapse-content">
          <p>
            Men's skincare service refers to specialized treatments and services
            tailored specifically to address the skincare needs and concerns of
            men. These services typically include facials, beard grooming,
            exfoliation, deep cleansing, moisturizing, and other treatments
            designed to improve the overall health and appearance of men's skin.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-slate-100 mb-4">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Why should men consider skincare services?
        </div>
        <div className="collapse-content">
          <p>
          
            Men's skin is different from women's, and it requires specific
            attention and care. Skincare services help address common issues
            faced by men, such as razor burn, ingrown hairs, oily skin, acne,
            and signs of aging. Regular skincare treatments can improve the
            texture, tone, and overall health of the skin, leaving it looking
            revitalized and rejuvenated.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus mb-4 bg-slate-100">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Are skincare services only for men with problem skin?
        </div>
        <div className="collapse-content">
          <p>
            No, skincare services are beneficial for all men, regardless of
            their skin condition. Whether you have oily skin, dry skin,
            sensitive skin, or simply want to maintain healthy skin, skincare
            services can provide a range of benefits, including deep cleansing,
            hydration, and relaxation.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus mb-4 bg-slate-100">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          How often should I get a skincare service?
        </div>
        <div className="collapse-content">
          <p>
            The frequency of skincare services depends on your individual skin
            needs and concerns. Generally, it is recommended to receive a
            skincare service every 4-6 weeks to maintain healthy skin. However,
            your skincare professional can assess your skin and provide
            personalized recommendations based on your skin type and specific
            goals.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus mb-4 bg-slate-100">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Will skincare services make my skin look feminine?
        </div>
        <div className="collapse-content">
          <p>
            Skincare services are designed to improve the health and appearance
            of your skin, regardless of gender. They are not intended to make
            your skin look feminine. The goal is to achieve a balanced, healthy
            complexion that suits your individual features and preferences.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus mb-4 bg-slate-100">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          Can men with facial hair receive skincare services?
        </div>
        <div className="collapse-content">
          <p>
            Absolutely! Skincare services can be tailored to accommodate facial
            hair. Professionals can provide treatments and techniques that work
            around your beard or mustache, ensuring that the skin underneath
            remains healthy and well-maintained.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordian;
