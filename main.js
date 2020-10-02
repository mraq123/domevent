

// kita buat sebuah fungsi untuk memunculkan modal

const showModal = () => {
    // kita dapatkan element modal
    // yang mau di munculkan

    let modal = document.getElementById("modalMenu")

    // kita atur styling elemnt modalnya
    modal.style.display = "flex"
}


const closeModal = () => {
    let modal = document.getElementById("modalMenu")
    modal.style.display = "none"

}

// kita dapatkan dulu element yang lu mau bro
let showcase = document.getElementById("wrapper_showcase")


// kita inject elemennya dengan syntax HTML
// funsi += untuk menambahkan element biar engga niban
// inner untuk membuat html bukan text doang
// showcase.innerHTML += `
// <img src="https://picsum.photos/seed/66/300"/>

// `

for (var i = 0; i < 40; i++) {
    showcase.innerHTML += `
        <img src="https://picsum.photos/seed/${30 + i}/150" alt="lolabang ${i}"/>

    `

}




