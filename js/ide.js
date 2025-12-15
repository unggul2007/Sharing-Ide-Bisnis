function simpanIde() {
    let judul = document.getElementById("judul").value;
    let deskripsi = document.getElementById("deskripsi").value;
    let kategori = document.getElementById("kategori").value;
    let user = localStorage.getItem("loginUser");

    let ide = JSON.parse(localStorage.getItem("ide")) || [];

    ide.push({
        judul,
        deskripsi,
        kategori,
        user
    });

    localStorage.setItem("ide", JSON.stringify(ide));
    window.location = "dashboard.html";
}

function tampilIde() {
    let ide = JSON.parse(localStorage.getItem("ide")) || [];
    let feed = document.getElementById("feed");

    feed.innerHTML = "";

    ide.forEach(i => {
        feed.innerHTML += `
            <div class="card">
                <h4>${i.judul}</h4>
                <small>${i.kategori} | ${i.user}</small>
                <p>${i.deskripsi}</p>
            </div>
        `;
    });
}
