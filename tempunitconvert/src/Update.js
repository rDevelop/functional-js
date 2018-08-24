import * as R from 'ramda';

import {
    UNITS
} from './View';

const MSGS = {
    ENTER_LEFT: 'ENTER_LEFT',
    ENTER_RIGHT: 'ENTER_RIGHT',
    SELECT_LEFT: 'SELECT_LEFT',
    SELECT_RIGHT: 'SELECT_RIGHT',
};

export function enterLeftMsg(leftValue) {
    return {
        type: MSGS.ENTER_LEFT,
        leftValue,
    };
}

export function enterRightMsg(rightValue) {
    return {
        type: MSGS.ENTER_RIGHT,
        rightValue,
    };
}

export function selectLeftMsg(leftUnit) {
    return {
        type: MSGS.SELECT_LEFT,
        leftUnit,
    };
}

export function selectRightMsg(rightUnit) {
    return {
        type: MSGS.SELECT_RIGHT,
        rightUnit,
    };
}

const toInt = R.pipe(parseInt, R.defaultTo(0));

function update(msg, model) {
    switch (msg.type) {
        case MSGS.ENTER_LEFT: {
            console.log("ENTERED LEFT, value: ", msg.leftValue);
            if (msg.leftValue === '') {
                return {...model, sourceLeft: true, leftValue: '', rightValue: ''}
            }
            const leftValue = toInt(msg.leftValue);
            model = {
                ...model,
                sourceLeft: true,
                leftValue: leftValue,
                rightValue: rightValue
            };
            const rightValue = toInt(calculateTempurature(model));
            return {...model, rightValue};
        }
        case MSGS.ENTER_RIGHT: {
            console.log("ENTERED RIGHT, value: ", msg.rightValue);
            if (msg.rightValue === '') {
                return {...model, sourceLeft: false, leftValue: '', rightValue: ''}
            }
            const rightValue = toInt(msg.rightValue);
            model = {
                ...model, sourceLeft: false, rightValue: rightValue,
                leftValue: leftValue
            };
            const leftValue = toInt(calculateTempurature(model));
            return {...model, leftValue};
        }
        case MSGS.SELECT_LEFT: {
            const {leftUnit} = msg;
            console.log("SELECTED LEFT ", msg.leftUnit);
            return {...model, leftUnit}
        }
        case MSGS.SELECT_RIGHT: {
            const {rightUnit} = msg;
            console.log("SELECTED RIGHT ", msg.rightUnit);
            return {...model, rightUnit}
        }
    }
    return model;
}

function calculateTempurature(model) {
    const {leftValue, leftUnit, rightValue, rightUnit, sourceLeft} = model;
    console.log("Source Left, ", sourceLeft);
    console.log("Left Value: ", leftValue);
    console.log("leftUnit ", leftUnit);
    console.log("Right Value: ", rightValue);
    console.log("rightUnit ", rightUnit);
    let sourceUnit = rightUnit;
    let sourceValue = rightValue;
    let targetUnit = leftUnit;
    if (sourceLeft) {
        sourceUnit = leftUnit;
        sourceValue = leftValue;
        targetUnit = rightUnit;
    }
    switch (sourceUnit) {
        case 'Celsius': {
            switch (targetUnit) {
                case 'Celsius' :
                    return sourceValue;
                case 'Fahrenheit' :
                    return celsiusToFahrenheit(sourceValue);
                case 'Kelvin' :
                    return celsiusToKelvin(sourceValue);
                default:
                    return ''
            }
        }
        case 'Fahrenheit': {
            switch (targetUnit) {
                case 'Celsius' :
                    return fahrenheitToCelsius(sourceValue);
                case 'Fahrenheit' :
                    return sourceValue;
                case 'Kelvin' :
                    return fahrenheitToKelvin(sourceValue);
                default:
                    return ''
            }
        }
        case 'Kelvin' : {
            switch (targetUnit) {
                case 'Celsius' :
                    return kelvinToCelsius(sourceValue);
                case 'Fahrenheit' :
                    return kelvinToFahrenheit(sourceValue);
                case 'Kelvin' :
                    return sourceValue;
                default:
                    return ''
            }
        }
    }
    return '';
}

const celsiusToFahrenheit = n => (n * 9 / 5 + 32);
const celsiusToKelvin = n => n + 273.15;
const fahrenheitToCelsius = n => (n - 32) * 5 / 9;
const fahrenheitToKelvin = n => (n + 459.67) * 5 / 9;
const kelvinToFahrenheit = n => n * 9 / 5 - 459.67;
const kelvinToCelsius = n => n - 273.15;

export default update;
