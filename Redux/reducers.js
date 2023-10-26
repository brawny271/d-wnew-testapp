const initialState = {
  products: [],
  cart: [],
  uplodedProducts: [],
  totalQuentity: [],
  count: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const newItem = action.product;
      const existingCard = state.cart.find(
        (item) => item.id === newItem.id
      );
      console.log("this is from add to cart");

      if (existingCard) {
        existingCard.quantity += 1;
        existingCard.totalPrice = existingCard.quantity * existingCard.price;
      }else{
        newItem.quantity = 1;
        newItem.totalPrice = newItem.price;
        state.cart.push(newItem);
      }

      return {
        ...state,
      };

    // case "INCREASE_QUANTITY":
    //   console.log("This is increase quentity");
    //   const increasedCrt = [...state.item.id];
    //   console.log(increasedCrt);
    //   increasedCrt[action.id].quantity += 1;

    //   return {
    //     ...state,
    //     count: [...state.count, increasedCrt],
    //   };

    case "INCREASE_QUANTITY":
      console.log("This is Increase quentiity")
      state.cart.forEach((item)=>{
        if(item.id === action.product.id){
          item.quantity += 1;
          // console.log(item.quantity);
          item.total = item.quantity * item.price;
          console.log(item.total)
        }
      })

      // case "INCREASE_QUANTITY":
      // console.log("This is Increase quentiity")
      // state.cart.find(
      //   (item) => item.id === newItem.id
      // );
      // state.cart.forEach((item)=>{
      //   if(item.id === action.product.id){
      //     item.quantity += 1;
      //     // console.log(item.quantity);
      //     item.total = item.quantity * item.price;
      //     console.log(item.total)
      //   }
      // })

    
      return {
        ...state,
      };

    case 'DECREASE_QUENTITY':
      console.log("this is from decrease quantity");
      state.cart.forEach((item)=>{
        if(item.id === action.product.id && item.quantity > 1){
          item.quantity -= 1;
          console.log(item.quantity)
          item.total = item.quantity * item.price;
          console.log(item.total)
        }
      })

      return {
        ...state,
      }

    case "REMOVE_FROM_CART":
      console.log("This is from remove cart");
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.product.id),
      };
    case "REMOVE_ALL_CART":
      return {
        ...state,
        cart: [],
      };
    case "ADD_TO_PRODUCT":
      return {
        ...state,
        uplodedProducts: [...state.uplodedProducts, action.product],
      };
    case "REMOVE_FROM_UPLOAD":
      console.log("this from remove upload");

      // const index = action.product.index
      // return {
      //     ...state,
      //     uplodedProducts: [...state.uploadedProducts.slice(0, index), ...state.uploadedProducts.slice(index + 1)]
      // }

      return {
        ...state,
        uplodedProducts: state.uplodedProducts.filter(
          (item) => item.id !== action.product.id
        ),
      };

    case "REMOVE_ALL_UPLOAD":
      return {
        ...state,
        uplodedProducts: [],
      };
    default:
      return state;
  }
};

export default rootReducer;


