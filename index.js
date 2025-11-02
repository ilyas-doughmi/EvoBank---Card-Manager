const add_modal = document.getElementById("add_card_modal");
const create_card_btn = document.getElementById("create_card");

add_modal.classList.add("hidden")


function show_add(){
    add_modal.classList.remove("hidden")

}

function hide_modal(){
    add_modal.classList.add("hidden")
}



create_card_btn.onclick = function(){
    window.alert("Soon...");
}