

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
