var calltxt = window.document.getElementById('instatxt')
var callimg = window.document.getElementById('instaimg')

function instagram() {
    calltxt.style.right = '10%'
    calltxt.style.opacity = '100%'
    callimg.style.right = '10%'
}

function leave() {
    calltxt.style.right = '50%'
    calltxt.style.opacity = '0%'
    callimg.style.right = '0%'
}