const Meals = () => {
    const meals = [];
    fetch("http://localhost:3001/meals")
        .then((response) => response.json())
        .then((data) => {
            const arrayobj = data;

            for(let i = 0; i < arrayobj.length; i++) {
                console.log(arrayobj[i]);
            }
        })

    return (
        <ul id="meals">
        </ul>
    )
}

export default Meals