export const incre = (number) => {
    return {
        type: "INCREMENT",
        payload: number,
    }
}

export function decre(number) {
    return {
        type: "DECREMENT",
        payload: number, 
    }
}