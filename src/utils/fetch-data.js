export const fetchData = async ({ resource }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzU3NGIxODQ2NTkxMmEwZmM5NzU1OWYzY2Y0YTMzNCIsInN1YiI6IjY1OWNmN2FiN2ZjYWIzMDI1ZDQwN2Q3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zTunXgpY8_mTze89qWidrRQbhq7KRZ3ixWrP_vnL-QU",
    },
  };

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${resource}`,
      options
    );
    const data = response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
};
