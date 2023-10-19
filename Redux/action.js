export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    product,
});

export const removeFromCart = (product) => ({
    type: 'REMOVE_FROM_CART',
    product,
});

export const removeAllCart = (product) => ({
    type:'REMOVE_ALL_CART',
    product,
});

export const increaseQuentity = (product) => ({
    type: 'INCREASE_QUANTITY',
    product,
});

export const decreaseQuentity = (product) => ({
    type: 'DECREASE_QUENTITY',
    product,
});

export const addToProduct = (product) => ({
    type: 'ADD_TO_PRODUCT',
    product,
});

export const removeFromProduct = ( product) => ({
    type: 'REMOVE_FROM_UPLOAD',
    product,
});

export const removeAllUpload = (product) => ({
    type: 'REMOVE_ALL_UPLOAD',
    product,
});


