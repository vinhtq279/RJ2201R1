import { useState } from 'react';
import {v4 as uuid} from 'uuid';
import './indec.css';

const students = [
    {
      uuid: uuid(),
      fullName: 'Nguyen Van A',
      points: 10
    },
    {
      uuid: uuid(),
      fullName: 'Le Van B',
      points: 8
    },
    {
      uuid: uuid(),
      fullName: 'Pham Thi C',
      points: 7
    },
    {
      uuid: uuid(),
      fullName: 'Tran Van D',
      points: 6
    },
    {
      uuid: uuid(),
      fullName: 'Ta Thi Lang',
      points: 1
    },
  ];

function ClassWrapper(){
    const [studentList, setStudentList] = useState(students);

    function onAddNewStudent(){

    }

    function onDisbanStudent(_uuid){
        let index = studentList.findIndex(function(o){return o.uuid == _uuid;})
        if (index !== -1){studentList.splice(index,1)};
    }

    return(
      <>
        <table>
            <thead>
                <tr>
                  <th>UUID</th>
                  <th>Fullname</th>
                  <th>Points</th>
                  <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {studentList.map(
                    (value) => <Student key={value.uuid} uuid={value.uuid} name={value.fullName} points={value.points} action={onDisbanStudent} />
                )}
            </tbody>
        </table>
        <button onClick={onAddNewStudent}>Add Student</button>
        </>
    );
}

function Student(props){
    return(
        <tr>
            <td>{props.uuid}</td>
            <td>{props.name}</td>
            <td>{props.points}</td>
            <td><button onClick={props.action}>Delete</button></td>
        </tr>
    );
}

export default ClassWrapper;