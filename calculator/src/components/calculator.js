import CalculatorTitle from "./calculatorTitle";
import OutputScreen from "./outputScreen";
import Button from "./button";
import { useEffect, useState } from "react";

const Calculator = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleClick = (event) =>{
        const value = event.target.value

        switch(value){
            case '=':
                var ans = '';
                if (question !== ''){
                    try{
                        ans = eval(question);
                    }
                    catch(error){
                        // Math Error
                        ans = 'Math Error';
                    }
                }else{
                    // Math Error
                    ans = 'Math Error';
                }
                setQuestion('');
                setAnswer(ans);
                break;
            case 'Clear':
                setAnswer('');
                setQuestion('');
                break;
            case 'Delete':
                var str = question;
                str = str.substring(0, str.length - 1);
                setQuestion(str);
                break;
            default:
                var qst = question + value;
                setQuestion(qst);
                break;
        }
    }

    return(
        <div className="frame">
        <CalculatorTitle value="VinhTQ Calculator" />
        <OutputScreen question={question} answer={answer} />
        <div className="button-row">
            <Button label="Clear" onClick={handleClick} />
            <Button label="Delete" onClick={handleClick} />
            <Button label="." onClick={handleClick} />
            <Button label="/" onClick={handleClick} />
        </div>
        <div className="button-row">
            <Button label={'7'} onClick={handleClick} />
            <Button label={'8'} onClick={handleClick} />
            <Button label="9" onClick={handleClick} />
            <Button label="*" onClick={handleClick} />
        </div>
        <div className="button-row">
            <Button label="4" onClick={handleClick} />
            <Button label="5" onClick={handleClick} />
            <Button label="6" onClick={handleClick} />
            <Button label="-" onClick={handleClick} />
        </div>
        <div className="button-row">
            <Button label="1" onClick={handleClick} />
            <Button label="2" onClick={handleClick} />
            <Button label="3" onClick={handleClick} />
            <Button label="+" onClick={handleClick} />
        </div>
        <div className="button-row">
            <Button label="0" onClick={handleClick} />
            <Button label="=" onClick={handleClick} />
        </div>
        </div>
    );
}

export default Calculator;