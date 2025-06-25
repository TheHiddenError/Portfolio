const backPop = document.getElementsByClassName("popupdiv")[0];
const overlay = backPop.children[0];
const backPop2 = document.getElementsByClassName("popupdiv")[1];
const overlay2 = backPop2.children[0];
const theBody =  document.getElementsByTagName("body")[0];

let prev;

document.getElementById('sProBtn').addEventListener('click', ()=> {
    backPop2.style.display = "inline-block";
    theBody.style.overflowY = "hidden";
})
let arrayX = document.getElementsByClassName('overlayx');
arrayX[0].addEventListener('click', ()=>{
    backPop.style.display = "none";
    theBody.style.overflowY = "";
    });
arrayX[1].addEventListener('click', ()=>{
    backPop2.style.display = "none";
    theBody.style.overflowY = "";
});

const projectInfo = {
    feline: {
        title: "Feline Rescue",
        summary: ` This game was made during my Game Development class for the Spring 2024 semester to understand and apply the basics of the game engine Unity. My team and I decided to make this game because we wanted to combine two popular game types, stealth and turn based game, into one game.
                        Why cats and dogs? Cats and dogs are known to be enemies to one another, but it seems like cats are the smart ones and the ones causing the trouble. In this game, we wanted to reverse the rows (and the cat sprites were adorable to not use) and have the dogs be the villians by capturing cats and keeping them hostage, which leads our main cat in a mission to save them.`,
        features: [
            "2D physics system",
            "Turn based against a computer enemy",
            "Effects during turn based section, such as blindness, poison, weakness, strength."
        ],
        responsibilities: [
            "Implemeting physics collision for stealth portion",
            "Handling logic for turn based gameplay, such as effects and computer AI."
        ],
        tech: [
            "Unity", 
            "C#",
            "VS Code",
            "Github"
        ],
        members: 
            "Rolando Pequeno, Francisco Javier Cortez"
    },
    cinemark:
    {
        title: "Cinemark Prototype",
        summary: `When this project was made, the Cinemark mobile application had some major issues in regards to UI/UX design. First of all, they did not have a cart for recently inserted information so when a user chooses how many tickets they want, and select their food, but press back for any reason, they lose all that information and have to start over. Not only that, but their navigation required too many unnecessary clicks to view their upcoming tickets.
        My team and I were surprised that they had these issues since their competitors, like AMC, implemented these features.  
        This prototype was made to give an idea of how the Cinemark could be improved without completely revamping the application as a whole.`,
        features :[
            "Shopping cart feature allows user to view their previous information",
            "Allows user to navigate through different parts of application for editing purposes through the shopping cart",
            "Upcoming tickets are easier to located without having to move through different clicks"
        ],
        responsibilities: [
            "Implemeting the shopping cart feature",
            "Prototyping from home page to food page",
            "Mocked the existing Cinemark app to our figma (creating components, sections, etc)"
        ],
        tech: [
            "Figma"
        ],
        members: 
            "Alexis Cantu, Andres Martinez, Trey Pedroza"
        
    },
    planit:{
        title: "PLANIT",
        summary: `Ever had a trip that was unexpected and wanted to make the most out of it? Or maybe you need an application that could simplify Google Maps? If so, this application is what you are looking for. This application strives in its simplicity, so users are not overwhelmed with features. This app's main job is to get your a nice trip by taking into account services in your desired area and basing future results on user selections.
        This application also has a questionnaire that can help user pinpoint or give ideas of what they would like to do. Finally, in the end, we get all the services the user wants to visit and automatically insert them into Google Maps to allow the usage of the GPS system of Google Maps. `,
        features: [
            "Questionnaire to guide users find different activities or places they want to visit",
            "Real time services information using Google Places API, such as hourly operation, gas prices, rating, etc",
            "Address validation using Google Maps Address Validator",
            "Interactive Google Map using Google Maps API",
            "View other users created recommended trips",
            "Real time three day weather forecast using Open Weather API",
            "History and favorited services for future trips and references",
            "Automatically insert services for Google Maps GPS system to avoid manually inserting through Google Maps application"
        ],
        responsibilities:[
            "Implemented questionnaire logic",
            "Handled Google Places API calls to reduce cost",
            "Dark and Light Mode",
            "Partial Responsive Design",
            "Designed the style of pages, such as home page, questionnaire page, services menu page, account page, and history page."
        ],
        tech:[
            "NextJS (Frontend/Backend)",
            "Tailwind (Frontend)",
            "Drizzle (Database)",
            "Turso (Database)",
            "VS Code",
            "Github"
        ],
        members:
            "Gael Galvan, Emiliano Miranda"
    }
}

for (let i of document.getElementsByClassName('infoButton')){
    i.addEventListener('click', ()=> {
        if (prev == i.id) {
            backPop.style.display = "inline-block";
            theBody.style.overflowY = "hidden";
            return;
        }
        let iterator = 0;
        const textElements = overlay.getElementsByClassName('overlayText');
        for (const [key, value] of Object.entries(projectInfo[i.id])) {
            if (key == 'title')
                overlay.getElementsByClassName('overlayTitle')[0].innerText = value;
            else {
                if (Array.isArray(value)){   
                    const theList = textElements[iterator].getElementsByTagName('UL')[0] 
                    if (prev && prev != i.id){
                        theList.innerHTML = '';
                    }
                    for (let element of value){
                        const newElement = document.createElement('li');
                        newElement.innerText = element;
                        theList.appendChild(newElement);
                    }
                }
                else {
                    textElements[iterator].innerText = value;
                }
                iterator ++;
            }
        }
        prev = i.id;
        backPop.appendChild(overlay);
        backPop.style.display = "inline-block";
        theBody.style.overflowY = "hidden";
    })
}

