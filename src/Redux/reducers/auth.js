import types from '../types';

const initial_state = {
  userData: [],
};

export default function (state = initial_state, action) {
  state.userData.map((item,index)=>console.log(index,"jibniubbiu"))
  switch (action.type) {
    case types.LOGIN: {
      const data = action.payload;
      // userData.push(data)
      return {...state,userData:[data,...state.userData]};
    }
   
      case types.DELETE: 
       return { 
        ...state,
        userData: state.userData.filter((item,index) => index !== action.payload) 
      }

      case types.EDIT: {
        return{
          ...state,
          userData: [...action.payload]
        }
      }
//       case types.EDIT: {
// const index = state.userData.findIndex((item,index) => index !== action.payload);                                                                       action.payload); //finding index of the item
// const newArray = [...state.userData]; 
// newArray[index]. = true
//  return { 
//   ...state,
//   userData: newArray,
//  }; 
//       }

    default: {
      return {...state};
    }
  }
}
