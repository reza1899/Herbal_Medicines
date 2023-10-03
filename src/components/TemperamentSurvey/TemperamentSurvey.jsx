import React, {useState} from 'react';

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

    if (temperament) {
        return (<div>
            <h1>Your Temperament is: {temperament}</h1>
        </div>);
    }

    return (

        <>
            <div>
                <h1>Temperament Quiz</h1>
                <p>{questions[currentQuestion].question}</p>
                {questions[currentQuestion].options.map((option) => (
                    <button key={option} onClick={() => handleAnswer(option)}>
                        {option}
                    </button>))}
            </div>
        </>


    );
};

export default TemperamentSurvey;
