export const explorePopularRepos = async (req, res, next) => {
  const { language } = req.params;
  try {
    const resExplore = await fetch(
      `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc&per_page=50`,
      {
        headers: {
          authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      }
    );
    const data = await resExplore.json();
    //   return the data and sen the response back:
    res.status(200).json(data);
  } catch (error) {
    console.log("Error while exploring popular repos", error.message);
    next(error);
  }
};
