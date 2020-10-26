window.addEventListener("keydown", event => {
    if (event.ctrlKey && event.code === "KeyY") { // Focus on the search box
        const search_box = document.getElementById("search")
        search_box.focus()
        search_box.select()
    }
    
    if (event.ctrlKey && event.shiftkey && event.code === "KeyU") { // Focus on the search box and paste
        const search_box = document.getElementById("search")
        search_box.focus()
        search_box.select()
        navigator.clipboard.readText.then(
            cliptext => search_box.value = cliptext
            search_box.dispatchEvent(new KeyboardEvent('keyup',{'key': cliptext.slice(-1)}))
        )
    }

})
