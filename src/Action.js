import axios from "axios";

export const getstate = (name) => {
   return(dispatch)=>{
       return axios
       .get("https://api.github.com/search/users?q="+ name)
       .then((res)=>{
           dispatch(goingToReducer(res.data))
       })
   }
  };

  export const goingToReducer=(details)=>{
    return {
        type:"DISPLAY_STATE",
        details:details.items,
    }
  }