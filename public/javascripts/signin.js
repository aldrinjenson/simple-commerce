const { createClient } = supabase;
const _supabase = createClient(
  "https://vfotmyqmvoykyzrkcitv.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTg0ODUwMSwiZXhwIjoxOTU3NDI0NTAxfQ.rG9Wkwqv1BUNWkMuWSOEHPtgaLFRMlno48Nn9iCM8oA"
);

const handleLogin = async () => {
  const { user, error } = await _supabase.auth.signIn({
    email: "example@email.com",
    password: "example-password",
  });
  console.log(user);
};
