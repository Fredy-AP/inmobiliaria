document.addEventListener("DOMContentLoaded", () => {
    const properties = [
        {
            name: "Apartamento en la playa",
            location: "Cartagena, Colombia",
            price: "$200,000 USD",
            description: "Increíble apartamento con vista al mar, ideal para inversión."
        },
        {
            name: "Casa en la ciudad",
            location: "Medellín, Colombia",
            price: "$150,000 USD",
            description: "Casa moderna ubicada en el centro de la ciudad, cerca de todo."
        },
        {
            name: "Terreno en zona rural",
            location: "Boyacá, Colombia",
            price: "$80,000 USD",
            description: "Terreno amplio ideal para construir finca o para inversión."
        }
    ];

    const propertyList = document.getElementById("property-list");

    properties.forEach(property => {
        const propertyCard = document.createElement("div");
        propertyCard.classList.add("col-md-4");

        propertyCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${property.name}</h5>
                    <p class="card-text">${property.location}</p>
                    <p class="card-text">${property.price}</p>
                    <p class="card-text">${property.description}</p>
                    <a href="#" class="btn btn-primary">Ver Detalles</a>
                </div>
            </div>
        `;

        propertyList.appendChild(propertyCard);
    });
});
