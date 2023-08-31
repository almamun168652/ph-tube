const loadMenuData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();

    const menuTrimData = data.data;

    displayMenuData(menuTrimData);
}

const displayMenuData = (menuTrimData) => {
    const menuContainer = document.getElementById('menu-container');

    menuTrimData.forEach(singleMenu => {
        const div = document.createElement('div');
        div.innerHTML = `
            <button class="btn btn-sm md:btn-md">${singleMenu.category}</button>
        `;
        menuContainer.appendChild(div);
    });

}




loadMenuData();