window.addEventListener("keydown", event => {
    if (event.ctrlKey && event.code === "KeyQ") { 
        let search_box = document.getElementById("search")
        search_box.focus()
        search_box.select()
    }
})
