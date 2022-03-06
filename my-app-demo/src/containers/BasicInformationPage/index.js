import React, { useEffect } from 'react';
import AppInput from '../../components/AppInput';
import {useState, memo} from 'react';

function BasicInformationPage(props){
    const [information, setInformation] = useState({fullName: "", age: 0, email: "", address: ""});
    const [fillTrigger, setFillTrigger] = useState(false);

    const basicInfo = {
        fullname: 'Nguyen Van A',
        age: 23,
        email: 'vinhtq279@gmail.com',
        address: 'Hanoi, Vietnam'
    };

    const basicInfo1 = {
        fullname: '',
        age: '',
        email: '',
        address: ''
    };

    const onGetFieldsValues = (evt, fieldName) => {
        let _information = {...information}
        _information[fieldName] = evt.target.value;
        setInformation(_information);
    }

    const onTriggerFill = () => {
        setFillTrigger(!fillTrigger);
    }


    useEffect(() => {
        setInformation(basicInfo);
    }, []);


    useEffect(() => {
        setInformation(basicInfo);
    }, [fillTrigger]);

    setTimeout(useEffect(() =>{setInformation(basicInfo1)}, [fillTrigger]), 5000);

    return (
        <div>
            <h1>Survey Information Form</h1>
            <AppInput type="text" value={information.fullName} onChangeCallback={(evt) => onGetFieldsValues(evt, 'fullName')} />
            <AppInput type="text" value={information.age} onChangeCallback={(evt) => onGetFieldsValues(evt, 'age')} />
            <AppInput type="text" value={information.email} onChangeCallback={(evt) => onGetFieldsValues(evt, 'email')} />
            <AppInput type="text" value={information.address} onChangeCallback={(evt) => onGetFieldsValues(evt, 'address')} />
            <button onClick={onTriggerFill}>Clicke here to fill form</button>
            
        </div>
    );
}

export default memo(BasicInformationPage);