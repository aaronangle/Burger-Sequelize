document.addEventListener("DOMContentLoaded", function () {
    var submit = document.querySelector("#submit");
    var edit = document.querySelector(".pencil")
    submit.addEventListener("click", function (event) {
        event.preventDefault()
        var userInput = document.querySelector("#burgerInput").value.trim();
        var burger = {
            name: userInput
        }
        fetch("/burger", {
            method: "post",
            body: JSON.stringify(burger),
            headers: { 'Content-type': 'application/json' }
        }
        ).then(data => {
            location.reload();
        })
    });
    document.querySelectorAll(".devourButton").forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            var id = this.getAttribute("data-id")

            fetch("/burger/" + id, {
                method: "put",
                headers: { 'Content-type': 'application/json' }
            }).then(data => {
                location.reload();
            })
        })
    })
    document.querySelectorAll(".textarea").forEach(item => {
        item.addEventListener("keypress", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                var id = this.getAttribute("data-id")
                var data = this.value;
                var note = {
                    noteText: data
                }
                fetch("/burgernote/" + id, {
                    method: "post",
                    body: JSON.stringify(note),
                    headers: { 'Content-type': 'application/json' }
                }).then(data => {
                    location.reload();
                })
            }
        })
    })
    edit.addEventListener("click", function () {
        fetch("/burgerdiv", {
            method: "get"
        }).then(data => {
            location.reload()
        })
    })
});