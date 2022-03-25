export const BUTTON_NUMBER="BUTTON_NUMBER"
export const BUTTON_TOTAL="BUTTON_TOTAL"
export const CLEAR_NUMBER="CLEAR_NUMBER"
export const BUTTON_SIGN="BUTTON_SIGN"

export const buttonNumber=(payload)=>{
    return{type:BUTTON_NUMBER, payload}
}



export const buttonTotal=(payload)=>{
    return{type:BUTTON_TOTAL, payload}
}
export const clearNumber=(payload)=>{
    return{type:CLEAR_NUMBER, payload}
}
export const buttonSign=(payload)=>{
    return{type:BUTTON_SIGN, payload}
}