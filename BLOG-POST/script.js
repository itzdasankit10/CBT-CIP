var poo = document.getElementById("tt");
var img = document.getElementById("oo");
var body = document.body;
var ll = document.getElementById("ll");
var blogPosts = document.getElementById("blogPosts");
var modal = document.getElementById("mos");
var modalImage = document.getElementById("modalImage");
var kolu = document.getElementById("kolu");
var uii = document.getElementById("uii");
var ity = document.querySelector(".inti");

poo.addEventListener("click", () => {
  if(body.classList.contains("light-mode")) {
    console.log("LK");
    document.querySelector("#tt").style.backgroundColor="black"
    img.src = "light.svg";
    img.style.transform="rotate(180deg)"
    document.querySelector(".oad").style.background = "radial-gradient(circle, rgba(118,118,118,1) 0%, rgba(39,39,39,1) 100%)"
    document.querySelector(".head").style.background = "radial-gradient(circle, rgba(118,118,118,1) 36%, rgba(67,65,65,1) 100%)"
  }
  else{
    console.log("LLL");
    document.querySelector("#tt").style.backgroundColor="white"
    img.src="darkm.svg";
    img.style.transform="rotate(0deg)"
    document.querySelector(".oad").style.background = "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)";
    document.querySelector(".head").style.background = "linear-gradient(135deg, #ff7eb3, #6c63ff)"
  }
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");
});

ll.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;
  const imageUpload = document.getElementById("imageUpload").files[0];

  if (title && content && imageUpload) {
    const reader = new FileReader();
    reader.onload = function () {
      const post = document.createElement("article");
      post.classList.add("post");
      post.innerHTML = `
        <img src="${reader.result}" alt="${title}">
        <h3>${title}</h3>
        <p>${content.substring(0, 100)}...</p>
      `;
      post.addEventListener("click", () => {
        modal.style.display = "block";
        modalImage.src = reader.result;
        kolu.textContent = title;
        uii.textContent = content;
      });

      blogPosts.appendChild(post);
      ll.reset();
    };
    reader.readAsDataURL(imageUpload);
  }
});


ity.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
