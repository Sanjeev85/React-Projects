const { createStore, combineReducers } = Redux;
// action creators
// person who is submitting the form

const newBooking = (name, amount) => {
    return {
        type: "NEW_BOOKING",
        payload: {
            name,
            amount,
        },
    };
};

const cancelBooking = (name, refundAmount) => {
    return {
        type: "CANCEL_BOOKING",
        payload: {
            name,
            refundAmount,
        },
    };
};

// reducers
const reservationHistory = (oldReservationList = [], action) => {
    if (action.type === "NEW_BOOKING") {
        return [...oldReservationList, action.payload];
    } else if (action.type == "CANCEL_BOOKING") {
        return oldReservationList.filter((record) => {
            return record !== action.payload.name;
        });
    }
    return oldReservationList;
};

const cancellationHistory = (oldCancellationList = [], action) => {
    if (action.type == "CANCEL_BOOKING") {
        return [...oldCancellationList, action.payload];
    }
    return oldCancellationList;
};

const accounting = (totalMoney = 100, action) => {
    if ((action.type = "NEW_BOOKING")) {
        return totalMoney + action.payload.amount;
    } else if (action.type === "CANCEL_BOOKING") {
        return totalMoney - action.payload.refundAmount;
    }
    return totalMoney;
};

// redux store
console.log(Redux);
console.log(createStore);

const railwayCentralStore = combineReducers({
    accounting: accounting,
    reservationHistory: reservationHistory,
    cancellationHistory: cancellationHistory,
});

console.log("he");
const store = createStore(railwayCentralStore);

const action = newBooking("Name", 20);
store.dispatch(action);
console.log(store.getState());
