AFRAME.registerComponent('interactief-object', {
    init: function () {
        let element = this.el;

        element.addEventListener('click', function () {
            let kleuren = ['#FF5733', '#33ff57', '#3357ff', '#f3ff33'];
            let randomKleur = kleuren[Math.floor(Math.random() * kleuren.length)];

            element.setAttribute('color', randomKleur);
        })
    }
});