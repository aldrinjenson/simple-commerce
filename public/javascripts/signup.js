const email = document.getElementById("email");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");

const { createClient } = supabase;
const _supabase = createClient(
  "https://vfotmyqmvoykyzrkcitv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTg0ODUwMSwiZXhwIjoxOTU3NDI0NTAxfQ.rG9Wkwqv1BUNWkMuWSOEHPtgaLFRMlno48Nn9iCM8oA"
);

const handleSignUp = async (e) => {
  if (!pass1.value || pass1.value !== pass2.value) {
    return alert("Passwords doesn't match!\nPlease try again");
  }

  const { user, error } = await _supabase.auth.signUp({
    email: email.value,
    password: pass1.value,
  });
  if (!user || error) {
    console.log("error in signup: " + error.message);

    return alert(
      "There is some error in signing up. Please check your details and try again after some time.\n" +
        error.message
    );
  }
  alert("Successfully signed up");
  setTimeout(() => {
    window.location = "products";
  }, 1000);
};
