<!-- PROJECT -->

<a id="readme-top"></a>

<div align="center">
  <img src="./images/preview.jpg" alt="Preview" width="595" height="599">

  <h3 align="center">Quote Bot</h3>

  <p align="center">
    A simple project to practise JavaScript, with the integration of AI!
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li>
            <a href="#built-with">Built With</a>
        </li>
        <li>
            <a href="#key-features">Key Features</a>
        </li>
      </ul>
    </li>
    <li>
        <a href="#getting-started">Getting Started</a>
    </li>
    <li>
        <a href="#contacts">Contacts</a>
    </li>
    <li>
        <a href="#references">References</a>
    </li>
    <li>
        <a href="#license">License</a>
    </li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

A chatbot application that generates responses based on a character's name and a random action. When a user clicks on a character, the application displays a loading animation, generates a prompt, sends it to the generative model, and updates the modal content with the response.

### Built With

<div display="flex">
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=flat&logo=visual-studio-code&logoColor=white" alt="Visual Studio Code" />
    <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&logo=html5&logoColor=white" alt="HTML5" />
	<img src="https://img.shields.io/badge/css3-%231572B6.svg?style=flat&logo=css3&logoColor=white" alt="CSS3" />
 	<img src="https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
</div>

### Key Features

#### Variables

- **genAI**: the Google Generative AI instance
- **model**: the generative model
- **loader, modal, modalContent, and modalClose**: HTML elements for displaying a loading animation, a modal window, and its content

#### Functions

- `playCharacter(nameCharacter)`: an asynchronous function that:
  Displays a loading animation
- If an `API_KEY` is present, generates a prompt using the `getRandomAction` function and sends it to the generative model
- Retrieves the response from the model and updates the modal content with the character's name, response, and action
- Hides the loading animation and displays the modal window
- `getRandomAction()`: a function that returns a random action from a predefined list

#### Event Listeners

The code adds event listeners to:

- `.character elements`: when clicked, the `playCharacter` function is called with the character's name as an argument
- `modalClose`: when clicked, the modal window is hidden

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Dependencies

- **@google/generative-ai**: A library for generating interactive content using AI.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

1. Clone the repository to your local machine
   ```sh
   git clone https://github.com/majinbrum/quote-bot.git
   ```
2. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```
3. Create a `keys.js` file inside the main folder where you want to paste this code:
   `export const API_KEY = "";`
4. If you have one, you need to add your `API_KEY` inside the `"..."`. Otherwise you can still try the app with a fixed example result.
5. Open your web browser and navigate to http://localhost:3000.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACTS -->

## Contacts

**Bruna Alamia** **-** [@linkedin](https://linkedin.com/in/brunaalamia) **-** brunaalamia@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- REFERENCES -->

## References

- [Google AI studio docs](https://ai.google.dev/gemini-api/docs/ai-studio-quickstart?hl=it)

<!-- LICENSE -->

## License

This project is licensed under the MIT License.

<p>Copyright (c) 2024 Bruna Alamia

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.</p>
