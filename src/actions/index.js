
export const ADD_NUMBER='ADD_NUMBER';
export const SUB_NUMBER='SUB_NUMBER';
export const MUL_NUMBER='MUL_NUMBER';
export const DIV_NUMBER='DIV_NUMBER';
export const RESET_NUMBER='RESET_NUMBER';

export const add_number = (number) => {
    return {
        type: ADD_NUMBER,
        number: number
    }
}


export const sub_number = (number) => {
    return {
        type: SUB_NUMBER,
        number: number
    }
}

export const mul_number = (number) => {
    return {
        type: MUL_NUMBER,
        number: number
    }
}

export const div_number = (number) => {
    return {
        type: DIV_NUMBER,
        number: number
    }
}

export const reset_number = () => {
    return {
        type: RESET_NUMBER
    }
}