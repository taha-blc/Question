const wrapper = document.querySelector('.wrapper')
const yazi = document.querySelector('.yazi')
const evetBtn = document.querySelector('.evet-btn')
const hayirBtn = document.querySelector('.hayir-btn')
const body = document.querySelector('body')
const icon = document.querySelector('.fa-circle-question')

/* I got the location and size information with the getBoundingClientRect() function */
const wrapperRect = wrapper.getBoundingClientRect()
const noBtnRect = hayirBtn.getBoundingClientRect()



evetBtn.addEventListener('click', () => {
    yazi.innerHTML = '(: Thank youuu :)'
    // console.log('tiklandi')
    body.style.backgroundColor = '#C499F3'
    icon.style.color = '#C499F3'
    icon.style.outlineColor = '#C499F3';
    yazi.style.color = '#C499F3'
    evetBtn.style.backgroundColor = '#C499F3'
    evetBtn.style.borderColor = '#C499F3'
    hayirBtn.style.borderColor = '#C499F3'
    hayirBtn.style.color = '#C499F3'

})


hayirBtn.addEventListener('mouseover', () => {
    /* randomly change the location of the no button */
    const i = Math.floor(Math.random() * (wrapperRect.width - noBtnRect.width)) + 1
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1
    hayirBtn.style.left = i + 'px'
    hayirBtn.style.top = j + 'px'
})


// const question =document.querySelector('.quest')
