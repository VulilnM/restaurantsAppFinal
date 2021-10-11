//=====   VARIABLES   =======
function Restaurant(name, adress, avgMealPrice, numberOfTables, typesOfKitchen, openingTime, closingTime, image){ 
    this.name = name;
    this.adress = adress;
    this.avgMealPrice = avgMealPrice;
    this.numberOfTables = numberOfTables;
    this.typesOfKitchen = typesOfKitchen;
    //eventualno napraviti funkciju da gleda ukoliko je closingTime < openingTime, staviti closingTime date za jedan dan kasnije
    this.openingTime =  new Date().toDateString() + ' ' + openingTime;
    this.closingTime = new Date() .toDateString() + ' ' + closingTime;
    this.image = image;
}

let categories = ["Serbian", "Italian", "Fast food", "Chinese", "Mexican", "Turkish"];

let rest1 = new Restaurant ("Greda", "Jevrejska 22, Novi Sad", 300, 20, [categories[0],categories[1]] ,"08:00", "23:30", "url('media/greda.jpg')");
let rest2 = new Restaurant ("Restaurant 88", "Futoska 123, Novi Sad",  1200, 70, [categories[3],categories[2]], "11:15", "21:00", "url('media/verona.jpg')");
let rest3 = new Restaurant ("Minuta", "Bulevar Oslobodjenja 143, Novi Sad", 400, 50,[categories[5],categories[0]] ,"07:30","23:59", "url('media/minuta.jpg')");
let rest4 = new Restaurant ("Gondola", "Bulevar Oslobodjenja 143, Novi Sad", 700, 100,[categories[5],categories[0]] ,"07:45","22:54", "url('media/gondola.jpg')");
let rest5 = new Restaurant ("Giardino", "Bulevar Oslobodjenja 143, Novi Sad", 900, 110,[categories[5],categories[0]] ,"09:00","21:30", "url('media/giardino.jpg')");
let rest6 = new Restaurant ("Gradska pivnica", "Bulevar Oslobodjenja 143, Novi Sad", 1000, 40,[categories[5],categories[0]] ,"11:00","23:10", "url('media/gradska-pivnica.jpg')");
let rest7 = new Restaurant ("Amigos Chiken Wings", "Bulevar Oslobodjenja 143, Novi Sad", 600, 130,[categories[5],categories[0]] ,"08:45","22:45", "url('media/amigos-chiken-wings.jpg')");
let rest8 = new Restaurant ("Rostilj Ognjiste", "Bulevar Oslobodjenja 143, Novi Sad", 250, 15,[categories[5],categories[0]] ,"06:15","23:40", "url('media/ognjiste.jpg')");

let restaurants = [rest1, rest2, rest3, rest4, rest5, rest6, rest7, rest8];

//Price ranges
// default vrednosti
let expensives = {label: "Expensive restaurants", minPrice: 800, maxPrice: 1700, note: "Price range: " + this.minPrice + " - " + this.maxPrice};
let middleExpensives = {label: "Inexpensive restaurants", minPrice: 500, maxPrice: 799, note: "Price range: " + this.minPrice + " - " + this.maxPrice};
let cheaps = {label: "Cheap restaurants", minPrice: 200, maxPrice: 499, note: "Price range: " + this.minPrice + " - " + this.maxPrice};
let tests1 = {label: "Test price range", minPrice: 200, maxPrice: 799, note: "Price range: " + this.minPrice + " - " + this.maxPrice};
let priceRanges = [expensives, middleExpensives, cheaps, tests1];

//Size (number of tables) ranges
// default vrednosti
let smals = {label: "Small size restaurants", minNumOfTables: 1, maxNumOfTables: 24, note: "Number of tables: " + this.minNumOfTables + " - " + this.maxNumOfTables};
let mediums = {label: "Medium size restaurants", minNumOfTables: 25, maxNumOfTables: 99, note: "Number of tables: " + this.minNumOfTables + " - " + this.maxNumOfTables};
let bigs = {label: "Big size restaurants", minNumOfTables: 100, maxNumOfTables: 200, note: "Number of tables: " + this.minNumOfTables + " - " + this.maxNumOfTables};
let tests2 = {label: "Test size restaurants", minNumOfTables: 40, maxNumOfTables: 110, note: "Number of tables: " + this.minNumOfTables + " - " + this.maxNumOfTables};
let sizes = [smals, mediums, bigs, tests2];


//=====   DOM ELEMENTS   =======
const contentContainer = document.getElementById("container");

    //FILTER BY SIZE DOM ELEMENTS
    const filterBySizeBtn = document.getElementById("sizeBtn");
        //fast search
        const filterBySizeForm = document.getElementById("sizeForm");
        filterBySizeForm.classList.add("hide");
        //advanced search
        const advancedSearchSizeBtn = filterBySizeForm.advancedSearchButton;
        const filterBySizeAdvancedForm = document.getElementById("sizeAdvancedForm");
        filterBySizeAdvancedForm.classList.add("hide");

    //FILTER BY PRICE RANGE DOM ELEMENTS
    const filterByPriceRangeBtn = document.getElementById("priceRangeBtn");
        //fast search
        const filterByPriceRangeFastForm = document.getElementById("priceRangeFastForm");
        filterByPriceRangeFastForm.classList.add("hide");
        //advanced search
        const advancedSearchPriceRangeBtn = filterByPriceRangeFastForm.advancedSearchButton;
        const filterByPriceRangeAdvancedForm = document.getElementById("priceRangeAdvancedForm");
        filterByPriceRangeAdvancedForm.classList.add("hide");

    //FILTER BY WORKING HOURS DOM ELEMENTS
    const filterByWorkingHoursBtn = document.getElementById("workingHoursBtn");
        //now
        const openNowBtn = document.getElementById("openNowBtn");
        //atGivenTime
        const filterByWorkingHoursFormAtGivenTime = document.getElementById("workingHoursFormAtGivenTime");
        filterByWorkingHoursFormAtGivenTime.classList.add("hide");

    //FILTER BY TYPES OF FOOD
    const filterByTypesOfFoodBtn = document.getElementById("typesOfFoodBtn");
    const filterByTypesOfFoodForm = document.getElementById("typesOfFoodForm");
    filterByTypesOfFoodForm.classList.add("hide");

//=====   MAIN FLOW   =======
fillSelect(sizes,filterBySizeForm.selectSize);
fillSelect(priceRanges,filterByPriceRangeFastForm.selectPriceRange);
createChecboxes(categories, filterByTypesOfFoodForm);

displayRestaurants();

//Show or hide forms based on click events
filterBySizeBtn.addEventListener('click', function(){
    showOrHide(filterBySizeForm);
});

filterByPriceRangeBtn.addEventListener('click', function(){
    showOrHide(filterByPriceRangeFastForm);
});

filterByWorkingHoursBtn.addEventListener('click', function(){
    showOrHide(filterByWorkingHoursFormAtGivenTime);
});

filterByTypesOfFoodBtn.addEventListener('click', function(){
    showOrHide(filterByTypesOfFoodForm);
});

// Advanced search forms on click events
advancedSearchSizeBtn.addEventListener('click', function(){
    showOrHide(filterBySizeAdvancedForm);
})

advancedSearchPriceRangeBtn.addEventListener('click', function(){
    showOrHide(filterByPriceRangeAdvancedForm);
})

//Display elements based on filter criteria
    //  Filter by size
    filterBySizeForm.addEventListener('submit',function(e){
        e.preventDefault();

        const selectedCategoryId = e.target.selectSize.options.selectedIndex;
        displayRestaurants(findRestaurantsBySize(restaurants, sizes[selectedCategoryId]));
    });
    filterBySizeAdvancedForm.addEventListener('submit', function(e){
        e.preventDefault();
        const min = e.target.inputNumberOfTablesMin.value;
        const max = e.target.inputNumberOfTablesMax.value;
        let customSize = {label: "Custom restaurants", minNumOfTables: min, maxNumOfTables: max, note: "Custom size category"};
        displayRestaurants(findRestaurantsBySize(restaurants, customSize));
    });

    //  Filter by price range
    filterByPriceRangeFastForm.addEventListener('submit',function(e){
        e.preventDefault();
        const selectedCategoryId = e.target.selectPriceRange.options.selectedIndex;
        displayRestaurants(findRestaurantsByPrice(restaurants, priceRanges[selectedCategoryId]));
    });
    filterByPriceRangeAdvancedForm.addEventListener('submit',function(e){
        e.preventDefault();
        const min = e.target.inputPriceRangeMin.value;
        const max = e.target.inputPriceRangeMax.value;
        const customPriceRange = {label: "Custom restaurants", minPrice: min, maxPrice: max, note: "Custom price range category"};
        displayRestaurants(findRestaurantsByPrice(restaurants, customPriceRange));
    });
    
    //Filter by working hours
    openNowBtn.addEventListener('click', function(e){
        e.preventDefault();
        displayRestaurants(findOpenNowRestaurants(restaurants));
    })
    filterByWorkingHoursFormAtGivenTime.addEventListener('submit', function(e){
        e.preventDefault();
        const inputTime = e.target.inputTime.value;
        displayRestaurants(findOpenRestaurantsAtGivenTime(restaurants, inputTime));
    });

    //Filter by types of kitchen
    filterByTypesOfFoodForm.addEventListener('submit',function(e){
        e.preventDefault();
    });

    // let selectedFoodTypes = document.getElementById(selectSize);
    // document.getElementById("selectSize").addEventListener("mouseover", function(){
    //     console.log('ahhahahah');
    // })
    
//=====   FUNCTIONS   =======

//Display and hide forms 
function showForm(form) {
    console.log(form)
	form.classList.add("hide");
}

function closeForm(form) {
	form.classList.remove("hide");
}

function showOrHide(form) {
	if(form.classList.contains('hide')) {
		closeForm(form);
	}
	else {
		showForm(form);
	}
}

//PRINT RESTAURANTS FUNCTION
function displayRestaurants(rests = restaurants){
    clearAllRestaurantsDisplay();
    if(rests.length <= 0) 
        noResultOutput();
    else{
        for(let rest in rests){
            createRestaurantCard(rest,rests);  
    }    
}

function createRestaurantCard(rest, rests){
    const restName = document.createElement('h2');
    restName.setAttribute('id', 'restName');
    restName.textContent = rests[rest].name;
    
    const restAdress = document.createElement('h5');
    restAdress.setAttribute('id', 'restAdress');
    restAdress.textContent = rests[rest].adress;

    const restAvgMealPrice = document.createElement('p');
    restAvgMealPrice.setAttribute('id', 'restAvgMealPrice');
    restAvgMealPrice.textContent ="Prosecna cena jela: " + rests[rest].avgMealPrice + " RSD";

    const restNumberOfTables = document.createElement('p');
    restNumberOfTables.setAttribute('id', 'restNumberOfTables');
    restNumberOfTables.textContent = "Broj stolova: " + rests[rest].numberOfTables;

    const restOpeningTime = document.createElement('p');
    restOpeningTime.setAttribute('id', 'restOpeningTime');
    restOpeningTime.textContent ="Otvara se: " +rests[rest].openingTime;

    const restClosingTime = document.createElement('p');
    restClosingTime.setAttribute('id', 'restClosingTime');
    restClosingTime.textContent ="Zatvara se: " + rests[rest].closingTime;

    const restCardTextArea = document.createElement('div');
    restCardTextArea.setAttribute('id', 'restCardTextArea');
    restCardTextArea.classList.add('cardTextArea');

    const restCard = document.createElement('div');
    restCard.setAttribute('id', 'restCard');
    restCard.classList.add('card');
    restCard.style = 'background-image: ' + rests[rest].image; 
    console.log(restCard.style);
    //Appends
    restCardTextArea.appendChild(restName);
    restCardTextArea.appendChild(restAdress);
    restCardTextArea.appendChild(restAvgMealPrice);
    restCardTextArea.appendChild(restNumberOfTables);
    restCardTextArea.appendChild(restOpeningTime);
    restCardTextArea.appendChild(restClosingTime);
    restCard.appendChild(restCardTextArea);
    contentContainer.appendChild(restCard);
    }
}

function noResultOutput(){
    const noResultsText = document.createElement('h1')
        noResultsText.classList.add('no-result-output');
        noResultsText.textContent = "We couldn't find any restaurants matching your criterias, sorry!";
        clearAllRestaurantsDisplay();
        contentContainer.appendChild(noResultsText);
}

// clear the container before every submit
function clearAllRestaurantsDisplay(){
    contentContainer.innerHTML = "";
}

//fill selects with categories data
function fillSelect(categories, select){
    for(let i in categories){
        const option = document.createElement("option");
        option.setAttribute("id","option" + i);
        option.textContent = categories[i].label; 
        option.setAttribute("hoverNote", categories[i].note);
        select.appendChild(option);
    }
}

//create checkboxes 
function createChecboxes(typesOfKitchen, form){
    const foodTypeContainer = document.createElement("div");
    foodTypeContainer.setAttribute("id", "foodTypeContainer");
    
    const cbContainer = document.createElement("div");
    cbContainer.setAttribute("id", "cbContainer");

    for(let kitchen of typesOfKitchen){
        const cbContainerRow = document.createElement("div");
        cbContainerRow.setAttribute("id", "cbContainerRow");
        cbContainerRow.classList.add("cb-container-row");

        const label = document.createElement("label");
        label.textContent = kitchen;
        
        const checkBox = document.createElement("input");
        checkBox.setAttribute("type", "checkBox"); 
        
        cbContainerRow.appendChild(label);
        cbContainerRow.appendChild(checkBox);
        cbContainer.appendChild(cbContainerRow);
    }

    foodTypeContainer.appendChild(cbContainer);
    // foodTypeContainer.appendChild(radioContainer);

    form.appendChild(foodTypeContainer);
}

//Filter restaurants functions
function findRestaurantsByPrice(restaurants, priceRange){
    let rests = [...restaurants];
        return rests
        .filter(rest => rest.avgMealPrice <= priceRange.maxPrice) 
        .filter(rest => rest.avgMealPrice >= priceRange.minPrice);
}

function findRestaurantsBySize(restaurants, numberOfTables){
    let rests = [...restaurants];
        return rests
        .filter(rest => rest.numberOfTables <= numberOfTables.maxNumOfTables)
        .filter(rest => rest.numberOfTables >= numberOfTables.minNumOfTables);
}

function findRestaurantByTypeOfKitchenAll(restaurants, foodTypes){
    if(allOrAny){
        return restaurants.filter(function(rest){
            rest.typesOfKitchen.every(function (foodType){
                return foodTypes.includes(foodType);
            });
        });
    }
}

function findRestaurantByTypeOfKitchenAny(restaurants, foodTypes){
    return restaurants.filter(function(rest){
        rest.typesOfKitchen.some(function (foodType){
            return foodTypes.includes(foodType);
        });
    });
}


function findOpenNowRestaurants(restaurants){    
    let hoursNow = new Date().getHours();
    let minutesNow = new Date().getMinutes();
    let timeNow = hoursNow + ":" + minutesNow;
    return findOpenRestaurantsAtGivenTime(restaurants, timeNow);
}

function findOpenRestaurantsAtGivenTime(restaurants, wantedTime){
    let openRestaurants = [];
    
    let wantedHours = wantedTime.slice(0,5).split(":")[0] - 0;
    let wantedMinutes = wantedTime.slice(0,5).split(":")[1] - 0;

    let openingHour;
    let closingHour;
    let openingMinute;
    let closingMinute;

    for(let key in restaurants){
        openingHour =  (restaurants[key].openingTime.slice(16,21).split(':')[0] - 0); // -0 da bi se vrednost pretvorila iz stringa u num (eksplicitno)
        openingMinute =  (restaurants[key].openingTime.slice(16,21).split(':')[1] - 0);

        closingHour =  (restaurants[key].closingTime.slice(16,21).split(':')[0] - 0);
        closingMinute =  (restaurants[key].closingTime.slice(16,21).split(':')[1] - 0);
        
        if((wantedHours > openingHour && wantedHours < closingHour) || 
        ((wantedHours === openingHour && wantedMinutes >= openingMinute) || (wantedHours === closingHour && wantedMinutes <= closingMinute)))
        {
            openRestaurants.push(restaurants[key]);
        }
    }
    return openRestaurants;
}



    








