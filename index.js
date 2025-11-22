const people = [
  {
    name: "Aarav Mehta",
    profession: "Web Developer",
    description: "Builds responsive and fast websites with modern UI.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    name: "Sara Khan",
    profession: "Graphic Designer",
    description: "Creates creative visuals, posters and brand identities.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    name: "Rohan Gupta",
    profession: "Full-Stack Developer",
    description: "Works on both client and server logic using MERN stack.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
  },
  {
    name: "Meera Sharma",
    profession: "UI/UX Designer",
    description: "Designs intuitive user interfaces and user flows.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
  },
  {
    name: "Kabir Singh",
    profession: "App Developer",
    description: "Develops Android and iOS mobile apps with clean architecture.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
  },
  {
    name: "Anaya Patel",
    profession: "Content Writer",
    description: "Writes engaging blogs, scripts and marketing content.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  },
  {
    name: "Vikram Rao",
    profession: "Digital Marketer",
    description: "Specializes in SEO, ads optimization and brand growth.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
  },
  {
    name: "Zoya Mirza",
    profession: "Software Tester",
    description: "Ensures bug-free product delivery with manual & automation testing.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    name: "Aditya Verma",
    profession: "Backend Developer",
    description: "Builds secure APIs and scalable server systems.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },
  {
    name: "Nisha Bansal",
    profession: "Data Analyst",
    description: "Analyzes data trends and builds dashboards.",
    image: "https://images.unsplash.com/photo-1545992334-3a95ef4f3c6c"
  },

  // ---------- 10 Completed, 40 More Below ----------
  
  {
    name: "Ayaan Siddiqui",
    profession: "Cloud Engineer",
    description: "Deploys and manages cloud resources on AWS & Azure.",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c"
  },
  {
    name: "Priya Nair",
    profession: "HR Manager",
    description: "Manages recruitment, training and employee relations.",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
  },
  {
    name: "Karan Malhotra",
    profession: "Video Editor",
    description: "Edits cinematic videos and short-form content.",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
  },
  {
    name: "Sofia Rahman",
    profession: "Social Media Manager",
    description: "Grows brands organically through creative campaigns.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
  },
  {
    name: "Ritik Yadav",
    profession: "Game Developer",
    description: "Builds 2D/3D games using Unity and Unreal Engine.",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
  },
  {
    name: "Aisha Noor",
    profession: "Fashion Designer",
    description: "Designs modern ethnic and western clothing.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    name: "Dev Sharma",
    profession: "AI Engineer",
    description: "Builds machine learning models for real-world problems.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "Rhea Kapoor",
    profession: "Interior Designer",
    description: "Creates stylish and functional interior spaces.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Jatin Arora",
    profession: "Cybersecurity Expert",
    description: "Protects systems from vulnerabilities and attacks.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },
  {
    name: "Mahira Sheikh",
    profession: "Event Planner",
    description: "Organizes corporate and luxury events flawlessly.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  },
  
  // ------ 20 done, 30 left -----

  {
    name: "Kunal Jain",
    profession: "Blockchain Developer",
    description: "Builds decentralized applications and smart contracts.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
  },
  {
    name: "Simran Kaur",
    profession: "Teacher",
    description: "Teaches with passion and modern learning techniques.",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
  },
  {
    name: "Yash Raj",
    profession: "Photographer",
    description: "Captures stunning portraits and travel shots.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    name: "Anjali Mishra",
    profession: "Nurse",
    description: "Provides quality healthcare with compassion.",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
  },
  {
    name: "Farhan Ali",
    profession: "Fitness Trainer",
    description: "Helps people achieve their fitness goals.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
  },
  {
    name: "Nidhi Sharma",
    profession: "Chef",
    description: "Creates delicious and modern fusion dishes.",
    image: "https://images.unsplash.com/photo-1545992334-3a95ef4f3c6c"
  },
  {
    name: "Ravi Teja",
    profession: "Mechanical Engineer",
    description: "Designs and builds mechanical systems.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    name: "Alina Joseph",
    profession: "Nail Artist",
    description: "Creates unique and stylish nail designs.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  },
  {
    name: "Imran Qureshi",
    profession: "Tour Guide",
    description: "Helps travelers explore new places with local insights.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
  },
  {
    name: "Ritika Sinha",
    profession: "Architect",
    description: "Designs modern and sustainable buildings.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
  },

  // ------ 30 done, last 20 below ------

  {
    name: "Harsh Vardhan",
    profession: "Electrician",
    description: "Installs and repairs electrical systems efficiently.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
  },
  {
    name: "Sana Fatima",
    profession: "Makeup Artist",
    description: "Enhances natural beauty with professional makeup.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    name: "Rajdeep Singh",
    profession: "Carpenter",
    description: "Builds custom furniture with expert craftsmanship.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
  },
  {
    name: "Ishika Jain",
    profession: "Yoga Instructor",
    description: "Guides people toward better health and mindfulness.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2"
  },
  {
    name: "Shivam Chauhan",
    profession: "Plumber",
    description: "Fixes water systems and installs fittings neatly.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d"
  },
  {
    name: "Ayushi Rana",
    profession: "Lawyer",
    description: "Specializes in civil and corporate law.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  },
  {
    name: "Devansh Arora",
    profession: "Entrepreneur",
    description: "Builds startups and manages business operations.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
  },
  {
    name: "Rehana Sheikh",
    profession: "Home Baker",
    description: "Makes delicious cakes and custom desserts.",
    image: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39"
  },
  {
    name: "Siddharth Raj",
    profession: "Civil Engineer",
    description: "Constructs bridges, roads and strong infrastructures.",
    image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
  },
  {
    name: "Nargis Ali",
    profession: "Psychologist",
    description: "Helps people improve mental wellbeing.",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c"
  },

  // -------- LAST 10 --------

  {
    name: "Tarun Joshi",
    profession: "Sound Engineer",
    description: "Mixes audio for films, music and advertisements.",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12"
  },
  {
    name: "Vanshika Kapoor",
    profession: "Dentist",
    description: "Provides dental care with modern tools.",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
  },
  {
    name: "Armaan Raza",
    profession: "Finance Analyst",
    description: "Analyzes markets and manages investment planning.",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7"
  },
  {
    name: "Neha Sachdev",
    profession: "SEO Specialist",
    description: "Improves website ranking with advanced SEO strategies.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Rehan Malik",
    profession: "Animator",
    description: "Creates 2D/3D animations and motion graphics.",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
  },
  {
    name: "Diya Kapoor",
    profession: "Nail Technician",
    description: "Designs creative nail art and polish styles.",
    image: "https://images.unsplash.com/photo-1545992334-3a95ef4f3c6c"
  },
  {
    name: "Parth Bansal",
    profession: "Marketing Strategist",
    description: "Builds growth strategies for brands.",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
  },
  {
    name: "Hiba Noor",
    profession: "Skin Care Specialist",
    description: "Provides facial treatments and skincare advice.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
  },
  {
    name: "Vivaan Khurana",
    profession: "Music Producer",
    description: "Produces beats and manages studio recordings.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91"
  },
  {
    name: "Anushka Tiwari",
    profession: "Journalist",
    description: "Covers news stories with honesty and clarity.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9"
  }
];


let sum='';
people.forEach(function(elem){
  let r=Math.floor(Math.random()*128+127);
  let g=Math.floor(Math.random()*128+127);
  let b=Math.floor(Math.random()*128+127);
  let color = `rgb(${r},${g},${b})`;

    sum+= `<div class="card" style=background:${color};>
            <img src="${elem.image}"alt="user Image">
            <h4>${elem.name}</h4>
            <h1>${elem.profession}</h1>
            <p>${elem.description}</p>
        </div>`;
        
})
console.log(sum)
let main = document.querySelector('main');
main.innerHTML = sum;
sum.style.backgroundColor = color;