const text = [
  `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero exercitationem laborum doloremque, fugiat consequatur animi nam ullam labore aperiam!
`,
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio suscipit consequuntur earum ratione labore obcaecati aut possimus quisquam ut. Similique, consequatur sapiente? Maxime incidunt accusantium dolore officia voluptatem. Saepe, nemo.
`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium voluptates quibusdam itaque nisi ullam!
`,
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio suscipit consequuntur earum ratione labore obcaecati aut possimus quisquam ut. Similique, consequatur sapiente? Maxime incidunt accusantium dolore officia voluptatem. Saepe, nemo.
`,
  `    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero exercitationem laborum doloremque, fugiat consequatur animi nam ullam labore aperiam!
`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam laudantium voluptates quibusdam itaque nisi ullam!
`,
];

const form = document.querySelector(".form");
const input = document.getElementById("input");
const result = document.getElementById("text");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = parseInt(input.value);
  random = Math.floor(Math.random() * text.length);
  //   const item = value.

  if (isNaN(value) || value > 5 || value <= 0) {
    result.innerHTML = `<p>${text[random]}</p>`;
    console.log(random);
  } else {
    let tempText = text.slice(0, value);
    tempText = tempText
      .map(function (item) {
        return `<p>${item}</p>`;
      })
      .join("");
    result.innerHTML = tempText;
    console.log(tempText);
  }
});
