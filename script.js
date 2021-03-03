const containerDescriere = document.getElementById("jobShop");

//containerDescriere.innerHTML = intro;

const homeBtn = document.getElementById("homeBtn");
const countBtn = document.getElementById("countBtn");
const intBtn = document.getElementById("intBtn");

function setText(htmlText) {
  containerDescriere.innerHTML = htmlText;
}

homeBtn.addEventListener("click", function () {
  setText(home);
});
countBtn.addEventListener("click", function () {
  setText(count);
});
intBtn.addEventListener("click", function () {
  setText(int);
});

const home = `
<img src="images/logo_jobshop_albastru_rgb.png" alt="" />
`;

const count = `

<p>
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
explicabo natus omnis accusamus, eum molestiae minima eaque atque vel,
praesentium tempora! Soluta, architecto asperiores illum rerum,
ducimus, dolorum fugiat unde deleniti animi placeat molestias
cupiditate quo suscipit quaerat ullam corrupti aut nostrum illo dicta
optio modi? Maiores facere, rem, minus harum quas omnis dolorum,
beatae eveniet vero blanditiis mollitia at. Illo earum, ipsa aliquid
consequatur tenetur temporibus laborum pariatur quidem.
</p>
`;

const int = `
<p>textulet</p>
`;
