import React from 'react';
import './TemperamentSurvey.css';
import Button from '@mui/material/Button';

const TemperamentModal = ({isOpen, closeModal, setIsReady}) => {
    const handleEvent = () => {
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
                    {/*<button className="start-button border border-success" onClick={handleEvent}>*/}
                    {/*    <p className=" fs-4 m-0">*/}
                    {/*        شروع آزمون*/}
                    {/*    </p>*/}
                    {/*    <i className="start-icon fas fa-arrow-left fs-4"></i>*/}
                    {/*</button>*/}
                    <Button
                        onClick={handleEvent}
                        variant="contained"
                        sx={{
                            fontFamily: "Tanha",
                            backgroundColor: "#4caf50",
                            fontSize: '23px',
                            borderRadius: '10px',
                            width: "200px",
                            height : "60px",
                            transition : "0.5s",
                            '&:hover': {
                                backgroundColor: '#4caf50',
                                color: "ghostwhite",
                                width: "200px",
                                transition  : "0.5s",
                            },
                            '&:hover .start-icon': {
                                display: 'block'
                            },
                        }}
                    >
                        <p className="m1 fs-4 m-0">
                            شروع آزمون
                        </p>
                        <i className="start-icon fas fa-arrow-left fs-4"></i>
                    </Button>
                </div>
                {/*<button className="basic-start-button border border-success m-0" onClick={closeModal}>بستن</button>*/}
                <Button
                    onClick={closeModal}
                    variant="outlined"
                    color="error"
                    sx={{
                        fontFamily: "Tanha",
                        fontSize: '23px',
                        borderRadius: '10px',
                        width: "170px"
                    }}
                >
                    بستن
                </Button>
            </div>
        </div>
    );
};

export default TemperamentModal;
