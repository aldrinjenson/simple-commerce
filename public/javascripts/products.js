const logoutBtn = document.querySelector("#logoutBtn");
const buyButtons = document.querySelectorAll(".buyBtn");
const buyFormInputs = document.querySelectorAll(".buyFormInput");
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

const closeModal = () => {
  modal.style.display = "none";
  buyFormInputs.forEach((input) => (input.value = ""));
};
span.onclick = closeModal;
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

const { createClient } = supabase;

const _supabase = createClient(
  "https://vfotmyqmvoykyzrkcitv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTg0ODUwMSwiZXhwIjoxOTU3NDI0NTAxfQ.rG9Wkwqv1BUNWkMuWSOEHPtgaLFRMlno48Nn9iCM8oA"
);

const supabaseUser = _supabase.auth.user();
if (!supabaseUser) {
  alert("Cannot view products without signing in!");
  alert("Already logged in!");
  setTimeout(() => {
    window.location = "signup";
  }, 1000);
}

logoutBtn.addEventListener("click", async () => {
  const { error } = await _supabase.auth.signOut();
  if (error) {
    console.log("Error in signing out: " + error);
    return alert(
      "There seems to be some error in signing out. Please try again after a while"
    );
  }
  alert("Successfully signed out.");
  console.log(_supabase.auth.user());
  window.location = "signup";
});

let chosenProductId = null;
for (const btn of buyButtons) {
  btn.addEventListener("click", () => {
    chosenProductId = btn.id;
    modal.style.display = "block";
  });
}

const handleBuy = () => {
  const orderObj = { productId: chosenProductId };
  for (const buyInput of buyFormInputs) {
    if (!buyInput.value) {
      return alert("Please enter a valid value for: " + buyInput.placeholder);
    }
    orderObj[buyInput.id] = buyInput.value;
  }
  console.log(orderObj);

  console.log(chosenProductId);
};
