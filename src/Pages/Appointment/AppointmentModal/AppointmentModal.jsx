import React from "react";

const AppointmentModal = ({setCare , care, refetch}) => {
  return (
    <div>
      <div className="modal" id="my_modal_8">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">This modal works with anchor links</p>
          <div className="modal-action">
            <a href="#" className="btn">
              Yay!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
