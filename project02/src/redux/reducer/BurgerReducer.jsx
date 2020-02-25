const burgerState = {
    burger: { salad: 1, cheese: 1, beef: 1 },
    menu: {
        salad: 10,
        cheese: 17,
        beef: 23
    },
    total: 50
}
//  cách truy xuất trong javaScript
// burger.salad =1 === burger['salad']=1 2 cách viết same vs nhau
export const BurgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case 'ADD_BREADMID': {
            let { propsBurger, amount } = action;
            // thay đổi số lượng
            if (amount === -1 && state.burger[propsBurger] < 1) {
                return { ...state }
            }
            let burgerUpdate = { ...state.burger }
            burgerUpdate[propsBurger] += amount;
            state.burger = burgerUpdate;
            // tính tổng tiền
            state.total += amount * state.menu[propsBurger]
            return { ...state }
        }; break;
        default:{
            return { ...state }
        }; break;
    }

}