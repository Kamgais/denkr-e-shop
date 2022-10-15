




 export const initialState = {

    warenkorbList : []
}

 const warenkorbList = (state = initialState, action) =>{

    switch(action.type){

        case 'PUT' : 
      
        return {
            ...state,
           warenkorbList :  [...state.warenkorbList, action.payload]
             }


        case 'REMOVE' :

        return {
            ...state,
           warenkorbList :  state.warenkorbList.filter(element => element.item.id !== action.payload.item.id)
        }



        case 'UPDATE' : 

        const id = state.warenkorbList.findIndex(element => element.item.id === action.payload.item.id)
        state.warenkorbList[id] = {
            item: action.payload.item,
            number: state.warenkorbList[id].number + action.payload.number 
        }

        return state
            
         
        case 'CHANGE' : 

        const index = state.warenkorbList.findIndex(element => element.item.id === action.payload.item.id)
        state.warenkorbList[index] = {
            item: action.payload.item,
            number: action.payload.number 
        }

        return state


       


        default : 
        return state
    }





}



export default warenkorbList





