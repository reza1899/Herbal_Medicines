import {useState} from 'react';
import "./TemperamentSurvey.css";
import TemperamentModal from "./TemperamentModal"; // Import the Modal component

const questions = [{
    question: 'معمولا رنگ چهره شما چگونه است ؟', options: ['سفید', 'تیره', "مایل به زرد", "مایل به قرمز"],
}, {
    question: 'اشتها به غذا در شما چگونه است ؟', options: ['پر اشتها', 'کم اشتها'],
}, {
    question: 'دمای بدن خود را چگونه توصیف میکنید ؟', options: ["معمولا سرد", "معمولا گرم"],
}, {
    question: 'حال و هوای خود را در بیشتر روز ها چگونه توصیف میکنید ؟',
    options: ["آرام و ریلکس", "تند خو و عصبانی", "خوش اخلاق و اجتماعی", "بی قرار و آشفته"],
}, {
    question: 'مزه و حالت دهان خود را چگونه توصیف میکنید ؟',
    options: ["حالت و مزه خاصی ندارد", "تولید زیاد بزاق و زبانی با پرز های تحلیل رفته", "زبان خشک و حس تلخی در دهان", "مزه دهان شیرین"],
}, {
    question: 'حالت پوست خود را چگونه توصیف میکنید ؟', options: ["معمولا خشک", "معمولا مرطوب"],
}, {
    question: 'وقتی با دوستان خود هستید، شما:',
    options: ["اغلب مرکز توجه هستید و دوست دارید کنترل را در دست بگیرید",
        "دوست دارید به بقیه گوش دهید و از آرامش لذت ببرید"
        , "اغلب به دیگران کمک می کنید و از اینکه به دیگران کمک کنید لذت می ببرید",
        "اغلب در نقش مشاور قرار می گیرید و به دیگران راهنمایی می کنید"],
},
    {
        question: 'در فعالیت های ورزشی، شما:',
        options: ["ترجیح می دهید ورزش های سرعتی و پر انرژی انجام دهید",
            "ترجیح می دهید ورزش های آرام و تمرکز بالا انجام دهید، مانند یوگا"
            , "ترجیح می دهید ورزش های تیمی انجام دهید که نیاز به همکاری دارند",
            "ترجیح می دهید ورزش های استراتژیک انجام دهید، مانند شطرنج"],
    },
    {
        question: 'وقتی با مشکلات روبرو می‌شوید، عکس‌العمل شما چیست؟',

        options: ["به دنبال راه حل‌های خلاقانه و نوآورانه می‌گردید.",
            "به دنبال راه حل‌های منطقی و عقلانی می‌گردید.",
            "به دنبال راه حل‌های عملی و ساده می‌گردید.",
            "به دنبال راه حل‌های همدلانه و همکارانه می‌گردید."
        ],
    },
    // {
    //     question: '', options: [""],
    // },
    // {
    //     question: '', options: [""],
    // },
];

const TemperamentSurvey = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [temperament, setTemperament] = useState(null);

    const handleAnswer = (answer) => {
        const newAnswers = [...answers, answer];

        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setAnswers(newAnswers);

        } else {
            const calculatedTemperament = calculateTemperament(newAnswers);
            setTemperament(calculatedTemperament);
        }
    };

    const calculateTemperament = (answers) => {
        // Define a scoring system based on the questions and answer choices
        let hotDryScore = 0;
        let hotWetScore = 0;
        let coldDryScore = 0;
        let coldWetScore = 0;

        // Customize the scoring system based on your preferences
        answers.forEach((answer) => {
            switch (answer) {
                // رنگ پوست
                case 'مایل به زرد':
                    hotDryScore += 1;
                    break;
                case 'تیره':
                    coldDryScore += 1;
                    break;
                case 'سفید':
                    coldWetScore += 1;
                    break;
                case 'مایل به قرمز':
                    hotWetScore += 1;
                    break;
                //     اشتها
                case "پر اشتها":
                    hotWetScore += 1;
                    coldWetScore += 1;
                    break;
                case "کم اشتها":
                    hotDryScore += 1;
                    break;
                //     دمای بدن
                case "معمولا سرد":
                    coldDryScore += 1;
                    coldWetScore += 1;
                    break;
                case "معمولا گرم":
                    hotWetScore += 1;
                    hotDryScore += 1;
                    break;
                //     حالت روحی
                case "آرام و ریلکس":
                    coldWetScore += 1;
                    break;
                case "تند خو و عصبانی":
                    hotDryScore += 1;
                    break;
                case "خوش اخلاق و اجتماعی":
                    hotWetScore += 1;
                    break;
                case "بی قرار و آشفته":
                    coldDryScore += 1;
                    break;
                //     حالت دهان
                case "حالت و مزه خاصی ندارد":
                    coldDryScore += 1;
                    break;
                case "تولید زیاد بزاق و زبانی با پرز های تحلیل رفته":
                    coldWetScore += 1;
                    break;
                case "زبان خشک و حس تلخی در دهان":
                    hotDryScore += 1;
                    break;
                case "مزه دهان شیرین":
                    hotWetScore += 1;
                    break;
                //  پوست
                case "معمولا خشک":
                    coldDryScore += 1;
                    hotDryScore += 1;
                    break;
                case "معمولا مرطوب":
                    coldWetScore += 1;
                    hotWetScore += 1;
                    break;
                // اجتماعی و روحی
                case "اغلب مرکز توجه هستید و دوست دارید کنترل را در دست بگیرید":
                    hotDryScore += 1;
                    break;
                case "دوست دارید به بقیه گوش دهید و از آرامش لذت ببرید":
                    coldWetScore += 1;
                    break;
                case "اغلب به دیگران کمک می کنید و از اینکه به دیگران کمک کنید لذت می ببرید":
                    hotWetScore += 1;
                    break;
                case "اغلب در نقش مشاور قرار می گیرید و به دیگران راهنمایی می کنید":
                    coldDryScore += 1;
                    break;
                // ترجیح
                case "ترجیح می دهید ورزش های سرعتی و پر انرژی انجام دهید":
                    hotDryScore += 1;
                    break;
                case "ترجیح می دهید ورزش های آرام و تمرکز بالا انجام دهید، مانند یوگا":
                    coldWetScore += 1;
                    break;
                case "ترجیح می دهید ورزش های تیمی انجام دهید که نیاز به همکاری دارند":
                    hotWetScore += 1;
                    break;
                case "ترجیح می دهید ورزش های استراتژیک انجام دهید، مانند شطرنج":
                    coldDryScore += 1;
                    break;

                case "به دنبال راه حل‌های خلاقانه و نوآورانه می‌گردید.":
                    hotWetScore += 1;
                    break;
                case "به دنبال راه حل‌های منطقی و عقلانی می‌گردید.":
                    hotDryScore += 1;
                    break;
                case "به دنبال راه حل‌های عملی و ساده می‌گردید.":
                    coldDryScore += 1;
                    break;
                case "به دنبال راه حل‌های همدلانه و همکارانه می‌گردید.":
                    coldWetScore += 1;
                    break;

                default:
                    break;
            }
        });

        // Determine the temperament based on the scores
        if (hotDryScore > hotWetScore && hotDryScore > coldDryScore && hotDryScore > coldWetScore) {
            return 'گرم و خشک مزاج (صفراوی)';
        } else if (hotWetScore > hotDryScore && hotWetScore > coldDryScore && hotWetScore > coldWetScore) {
            return 'گرم و تر مزاج (دموی)';
        } else if (coldDryScore > hotDryScore && coldDryScore > hotWetScore && coldDryScore > coldWetScore) {
            return 'سرد و خشک مزاج (سوداوی)';
        } else {
            return 'سرد و تر مزاج (بلغمی)';
        }
    };

    // if (temperament) {
    //     return (<div>
    //         <h1>Your Temperament is: {temperament}</h1>
    //     </div>);
    // }
    const [isReady, setIsReady] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (

        <>
            {isReady === 0 && (
                <div className="basic-description">
                    <div className="basic-description-right">
                        <h1 className="header-des">
                            طب سنتی برای همه;
                        </h1>
                        <hr className="header-line border border-4 border-success"/>
                        <p className="start-text ">
                            آزمون مزاج شناسی یک ابزار جالب برای درک مزاج شخصیتی خود است. مزاج شخصیتی نحوه عملکرد و
                            واکنش‌های شما در مواجهه با موقعیت‌های مختلف را نمایان می‌کند.
                        </p>
                        <p className="fs-4 mt-4 text-danger">
                            هشدار:
                        </p>
                        <p className="warning-text">
                            لطفاً توجه داشته باشید که این آزمون تنها یک ابزار تفریحی و آموزشی است و نباید برای
                            اندازه‌گیری دقیق مزاج شناسی پزشکی مورد استفاده قرار گیرد. در صورت نگرانی‌های جدی در مورد
                            سلامتی خود، با پزشک خود مشورت کنید.
                        </p>
                        <button className="basic-start-button border border-success " onClick={openModal}>آزمون مزاج
                            شناسی
                        </button>
                        <TemperamentModal isOpen={isModalOpen} closeModal={closeModal} setIsReady={setIsReady}/>

                    </div>
                    <img className="doctor-img floating-animation" src="../../../images/Medicine-amico (1).png"
                         alt="doctor icon"/>

                </div>
            )}
            {/*get start*/}
            {isReady === 1 && (
                // Section 1: Display the start screen
                <div className="temperament-quiz-start">
                    <div className="header-start">
                        <h1>
                            آزمون مزاج شناسی
                        </h1>
                        <hr className=" border border-success border-3"/>
                    </div>
                    <button className="start-button border border-success" onClick={() => setIsReady(2)}>
                        <p className=" fs-4 m-0">
                            شروع آزمون
                        </p>
                        <i className="start-icon fas fa-arrow-left fs-4"></i>
                    </button>
                </div>
            )}
            {/*
                questions test
            */}
            {isReady === 2 && !temperament && (
                <div className="questions-content">
                    <h1>
                        آزمون مزاج شناسی
                    </h1>
                    <div>
                        <p className="mt-4">
                            سوال {currentQuestion + 1} از{questions.length}
                        </p>
                        <p className="fs-4">
                            {questions[currentQuestion].question}
                        </p>
                        <div>
                            {questions[currentQuestion].options.map((option) => (
                                <button className="answer-button border border-secondary" key={option}
                                        onClick={() => handleAnswer(option)}>
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {isReady === 2 && temperament && (
                <div className="result-container">
                    <h1 className="result-title">نتیجه آزمون مزاج شناسی</h1>
                    <div className="result-content">
                        <p className="result-text">
                            تبریک! مزاج شما: <span className="temperament-name">{temperament}</span>
                        </p>
                        {/* You can add more details or explanations here */}
                    </div>
                </div>
            )}
        </>


    );
};

export default TemperamentSurvey;
