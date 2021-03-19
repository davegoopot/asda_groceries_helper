window.addEventListener("keydown", event => {
    var store;
    if (location.href.startsWith("https://groceries.morrisons.com/")) {
        store = "Morrisons"
    } else if (location.href.startsWith("https://groceries.asda.com/")) {
        store = "ASDA"
    } else {
        throw new Error(`Running on unsupported location: ${location.href} `);
    }

    if (event.ctrlKey && event.code === "KeyY") { // Focus on the search box
        const search_box = document.getElementById("search")
        search_box.focus()
        search_box.select()
    }
    
    if (event.ctrlKey && event.shiftKey && event.code === "KeyU") { // Focus on the search box and paste
        const search_box = document.getElementById("search")
        search_box.focus()
        search_box.select()
        navigator.clipboard.readText().then(cliptext => {	
			search_box.value = cliptext
			search_box.dispatchEvent(new KeyboardEvent('keyup',{'key': cliptext.slice(-1)}))
			}
        )
    }

})
