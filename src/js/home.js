// let placeHolder = document.querySelector('label');
const textField = document.querySelector('#entry-table-name');
const form_entry = document.querySelector('form');
const warning = document.querySelector('p');

form_entry.addEventListener('submit', (e)=>{
    if(textField.value === ""){
        e.preventDefault();
        warning.classList.add('warning');
        warning.addEventListener('transitionend',(warningEvent)=>{
            if(warningEvent.propertyName === 'transform'){
                setTimeout(()=>{
                    warning.classList.remove('warning')
                },5000)
            }
        })
    }
})

exports.jsTest = warning.textContent;





