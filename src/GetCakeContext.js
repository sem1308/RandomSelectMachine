import React, {createContext,useReducer,useContext,useRef} from 'react';

const initialState = {
    people:[
        {
            name: "한수한",
            id:0,
            selected: false
        },
        {
            name: "이상민",
            id:1,
            selected: false
        },
        {
            name: "정득새",
            id:2,
            selected: false
        },
        {
            name: "이하나",
            id:3,
            selected: false
        },
        {
            name: "두수한",
            id:4,
            selected: false
        },
        {
            name: "세수한",
            id:5,
            selected: false
        },
        {
            name: "네수한",
            id:6,
            selected: false
        },
        {
            name: "구수한",
            id:7,
            selected: false
        },
        {
            name: "팔수한",
            id:8,
            selected: false
        },
        {
            name: "다수한",
            id:9,
            selected: false
        }
    ],
    selectedPeople:[]
};

function cakeReducer(state,action){
    switch(action.type){
        case 'GET_CAKE':
            let selectedNum;
            while(true){
                selectedNum = Math.floor(Math.random()*state.people.length);
                if(!state.people[selectedNum].selected){
                  break;
                }
            }
            const copyPeople = [...state.people];
            copyPeople[selectedNum]={
                ...copyPeople[selectedNum],
                selected: true
            };
            const selectedPerson = {
                name:copyPeople[selectedNum].name,
                id:copyPeople[selectedNum].id
            }
            return {people:copyPeople,selectedPeople:state.selectedPeople.concat(selectedPerson)};
        case 'CREATE':
            return {...state,people:state.people.concat(action.newPerson)};
        case 'REMOVE':
            return {
                people:state.people.filter(person=>{
                    return person.id !== action.id
                }),
                selectedPeople:state.selectedPeople.filter(person=>{
                    return person.id !== action.id
                }),
            };
        case 'TOGGLE' :
            let name,id
            let select=false;
            const newPeople = state.people.map((person)=>{
                if(person.id === action.id){
                    name = person.name;
                    id = person.id;
                    if(person.selected){
                        select=true;
                    }
                    return {...person, selected:!person.selected};
                } else {
                    return person;
                }
            });
            if(select){
                return {
                    people:newPeople,
                    selectedPeople: state.selectedPeople.filter((person)=>{
                        return person.id !== id;
                    })
                }
            } else {
                const newPerson = {
                    name,
                    id
                }
                return {
                    people:newPeople,
                    selectedPeople:state.selectedPeople.concat(newPerson)
                };
            }
        default:
            return new Error("there is no type");
    }
}

const PeopleStateContext = createContext();
const PeopleDispatchContext = createContext();
const PeopleNextNumContext = createContext();
const PeopleRestNumContext = createContext();

export function GetCakeProvider({children}) {
    const [state,dispatch] = useReducer(cakeReducer,initialState);
    const restNum = useRef(0);
    const nextNum = useRef(initialState.people.length);
    return (
        <PeopleStateContext.Provider value={state}>
            <PeopleDispatchContext.Provider value={dispatch}>
                <PeopleNextNumContext.Provider value={nextNum}>
                    <PeopleRestNumContext.Provider value={restNum}>
                        {children}
                    </PeopleRestNumContext.Provider>
                </PeopleNextNumContext.Provider>
            </PeopleDispatchContext.Provider>
        </PeopleStateContext.Provider>
    );
}

export const GetState = () => {
    const context = useContext(PeopleStateContext);
    if (!context) {
        return new Error("Cannot find Context");
    }
    return context;
}

export const GetDispatch = () => {
    const context = useContext(PeopleDispatchContext);
    if (!context) {
        return new Error("Cannot find Context");
    }
    return context;
}

export const GetNextNum = () => {
    const context = useContext(PeopleNextNumContext);
    if (!context) {
        return new Error("Cannot find Context");
    }
    return context;
}

export const GetRestNum = () => {
    const context = useContext(PeopleRestNumContext);
    if (!context) {
        return new Error("Cannot find Context");
    }
    return context;
}



