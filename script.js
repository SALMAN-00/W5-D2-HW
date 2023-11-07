let cat1 = document.getElementById("cats");
let dog11 = document.getElementById("home-dog");
let dog22 = document.getElementById("dog1");
let dog33 = document.getElementById("dog2");
let description1 = document.getElementById("description-h1");
let description2 = document.getElementById("description-p");

cat1.addEventListener("click", function () {
  description1.innerHTML = "We're the Cat People";
  description2.innerHTML =
    "Book trusted, local pet sitters and walkers who will care for your cat like you would.";
  dog11.src =
    "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhdHxlbnwwfHwwfHx8MA%3D%3D";
  dog22.src =
    "https://images.unsplash.com/photo-1585373683920-671438c82bfa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2F0JTIwY3V0ZXxlbnwwfHwwfHx8MA%3D%3D";
  dog33.src =
    "https://images.unsplash.com/photo-1583083527882-4bee9aba2eea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhdCUyMGN1dGV8ZW58MHx8MHx8fDA%3D";
});
