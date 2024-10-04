export const handleSignInWithGithub = async () => {
    try {
      window.open("/api/v1/auth/github", "_self");
      toast.success("Logged in Successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };