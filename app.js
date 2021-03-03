$(() => {

    const moves = ["X", "O"]

    $(".grid-item").on("click", (event) => {
        console.log("clicked")
        const result = () => {
            for (let element of moves) {
                return element
            }
        }
        $(event.target).text(result)
    })


})  