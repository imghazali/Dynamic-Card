let people = [
  {
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    name: "Aarav Kumar",
    profession: "Web Developer",
    description: "Builds modern and user-friendly websites with clean UI and optimized performance."
  },
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    name: "Sara Malik",
    profession: "UI/UX Designer",
    description: "Creates intuitive user interfaces focusing on smooth user experience."
  },
  {
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    name: "Kabir Singh",
    profession: "App Developer",
    description: "Develops high-performance Android and iOS apps with clean UI."
  },
  {
    image: "https://images.unsplash.com/photo-1763357021261-da70533bc68b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D",
    name: "Nisha Verma",
    profession: "Digital Marketer",
    description: "Grows brands through strategic social media and digital campaigns."
  }
];

let sum=''
people.forEach(function(elem){
    sum+= `<div class="card">
            <img src="${elem.image}"alt="user Image">
            <h4>${elem.name}</h4>
            <h1>${elem.profession}</h1>
            <p>${elem.description}
            </p>
        </div>;`
})
console.log(sum)
let main = document.querySelector('main');
main.innerHTML = sum;