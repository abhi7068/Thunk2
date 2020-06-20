const initialState = {
    initialdetails:[],
}
const reducer=(state=initialState,action) => {
    console.log(action.details);
    switch(action.type){
        case "DISPLAY_STATE":
            return {
                ...state,
                initialdetails : action.details,
            }
    }
    return state;
}
export default reducer;