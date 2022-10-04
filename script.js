const element = document.getElementById("myBtn");
element.addEventListener("click", CreateArticle);

function CreateArticle() {
    const articleText = document.createElement('div');
    articleText.className = "article";
    articleText.innerHTML += "<article> <h1>Lorem ipsum</h1> <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae quam eu lorem volutpat varius. Morbi aliquet non nunc eu pharetra. Sed id dapibus nisi. Morbi et urna feugiat, viverra lectus sit amet, fermentum tortor. Mauris elementum dui sed molestie dignissim. Vivamus porttitor rutrum ligula, sed sodales libero ornare sed. Quisque malesuada, tellus in porttitor sodales, nisi dolor molestie mi, quis posuere justo dolor eu justo. In magna mauris, scelerisque quis mi non, facilisis venenatis nisi. Curabitur suscipit est quis efficitur porta. Donec gravida arcu semper turpis vestibulum egestas. Donec sed venenatis dolor. Vestibulum eget eros et leo molestie feugiat </p></article>";
    document.getElementById("article-content").appendChild(articleText);
}