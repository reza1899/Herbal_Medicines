import React, {useState} from 'react';

const questions = [
    {
        question: 'معمولا رنگ چهره شما چگونه است ؟',
        options: ['سفید', 'تیره', "مایل به زرد", "مایل به قرمز"],
    },
    {
        question: 'اشتها به غذا در شما چگونه است ؟',
        options: ['پر اشتها', 'کم اشتها'],
    },
    {
        question: 'دمای بدن خود را چگونه توصیف میکنید ؟',
        options: ["معمولا سرد", "معمولا گرم"],
    },
    {
        question: 'حال و هوای خود را در بیشتر روز ها چگونه توصیف میکنید ؟',
        options: ["آرام و ریلکس" , "تند خو و عصبانی" , "خوش اخلاق و اجتماعی" , "بی قرار و آشفته"],
    },
    {
        question: '',
        options: [""],
    },
    {
        question: '',
        options: [""],
    },
    // Add more questions here...
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

                // Add more cases as needed...
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
            return 'سرد و خسک مزاج (سوداوی)';
        } else {
            return 'سرد و تر مزاج (بلغمی)';
        }
    };

    if (temperament) {
        return (
            <div>
                <h1>Your Temperament is: {temperament}</h1>
            </div>
        );
    }

    return (
        <div>
            <h1>Temperament Quiz</h1>
            <p>{questions[currentQuestion].question}</p>
            {questions[currentQuestion].options.map((option) => (
                <button key={option} onClick={() => handleAnswer(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
};

export default TemperamentSurvey;
