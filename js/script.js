
let menuTrimGlobal = [];

const loadMenuData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();

    const menuTrimData = data.data;

    displayMenuData(menuTrimData);

    menuTrimGlobal = data;
}


const displayMenuData = (menuTrimData) => {
    const menuContainer = document.getElementById('menu-container');

    menuTrimData.forEach(singleMenu => {
        const div = document.createElement('div');
        div.innerHTML = `
            <button onclick="displayCardData('${singleMenu.category_id}')" class="btn btn-sm">${singleMenu.category}</button>
        `;
        menuContainer.appendChild(div);

        displayCardData('1000');

    });

}


const displayCardData = async (categoryId) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await res.json();


    const trimCard = data.data;

    const cardContainer = document.getElementById('card-container');

    cardContainer.innerHTML = '';

    trimCard.forEach(singleCard => {


        const div = document.createElement('div');
        div.innerHTML = `
            
            <div class="max-w-86">
                <figure><img class="rounded-lg h-48 w-full"
                        src="${singleCard.thumbnail}" alt="Shoes" />
                </figure>
                <div class="p-4 flex gap-2">

                    <img class="w-9 h-9 rounded-full"
                        src="${singleCard?.authors[0]?.profile_picture}"
                        alt="">

                    <div>
                        <h2 class="text-md font-bold">${singleCard.title}</h2>
                        <div class="flex gap-2 items-center mt-3">
                            <p class="text-md">${singleCard?.authors[0]?.profile_name}</p>
                            <small> ${ singleCard?.authors[0]?.verified == true ? "<img src='../images/verified.png'>" : "" }</small>
                        </div>
                        <p class="text-md">${singleCard?.others?.views}</p>
                    </div>


                </div>
            </div>
        `;
        cardContainer.appendChild(div);

        // const verifiedImage = document.getElementById('verified-image');

        // let veri = singleCard.authors[0].verified;
        // console.log(veri);
        
        // if(veri == true){
        //     verifiedImage.classList.remove('hidden');

        
        // }else{
        //     verifiedImage.classList.add('hidden');
        // }

    });

}



loadMenuData();


