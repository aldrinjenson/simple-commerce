const email = document.getElementById("email");
const pass = document.getElementById("pass");

const { createClient } = supabase;
const _supabase = createClient(
  "https://vfotmyqmvoykyzrkcitv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTg0ODUwMSwiZXhwIjoxOTU3NDI0NTAxfQ.rG9Wkwqv1BUNWkMuWSOEHPtgaLFRMlno48Nn9iCM8oA"
);

const handleSignin = async () => {
  if (pass.value === "" || email.value === "") {
    return alert("Please enter all the fields");
  }

  const { user, error } = await _supabase.auth.signIn({
    email: email.value,
    password: pass.value,
  });
  if (!user || error) {
    console.log("error in signup: " + error.message);
    console.log(error);

    return alert(
      "There is some error in signing in. Please check your details and try again after some time.\n" +
        error.message
    );
  }
  alert("Successfully signed in");
  setTimeout(() => {
    window.location = "products";
  }, 2000);
};
