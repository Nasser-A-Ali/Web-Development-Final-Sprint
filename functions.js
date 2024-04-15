// Uses Fetch API to get data from a JSON file.
fetch('./people.json')
    .then(response => response.json())
    .then(data => {
        // Creates a superhero container to hold the person data.
        const container = document.createElement('div');
        container.id = 'superheroData';

        // Loops through each person array in the JSON data.
        data.forEach(person => {
            // Creates a new div for each superhero.
            const superheroDiv = document.createElement('div');
            superheroDiv.className = 'superhero';

            // Adds the data of each person from the JSON data to the superhero div.
            superheroDiv.innerHTML = `
                <h2>${getFullName(person)}</h2>
                <p>Age: ${person.age}</p>
                <p>Trivia: ${getTrivia(person)}</p>
                <p>Superpowers: ${getSuperpowers(person)}</p>
                <p>Universe: ${person.universe}</p>
            `;

            // Appends the superhero divs to the container.
            container.appendChild(superheroDiv);

            // Appends the superhero container to the body of the HTML.
            document.body.appendChild(container);


            // Logs the results of the functions to the console.
            console.log(getFullName(person));
            console.log(printHobbies(person));
            console.log(getTrivia(person));
            console.log(getSuperpowers(person));
        });
    })

    // Catches any errors and logs them to the console.
    .catch(error => {
        console.error(error);
    });

    // Creates a sentence that contains the full name and hero name of each person in the JSON data.
    function getFullName(person) {
        return `${person.names.first_name} ${person.names.last_name}, A.K.A., ${person.names.hero_name}`;
    }

    // Creates a sentence with proper punctuation to list the hobbies of each person in the JSON data.
    function printHobbies(person) {
        let statement = '';
        if (person.hobbies.length === 1) {
            statement = person.hobbies[0];
        } else if (person.hobbies.length = 2) {
            statement = person.hobbies[0] + ' and ' + person.hobbies[1];
        } else if (person.hobbies.length > 1) {
            statement = person.hobbies.slice(0, -1).join(', ') + ', and ' + person.hobbies[person.hobbies.length - 1];
        }
        return statement;
    }

    // Creates a sentence with proper punctuation and appends the person's favourite color, and animal
    // with the data from the printHobbies function.
    function getTrivia(person) {
        return `${person.names.hero_name}'s favourite color is ${person.favourite_colour}, their favourite animal is ${person.favourite_animal}, and some of their favourite hobbies include ${printHobbies(person)}.`;
    }

    // Creates a sentence with proper punctuation to list the superpowers of each person in the JSON data.
    function getSuperpowers(person) {
        let statement = '';
        if (person.superpowers.length === 1) {
            statement = person.superpowers[0] + '.';
        } else if (person.superpowers.length = 2) {
            statement = person.superpowers[0] + ' and ' + person.superpowers[1] + '.';
        } else if (person.superpowers.length > 2) {
            statement = person.superpowers.slice(0, -1).join(', ') + ', and ' + person.superpowers[person.superpowers.length - 1] + '.';
        }
        return statement;
    }

