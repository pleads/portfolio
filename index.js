function Menu(e){
    let list = document.querySelector('list');

    e.name ==='menu' ? (e.name = "close", list.classList.add('top-[-80px]'),
    list.classList.add('opacity-100')): ( e.name = "menu",
    list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))

    if (list.classList.contains("hidden")) {
list.classList.remove("hidden");
e.name = "close";

} else {
list.classList.add("hidden");
e.name = "menu";
}
}