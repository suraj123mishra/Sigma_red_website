export const initialState = {
    basket: [],
    user: null,
  };

export const getBasketTotal = (basket) => 
basket?.reduce((amount , item) => item.price + amount, 0);


const reducer = (state , action) => {
    switch(action.type){
        case "SET_USER":
            return{
                ...state,
                user: action.user
            }


        case 'ADD_TO_BASKET':
            //LOGIC FOR ADDING TO BASKET
            return { 
                ...state,
                basket:  [...state.basket , action.item],               
            };
            

        case 'REMOVE_FROM_BASKET':
            //LOGIC FOR REMOVING ITEM FROM BASKET
            
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if(index >= 0){
                //item exist in basket
                newBasket.splice(index , 1);
            }else{
                console.warn(`cant remove the product with ID (id: ${action.id})`)
            }
            
            return { ...state , basket:newBasket };
            

        default:
            return state;
    }
}

export default reducer;