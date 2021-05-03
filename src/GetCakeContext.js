import React, {createContext,useReducer,useContext,useRef} from 'react';

const initialState = [
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
    },
];

function cakeReducer(state,action){
    switch(action.type){
        case 'GET_CAKE':
            let selectedNum;
            while(true){
                selectedNum = Math.floor(Math.random()*state.length);
                if(!state[selectedNum].selected){
                  break;
                }
            }
            const copyState = [...state];
            copyState[selectedNum]={
                ...copyState[selectedNum],
                selected: true
            };
            return copyState;
        case 'CREATE':
            return state.concat(action.newPerson);
        case 'REMOVE':
            return state.filter(person=>
                person.id !== action.id
            );
        case 'TOGGLE' :
            return state.map((person)=>{
                return person.id === action.id ? {...person, selected:!person.selected} : person ;
            });
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
    const nextNum = useRef(10);

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



