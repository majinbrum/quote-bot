import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_KEY } from "./keys.js";

/*-----------
    ELEMENTS 
    ------------*/

const loader = document.querySelector(".loading");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");

/*-----------
FUNCTIONS 
------------*/
async function playCharacter(nameCharacter) {
	// 1. Mostrare il loader
	loader.classList.remove("loading-hidden");

	if (API_KEY.length > 0) {
		const genAI = new GoogleGenerativeAI(API_KEY);
		const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
		// 2. Chiamare le Api di Open AI
		// const action = "Saluta nel tuo modo più iconico";
		const action = getRandomAction();
		// 3. Costruire il prompt
		const prompt = `You're ${nameCharacter} and ${action} with 100 characters max without going out of character`;
		// 4. Recuperare la risposta
		const result = await model.generateContent(prompt);
		// 5. Interpretare la risposta
		const message = result.response.text();
		// 6. Compilare la modale con i dati ricevuti
		modalContent.innerHTML = `
            <h2>${nameCharacter}</h2>
            <p>${message}</p>
            <code>Character: ${nameCharacter}, action: ${action}</code>
        `;
		// 6. Nascondere il loader e mostrare la modale
		loader.classList.add("loading-hidden");
		modal.classList.remove("modal-hidden");
	} else {
		setTimeout(() => {
			// 6. Compilare la modale con i dati ricevuti
			modalContent.innerHTML = `
				<h2>Homer Simpson</h2>
				<p>Donut enthusiast. Nuclear power plant worker. Always looking for a good time. 🍩☢️🍻</p>
				<code>Character: Homer Simpson, action: write your linkedin bio</code>
			`;
			// 6. Nascondere il loader e mostrare la modale
			loader.classList.add("loading-hidden");
			modal.classList.remove("modal-hidden");
		}, 2000);
	}
}

function getRandomAction() {
	const actions = [
		"greet me in your most iconic way",
		"give a style tip based on your taste",
		"tell me about your latest adventure",
		"reveal your dreams to me",
		"tell me who your best friend is",
		"write your linkedin bio",
	];

	const indexRandom = Math.floor(Math.random() * actions.length); // da 0 a 5

	return actions[indexRandom];
}

/*-----------
    INIT & EVENTS
------------*/
const characters = document.querySelectorAll(".character");

characters.forEach(function (element) {
	element.addEventListener("click", function () {
		playCharacter(element.dataset.character);
	});
});

modalClose.addEventListener("click", function () {
	modal.classList.add("modal-hidden");
});
