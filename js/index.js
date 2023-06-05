let input = document.querySelector('#input');
let errorInput = document.querySelector('#input-error');
let hoverInput = document.querySelector('#hover');
let focusblueInput = document.querySelector('#focus-blue');
let focusredInput = document.querySelector('#focus-red');
let helperInput = document.querySelector('#helper');
let helperredInput = document.querySelector('#helper-red');
let numInput = document.querySelector('#num');
let pwdInput = document.querySelector('#pwd');
let textInput = document.querySelector('#input-text');
let smInput = document.querySelector('#input-sm');
let mdInput = document.querySelector('#input-md');
let wdInput = document.querySelector('#input-wd');
let regForm = document.querySelector('#register')

let data = {
    in:"",
    error:"",
    hover:"",
    focus:"",
    focusred:"",
    helper:"",
    helperred:"",
    phone:"",
    password:"",
    text:"",
    sm:"",
    md:"",
    wd:"",
}

input.addEventListener('input', (e) => {
    data.in = e.target.value;
});

errorInput.addEventListener('input', (e) => {
    data.error = e.target.value;
});

hoverInput.addEventListener('input', (e) => {
    data.hover = e.target.value;
});

focusblueInput.addEventListener('input', (e) => {
    data.focus = e.target.value;
});

focusredInput.addEventListener('input', (e) => {
    data.focusred = e.target.value;
});

helperInput.addEventListener('input', (e) => {
    data.helper = e.target.value;
});

helperredInput.addEventListener('input', (e) => {
    data.helperred = e.target.value;
});

numInput.addEventListener('input', (e) => {
    data.phone = e.target.value;
});

pwdInput.addEventListener('input', (e) => {
    data.password = e.target.value;
});

textInput.addEventListener('input', (e) => {
    data.text = e.target.value;
});

smInput.addEventListener('input', (e) => {
    data.sm = e.target.value;
});

mdInput.addEventListener('input', (e) => {
    data.md = e.target.value;
});

wdInput.addEventListener('input', (e) => {
    data.wd = e.target.value;
});

regForm.addEventListener('submit', (e) => {
    e.preventDefault();

    console.log(data);
});