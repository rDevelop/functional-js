import initModel from './Model';
import update from './Update';
import view from './View';
import app from './App';
export const { apiKey } = "../.apiKey.json";


const node = document.getElementById('app');

app(initModel, update, view, node);
