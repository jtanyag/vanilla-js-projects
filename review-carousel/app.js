const reviews = [
  {
    id: 1,
    img: "images/pexels-teddy-tavan-4890733.jpg",
    creditLink: "https://www.pexels.com/@bear",
    creditName: "Teddy tavan",
    author: "Cornelius Lane",
    job: "Front End Developer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, distinctio illum quis nobis aperiam mollitia non exercitationem alias reprehenderit similique tempore, maiores quaerat nemo debitis aut."
  },
  {
    id: 2,
    img: "images/pexels-ike-louie-natividad-3310695.jpg",
    creditLink: "https://www.pexels.com/@iamikeee",
    creditName: "Ike louie Natividad",
    author: "Blanca Sherman",
    job: "Back End Developer",
    text: "Doggo ipsum extremely cuuuuuute length boy pupperino extremely cuuuuuute sub woofer, shoober aqua doggo fat boi. Corgo heck thicc blep doggo, heckin good boys I am bekom fat wow such tempt doggorino boofers, aqua doggo he made many woofs mlem. very good spot porgo. Shooberino much ruin diet big ol heck vvv very jealous pupper, waggy wags heckin angery woofer length boy. Shoober corgo many pats puggo, length boy doggorino."
  },
  {
    id: 3,
    img: "images/pexels-mateus-souza-3586798.jpg",
    creditLink: "https://www.pexels.com/@visoesdomundo",
    creditName: "Mateus Souza",
    author: "Winifred Todd",
    job: "Full Stack Developer",
    text: " Heckin good boys thicc aqua doggo puggo porgo doge shoober adorable doggo you are doin me a concern, snoot yapper wow very biscit fat boi most angery pupper I have ever seen much ruin diet the neighborhood pupper. waggy wags blop much ruin diet. Vvv heckin good boys ur givin me a spook pupper, the neighborhood pupper heckin. Ur givin me a spook clouds pupper adorable doggo doggorino, lotsa pats thicc."
  },
  {
    id: 4,
    img: "images/pexels-sinitta-leunen-6652928.jpg",
    creditLink: "https://www.pexels.com/@sinileunen",
    creditName: "Sinitta Leunen",
    author: "Douglas Nunez",
    job: "Software Engineer",
    text: "Doggo ipsum you are doin me a concern smol borking doggo with a long snoot for pats puggorino doggo porgo wrinkler puggorino porgo, long bois length boy wow such tempt h*ck snoot. You are doing me a frighten noodle horse pupper wrinkler doggorino, most angery pupper I have ever seen many pats smol. Doge extremely cuuuuuute heckin good boys and girls much ruin diet h*ck long water shoob, shibe adorable doggo the neighborhood pupper I am bekom fat long water shoob, big ol very taste wow wow very biscit sub woofer."
  }
];

const profileImg = document.getElementById('profile-img');
const creditLink = document.getElementById('credit-link');
const creditName = document.getElementById('credit-name');
const author = document.getElementById('author');
const job = document.getElementById('job');
const text = document.getElementById('text');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentReview = 0;

const showReview = (person) => {
  const review = reviews[person];
  profileImg.style.backgroundImage = `url(${review.img})`;
  creditLink.href = review.creditLink;
  creditName.textContent = review.creditName;
  author.textContent = review.author;
  job.textContent = review.job;
  text.textContent = review.text;
}

window.addEventListener('DOMContentLoaded', () => {
  showReview(currentReview);
});

nextBtn.addEventListener('click', () => {
  currentReview++;
  if (currentReview > reviews.length - 1) {
    currentReview = 0;
  };
  showReview(currentReview);
});

prevBtn.addEventListener('click', () => {
  currentReview--;
  if (currentReview < 0) {
    currentReview = reviews.length - 1;
  };
  showReview(currentReview);
});