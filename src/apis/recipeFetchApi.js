export const fetchRecipes = async () => {
    await fetch("https://api.edamam.com/search?q=chicken&app_id=33fca76c&app_key=39f634430116065e2b0fc40a08e396f3")
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });
}

// curl "https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free"