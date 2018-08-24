import * as R from 'ramda';

const MSGS = {
    UPDATE_BILL: 'UPDATE_BILL',
    UPDATE_TIP: 'UPDATE_TIP'
};

export function updateBillMsg(amount) {
    return {
        type: MSGS.UPDATE_BILL,
        amount,
    }
}

export function updateTipMsg(amount) {
    return {
        type: MSGS.UPDATE_TIP,
        amount,
    }
}

function update(msg, model) {
    const amount = msg.amount;
    console.log("Update ", msg.type);
    console.log("Amount ", amount);
    console.log(model);
    switch (msg.type) {
        case MSGS.UPDATE_BILL: {
            console.log("Here in update bill");
            return calculate({...model, bill: amount});
        }
        case MSGS.UPDATE_TIP: {
            return calculate({...model, tipPct: amount});
        }
    }
    return model;
}

function calculate(model) {
    const {bill, tipPct} = model;
    const tip = parseFloat(tipPct) / 100 * parseFloat(bill);
    const total = parseFloat(bill) + parseFloat(tip);
    return {...model, tip, total};

}

export default update;
