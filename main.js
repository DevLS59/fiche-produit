window.onload = function () {
    const capacity_btn_elm = document.querySelectorAll('.capacity .size')
    const colour_btn_elm = document.querySelectorAll('.colours .color')
    const imagewrapper = document.querySelector('.image-wrapper')
    const imageel = document.querySelector('.image-wrapper .image')
console.log(imagewrapper);

    for( let i = 0 ; i <capacity_btn_elm.length; i++ ) {
        
        let btn = capacity_btn_elm[i];

        btn.addEventListener('click', function  () {
            document.querySelector('.capacity .size.selected').classList.remove('selected')
            this.classList.add('selected')
        })
    }

    for(let j=0; j<colour_btn_elm.length; j++) {
        let btn = colour_btn_elm[j]
        btn.addEventListener('click', function () {
            document.querySelector('.colours .color.selected').classList.remove('selected')
            this.classList.add('selected')
            imageel.src = "images/xr-" + this.dataset.name + '.png';
            imagewrapper.style.background = this.dataset.colour;
        })
    }
    
}