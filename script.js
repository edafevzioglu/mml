document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');

// Function to load movie listings
function loadMovieListings() {
    // Updated movie data without descriptions, directors, and years
    const movies = [
        { title: 'One Fine Day', imageUrl: "https://64.media.tumblr.com/207b2cff5e71e5905aa15e2537f70d03/a648309f1e38239a-da/s2048x3072/0eaabc3f66d4055b00631c3f8b46028829bde347.jpg" },
        { title: 'Jane Eyre', imageUrl: "https://64.media.tumblr.com/c671fa25faa292cd5b8decff884148a8/a648309f1e38239a-4e/s2048x3072/a0ceb681187c775d3520486c23e3a8b0b9fa6cbe.jpg" },
        { title: 'Zodiac', imageUrl: "https://64.media.tumblr.com/0305ea2d0abcd9349d01e7bab51a1253/a648309f1e38239a-2d/s2048x3072/c3e32e3e5292b6b12a26266f4aeca9f01deb7a64.jpg" },
        { title: 'Little Women', imageUrl: "https://64.media.tumblr.com/fbf888a81277d9d8023eec84b405ad5a/a648309f1e38239a-28/s2048x3072/3249875182b1477b9330a50d24ec29d472fe078a.jpg" },
        { title: 'The Classic', imageUrl: "https://64.media.tumblr.com/802111bbfd8a3d03a4101f0b466e1699/a648309f1e38239a-ee/s2048x3072/8579490275760d429a7f08e9c1a6fa33fb98d572.jpg" },
        { title: 'The Batman', imageUrl: "https://64.media.tumblr.com/ae88f4ae0e19d5ef6da12d9064662a50/a648309f1e38239a-3d/s2048x3072/5672a4d7ff31cb558da4e7784c09c7adce1ec95e.jpg" },
        { title: 'Far From Madding Crowd', imageUrl: "https://64.media.tumblr.com/ea5bd944d6bf9d78b4f441fa34aabc80/a648309f1e38239a-1a/s2048x3072/76157366e25828f808345478ca8f7c4a18e91a8e.jpg" },
        { title: 'The Sixth Sense', imageUrl: "https://64.media.tumblr.com/8792d384f0bb4c99ed6009c9468c719e/a648309f1e38239a-ba/s2048x3072/4e065cfb9c8983b31db5e89b8d12e28415403276.jpg" },
        { title: 'Mulan', imageUrl: "https://64.media.tumblr.com/ab210d6c39cd79a94aab50fa3aecdfb9/a648309f1e38239a-27/s2048x3072/f35aca1431c14ed3fa1ad2cb8b744b9a07520fdc.jpg" },
        { title: 'Only You', imageUrl: "https://64.media.tumblr.com/91a33966574c6e957300c048748d8435/a648309f1e38239a-2e/s2048x3072/dd109aa70509cbbde675a09a0d7653fb7a531605.jpg" },
        { title: "Ocean's Eleven", imageUrl: "https://64.media.tumblr.com/f1f39e5cb5c323add53278692cdf7f92/a648309f1e38239a-ad/s2048x3072/20279993bdb19bab53426ad4cfbf8f381b11307a.jpg" },
        { title: 'Contact', imageUrl: "https://64.media.tumblr.com/f0b5f568115a45eefbed5e14836b9bc4/a648309f1e38239a-04/s2048x3072/c2fec5507a1d94ce78532a353533a00f4cb806cf.jpg" },
        // Add more movie data here...
    ];

    // Update DOM with movie listings
    container.innerHTML = ''; // Clear existing content
    movies.forEach(movie => {
        container.innerHTML += `
            <div class="movie">
                <h2>${movie.title}</h2>
                <img src="${movie.imageUrl}" alt="${movie.title} Poster" width="360" height="360">
                <a href="#" class="view-details" data-title="${movie.title}">View Details</a>
            </div>
        `;
    });

    // Attach event listeners to view details links
    const viewDetailLinks = document.querySelectorAll('.view-details');
    viewDetailLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const title = this.getAttribute('data-title');
            loadMovieDetails(title);
        });
    });
}


    // Function to load movie details
function loadMovieDetails(title) {
    const movies = [
        { title: 'One Fine Day', director: 'Michael Hoffman', year: 1996, description: "In this romantic comedy, two single parents find themselves unexpectedly thrown together when their hectic schedules collide, leading to a whirlwind day of adventures and unexpected romance." },
        { title: 'Jane Eyre', director: 'Cary Joji Fukunaga', year: 2011, description: "Based on Charlotte Brontë's classic novel, this atmospheric adaptation follows the journey of the independent and resilient Jane Eyre as she navigates love, loss, and the search for belonging in 19th-century England." },
        { title: 'Zodiac', director: 'David Fincher', year: 2007, description: "A gripping mystery thriller based on real events, Zodiac chronicles the hunt for the notorious Zodiac Killer who terrorized the San Francisco Bay Area in the late 1960s and early 1970s, weaving together intricate investigations and personal obsessions." },
        { title: 'Little Women', director: 'Greta Gerwig', year: 2019, description: "Greta Gerwig's heartfelt adaptation of Louisa May Alcott's beloved novel follows the March sisters—Jo, Meg, Beth, and Amy—as they navigate the challenges of adolescence, sisterhood, and societal expectations against the backdrop of the American Civil War era." },
        { title: 'The Classic', director: 'Kwak Jaeyong', year: 2003, description: "A timeless romance that spans decades, The Classic tells the story of two love stories intertwined—one in the present day and the other set in the 1960s." },
        { title: 'The Batman', director: 'Matt Reeves', year: 2022, description: "In this dark and gritty reboot of the iconic superhero franchise, Batman faces off against his most formidable foes as he seeks to protect Gotham City from corruption and chaos." },
        { title: 'Far From Madding Crowd', director: 'Thomas Vinterberg', year: 2015, description: "Based on Thomas Hardy's classic novel, this sweeping period drama follows the independent and headstrong Bathsheba Everdene as she navigates love and heartbreak amidst the beauty of rural England." },
        { title: 'The Sixth Sense', director: 'M. Night Shyamalan', year: 1999, description: "A psychological thriller with a supernatural twist, The Sixth Sense follows child psychologist Malcolm Crowe as he tries to help a young boy who claims to see ghosts, uncovering dark secrets along the way." },
        { title: 'Mulan', director: 'Tony Bancroft, Barry Cook', year: 1998, description: "Disney's animated classic Mulan tells the inspiring tale of a young woman who disguises herself as a man to take her father's place in the army and defend China against invading forces." },
        { title: 'Only You', director: 'Norman Jewison', year: 1994, description: "A charming romantic comedy, Only You follows a young woman who travels to Italy in search of her soulmate, guided by a mysterious fortune teller's prediction." },
        { title: "Ocean's Eleven", director: "Steven Soderbergh", year: 2001, description: "A stylish heist film, Ocean's Eleven follows a charismatic thief who assembles a team of skilled criminals to pull off an elaborate casino robbery in Las Vegas." },
        { title: 'Contact', director: 'Robert Zemeckis', year: 1997, description: "Based on the novel by Carl Sagan, Contact explores humanity's quest for extraterrestrial life as scientist Ellie Arroway makes contact with an alien intelligence, sparking a journey of discovery and existential questions." },
        // Add more movie data here...
    ];

    // Find the movie details from the array
    const movie = movies.find(movie => movie.title === title);

    // Update DOM with movie details
    container.innerHTML = `
        <div class="movie-details">
            <h2>${movie.title}</h2>
            <p><strong>Director:</strong> ${movie.director}</p>
            <p><strong>Year:</strong> ${movie.year}</p>
            <p><strong>Description:</strong> ${movie.description}</p>
            <a href="#" class="back-to-list">Back to Movie List</a>
        </div>
    `;

    // Attach event listener to back to list link
    const backToListLink = document.querySelector('.back-to-list');
    backToListLink.addEventListener('click', function(event) {
        event.preventDefault();
        loadMovieListings();
    });
}


    // Function to retrieve director based on movie title
    function getDirector(title) {
        // Here, you could implement logic to retrieve director based on movie title
        // For now, we're returning a placeholder value
        return 'Director';
    }

    // Function to retrieve year based on movie title
    function getYear(title) {
        // Here, you could implement logic to retrieve year based on movie title
        // For now, we're returning a placeholder value
        return 'Year';
    }

    // Initial load of movie listings
    loadMovieListings();
});
