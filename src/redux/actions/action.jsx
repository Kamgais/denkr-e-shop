export const putInWarenkorb = (item,number) =>{

    return {
        type:'PUT',
        payload: {
            item:item,
            number:number
        }
    }
}




 export const removeInWarenkorb = (item) =>{

    return {
        type:'REMOVE',
        payload: {
            item:item,
            number:0
        }
    }
}

 export  const updateInWarenkorb = (item,number) =>{

    return{
        type:'UPDATE',
        payload : {
            item : item,
            number : number
        }
    }
}


export  const changeInWarenkorb = (item,number) =>{

    return{
        type:'CHANGE',
        payload : {
            item : item,
            number : number
        }
    }
}



