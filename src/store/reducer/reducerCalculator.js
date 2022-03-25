import {BUTTON_NUMBER, BUTTON_TOTAL, CLEAR_NUMBER} from "../actions";



const initialState={
    lineOne:'0',
    lineTwo:'',
    isEquals:false
}

export const reducerCalculator=(state=initialState, action)=>{
const {lineOne, lineTwo, isEquals}=state

    switch (action.type){
        case BUTTON_NUMBER:
            const inf=action.payload
            if(inf!=='='&& inf!=='.' && inf!=='+' && inf!=='*' && inf!=='/' && inf!=='-') {
                return {...state, lineOne: action.payload}
            }if(inf==='+'|| inf==='/'|| inf==='*'|| inf==='-'){
            return {...state, lineOne: lineOne, lineTwo: lineOne+inf}
            }
            if(lineTwo===lineOne+inf){
                return {...state, lineOne: inf}
            }

        case BUTTON_TOTAL:
            const arr=lineTwo.split('', 2)
            const a=arr[0]
            const b=arr[1]
            const c=lineOne
            const res=''
            const str=''
            const res1=''


            if(isEquals===false && b==='+'){

                const res= (+a)+(+c)
                const str=(lineTwo+(+c)+action.payload).substr(0,4)
               return{...state, lineOne: res,lineTwo: str, isEquals:true }
                }
            if(isEquals===false && b==='*'){

                const res= (+a)*(+c)
                const str=(lineTwo+(+c)+action.payload).substr(0,4)
                return{...state, lineOne: res,lineTwo: str, isEquals:true }
            }
            if(isEquals===false && b==='/'){

                const res= (+a)/(+c)
                const str=(lineTwo+(+c)+action.payload).substr(0,4)
                return{...state, lineOne: res,lineTwo: str, isEquals:true }
            }
            if(isEquals===false && b==='-'){

                const res= (+a)-(+c)
                const str=(lineTwo+(+c)+action.payload).substr(0,4)
                return{...state, lineOne: res,lineTwo: str, isEquals:true }
            }
            if(isEquals){
                const res1=(res+(+c))
                return{...state, lineTwo: res1+arr[1]+(+c-arr[0])+action.payload, lineOne: (+res1)+((+c)-(+arr[0]))}

            }
            if(isEquals){
                const res1=(res1+(+c))
                return{...state, lineTwo: res1+arr[0]+arr[0]+action.payload, lineOne: (+res1)+(+arr[0])}

            }


        case CLEAR_NUMBER:
            console.log(action.payload)

            return{...state, lineOne:0, lineTwo: '', isEquals: false}

        default:
            return state
    }
}