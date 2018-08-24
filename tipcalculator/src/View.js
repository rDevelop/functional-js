import * as R from 'ramda';
import hh from 'hyperscript-helpers';
import {h} from 'virtual-dom';

import {
    updateBillMsg,
    updateTipMsg,
} from './Update';

const {
    div,
    h1,
    pre,
    input,
    label,
    table,
    tr,
    td,
} = hh(h);

function inputView(dispatch, value, inputMsg) {
    return input({
        type: 'text',
        className: 'db w-100 mv2 pa2 input-reset ba tr',
        value: value,
        step: '0.02',
        placeholder: '0.00',
        oninput: e => dispatch(inputMsg(e.target.value)),
    });
}

function inputSection(dispatch, model, billMsg, tipMsg) {
    const {bill, tipPct} = model;
    console.log('bill ', bill);
    return div({className: 'w-50 ma1'}, [
        label({className: 'f7'}, 'Bill Amount'),
        inputView(dispatch, bill, billMsg),
        label({className: 'f7'}, 'Tip %'),
        inputView(dispatch, tipPct, tipMsg),
    ]);
}

function resultSection(model) {
    const {tip, total} = model;
    return table({className: 'mw5 w-100 collapse'}, [
        tr({className: ''}, [
            td({className: 'pa2'}, 'Tip:'),
            td({className: 'pa2 tr'}, `$${tip}`)
        ]),
        tr({className: ''}, [
            td({className: 'pa2'}, 'Total:'),
            td({className: 'pa2 tr'}, `$${total}`)
        ]),
    ]);
}

function view(dispatch, model) {
    return div({className: 'mw6 center'}, [
        h1({className: 'f2 pv2 bb'}, 'Tip Calculator'),
        div({className: 'flex'}, [
            inputSection(
                dispatch,
                model,
                updateBillMsg,
                updateTipMsg,
            ),
        ]),
        resultSection(model),
        pre(JSON.stringify(model, null, 2)),
    ]);
}

export default view;
