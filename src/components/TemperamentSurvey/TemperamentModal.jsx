import React from 'react';
import './TemperamentSurvey.css';
const TemperamentModal = ({ isOpen, closeModal, setIsReady }) => {
    const handleEvent =  () => {
        setIsReady(2)
        window.scrollTo(0, 0);
    }
    return (
        <div className={`modal ${isOpen ? 'open' : ''}`}>
            <div className="modal-content">
                <div className="temperament-quiz-start">
                    <div className="header-start">
                        <h1>
                            آزمون مزاج شناسی
                        </h1>
                        <hr className=" border border-success border-3"/>
                    </div>
                    <button className="start-button border border-success" onClick={handleEvent}>
                        <p className=" fs-4 m-0">
                            شروع آزمون
                        </p>
                        <i className="start-icon fas fa-arrow-left fs-4"></i>
                    </button>
                </div>
                <button className="basic-start-button border border-success m-0" onClick={closeModal}>بستن</button>
            </div>
        </div>
    );
};

export default TemperamentModal;
