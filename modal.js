function openModal() {
    document.getElementById('js-open-modal').addEventListener("click", function (event) {
        //var btn = event.target;
        var modalBlock = document.getElementById('js-modal');
        
        console.log(modalBlock);
        modalBlock.classList.toggle("is-visible");
    });


}

openModal();

document.getElementById('test').addEventListener("input", function (event) {      
    console.log(event.target.value);
});