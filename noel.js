const sendName = document.querySelector('#sendName');
let zNom = document.querySelector('#zNom');

let msg = document.querySelector('.msg');

sendName.onclick = () => {

    if(zNom.value != ''){

        document.querySelector('#link').setAttribute('href', 'souhait.html');

    }

}

msg.innerText = "Jeffren";

alert('mokamo');