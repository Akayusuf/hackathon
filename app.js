
const iconOpen = document.querySelector(".noti-icon")
const iconItem = document.querySelector(".noti-item")
const notiShade = document.querySelector(".noti-shade")
const profileWrap = document.querySelector(".profileWrap")
const profileText = document.querySelector(".profile-text")
const exitButton = document.querySelector(".trial")
const closeExit = document.querySelector(".overlay")
const closeOnline = document.querySelector(".onlineDrop")
const online = document.querySelector(".online")
const customize = document.querySelector(".customize")
const closecuz1 = document.querySelector(".closecuz1")
const closecuz = document.querySelector(".closecuz")
const online4 = document.querySelector(".online4")
const online3 = document.querySelector(".online3")
const online2 = document.querySelector(".online2")
const online1 = document.querySelector(".online1")
const onlineDrop = document.querySelector(".onlineDrop0")
const iconDrop = document.querySelector(".iconDrop0")
const onlineDrop1 = document.querySelector(".onlineDrop1")
const onlineDrop2 = document.querySelector(".onlineDrop2")
const onlineDrop3 = document.querySelector(".onlineDrop3")
const onlineDrop4 = document.querySelector(".onlineDrop4")
const onlineDetails = document.querySelector(".onlineDetails0")
const onlineDetails1 = document.querySelector(".onlineDetails1")
const onlineDetails2 = document.querySelector(".onlineDetails2")
const onlineDetails3 = document.querySelector(".onlineDetails3")
const onlineDetails4 = document.querySelector(".onlineDetails4")
const count = document.querySelector(".count")
const noticlick = document.querySelector(".noticlick")
const noticlick1 = document.querySelector(".noticlick1")
const noticlick2 = document.querySelector(".noticlick2")
const noticlick3 = document.querySelector(".noticlick3")
const noticlick4 = document.querySelector(".noticlick4")

closecuz1.style.display = 'none'
count.textContent = 0;

let counter = count;

// count.textContent = 10;
// console.log(counter)
// const checkBox = document.getElementById('c-box')

// counter ( count.textContent ? 1 : -1);
// console.log(count)
// counter += (count ? 1 : -1);
// console.log (counter);

// for ( let i = 0; i < noticlick.length; i++){
//     const addnum = noticlick[i];
     
//     addnum.addEventListener('click', () => {
//         counter += (addnum.classList.contains('count') ? 1 : -1 )
//         console.log(counter);
//     })
// }


profileText.addEventListener('click', function (){
    profileWrap.classList.toggle ('iconDrop0')
});

noticlick.addEventListener('click', function (){
    noticlick.classList.toggle ('noticlick0');
   (count.textContent == 1) ? + 1 : - 1;
});
noticlick1.addEventListener('click', function (){
    noticlick1.classList.toggle ('noticlick0')
});
noticlick2.addEventListener('click', function (){
    noticlick2.classList.toggle ('noticlick0')
});
noticlick3.addEventListener('click', function (){
    noticlick3.classList.toggle ('noticlick0')
});
noticlick4.addEventListener('click', function (){
    noticlick4.classList.toggle ('noticlick0')
});

iconOpen.addEventListener('click', function (){
    iconItem.classList.toggle ('iconDrop0')
    notiShade.classList.toggle ('iconDrop0')
});

const closeNoti = function () {
    dropdownDisplay.style.display = 'none'
}

const exit = function () {
    exitButton.style.display = 'none'
}

const closeProfile = function () {
    profileWrap.style.display = 'none'
}


const closeDrop = function (){
    closeOnline.style.display = 'none'
}

const close1 = function (){
   customize.style.display = 'none'
   closecuz1.style.display = 'block'
   closecuz.style.display = 'none'
}
const open1 = function (){
    customize.style.display = 'block'
    closecuz.style.display = 'block'
    closecuz1.style.display = 'none'
}

const openOn = function () {
    onlineDrop.style.display = ''
    online4.style.backgroundColor = '#808080'
}

onlineDetails.addEventListener('click', function (){
    onlineDrop.classList.toggle ('onlineDrop0')
    online.classList.toggle ('changeColor')
});

onlineDetails1.addEventListener('click', function (){
    onlineDrop1.classList.toggle ('onlineDrop0')
    online1.classList.toggle ('changeColor')
});

onlineDetails2.addEventListener('click', function (){
    onlineDrop2.classList.toggle ('onlineDrop0')
    online2.classList.toggle ('changeColor')
});

onlineDetails3.addEventListener('click', function (){
    onlineDrop3.classList.toggle ('onlineDrop0')
    online3.classList.toggle ('changeColor')
});

onlineDetails4.addEventListener('click', function (){
    onlineDrop4.classList.toggle ('onlineDrop0')
    online4.classList.toggle ('changeColor')
});

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        dropdownDisplay.style.display = 'none'
        profileWrap.style.display = "none";
    }
  });
