import React from "react";
import Person from "./Person";

function NameList(){
    const persons = [
        {id: 1, name: 'Balu', age: 34, skill:'angular'}, 
        {id: 2, name: 'Bruce', age: 30, skill:'React'},
        {id: 3, name: 'Wayne', age: 36, skill:'Vue'}
    ];
    const personList = persons.map(person=>(<Person key={person.id} person={person} />))
    return(
        <div>
            {personList}
        </div>
    )
}

export default NameList;
