export const initialstate = {
  profile: null,
  carts: null,
  cartproduct_complit: null,
  cartproductf_uncomplit: null,
  reloadpage: null,
};

const reducer = (state, action) => {
  // console.log(action.type);
  switch (action.type) {
    case 'ADD_PROFILE':
      return {
        ...state,
        profile: action.profile,
      };

    default:
      return state;
  }
};

export default reducer;
