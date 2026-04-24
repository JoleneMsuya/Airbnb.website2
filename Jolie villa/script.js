// Data yetu (Kama inatoka kwenye Database)
const stays = [
    { name: "Luxury Masaki Villa", price: "300,000", img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Oysterbay Modern Studio", price: "120,000", img: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Upanga View Apartment", price: "95,000", img: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Mikocheni Garden Home", price: "150,000", img: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=400" }
];

const grid = document.getElementById('property-grid');

// Kazi ya kuweka hizi data kwenye HTML
function loadStays() {
    let cards = "";
    stays.forEach(stay => {
        cards += `
            <div class="room-card">
                <img src="${stay.img}" alt="${stay.name}">
                <div class="room-info">
                    <h3>${stay.name}</h3>
                    <p class="room-price">TZS ${stay.price} / night</p>
                </div>
            </div>
        `;
    });
    grid.innerHTML = cards;
}

// Hakikisha inafanya kazi ukifungua page
loadStays();