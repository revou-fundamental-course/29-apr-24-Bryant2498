
function validationName() {
    let username = document.getElementById('username-form');
    let nullAlert1 = document.getElementById('null-alert1');
    console.log(username.value);
    if (username.value === '' || username.value === null) {
        username.style.border = "1px solid red"
        nullAlert1.style.color = "red"
    } else {
        username.style.border = "1px solid #a6a6a4"
        nullAlert1.style.color = "#c7c7c7"
    }
}

function validationEmail() {
    let emailUser = document.getElementById('email-form');
    let nullAlert2 = document.getElementById('null-alert2');
    console.log(emailUser.value);
    if (emailUser.value === '' || emailUser.value === null) {
        emailUser.style.border = "1px solid red"
        nullAlert2.style.color = "red"
    } else {
        emailUser.style.border = "1px solid #a6a6a4"
        nullAlert2.style.color = "#c7c7c7"
    }
}

function validationDestination() {
    let userDestination = document.getElementById('destination-form');
    let nullAlert3 = document.getElementById('null-alert3')
    console.log(userDestination.value);
    if (userDestination.value === '' || userDestination.value === null) {
        userDestination.style.border = "1px solid red"
        nullAlert3.style.color = "red"
    } else {
        userDestination.style.border = "1px solid #a6a6a4"
        nullAlert3.style.color = "#c7c7c7"
    }
}

document.getElementById("submit-button").addEventListener('click', () => validationName())
document.getElementById("submit-button").addEventListener('click', () => validationEmail())
document.getElementById("submit-button").addEventListener('click', () => validationDestination())

//section slide
let indexSlide = 1; // [0, 1, 2, 3, 4]
showSlide(1);

function nextSlide(n) {
    console.log('nextSlide: ' + n);
    showSlide(indexSlide += n);
}

//slide logic
function showSlide(index) {
    let listImage = document.getElementsByClassName('banner-item');
    console.log(listImage);
    console.log('Image Count: ' + listImage.length)

    //reset all images
    index > listImage.length ? indexSlide = 1 : console.log('aman')

    //hide all images
    let i = 0;
    while (i < listImage.length) {
        listImage[i].style.display = 'none';
        i++;
    }

    //show only one image
    listImage[indexSlide - 1].style.display = 'block';
    console.log('showSlide ' + index);
}
setInterval(() => nextSlide(1), 3000);

//document.getElementById("submit-button").addEventListener('click', () => nextSlide(1))

