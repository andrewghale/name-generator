const maleButton = document.getElementById('submit-male-guess');
const femaleButton = document.getElementById('submit-female-guess');

maleButton.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('male-output').innerHTML = `"${generateMaleName()}"`;
});

femaleButton.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('female-output').innerHTML = `"${generateFemaleName()}"`;
});

const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const getRandomInt = (min, max) => {
  	return Math.floor(Math.random() * (max - min)) + min;
}

const generateFemaleName = () => {
    // https://www.independent.co.uk/life-style/baby-names-popular-uk-babycentre-2019-olivia-muhammed-a8974461.html
    const firstNames = [
        "olivia",
        "sophia",
        "lily",
        "ava",
        "mia",
        "isla",
        "amelia",
        "freya",
        "isabella",
        "emily",
        "aria",
        "evie",
        "grace",
        "isabelle",
        "ella",
        "ivy",
        "sophie",
        "willow",
        "charlotte",
        "elsie"
    ];
    // https://www.independent.co.uk/news/uk/home-news/the-25-common-surnames-britain-family-history-university-west-england-bristol-uk-a7423196.html
    const familyNames = [
        "smith",
        "jones",
        "williams",
        "taylor",
        "davies",
        "evans",
        "thomas",
        "johnson",
        "roberts",
        "walker",
        "wright",
        "robinson",
        "thompson",
        "white",
        "hughes",
        "edwards",
        "green",
        "lewis",
        "wood",
        "harris",
        "martin",
        "jackson",
        "clarke"
    ];
    const name = `${capitalizeFirst(firstNames[getRandomInt(0, firstNames.length)])} ${capitalizeFirst(familyNames[getRandomInt(0, familyNames.length)])}`;
	return name;
}
const generateMaleName = () => {
    // https://www.independent.co.uk/life-style/baby-names-popular-uk-babycentre-2019-olivia-muhammed-a8974461.html
    const firstNames = [
        "muhammad",
        "noah",
        "george",
        "oliver",
        "charlie",
        "harry",
        "leo",
        "arthur",
        "jack",
        "freddie",
        "jaxon",
        "ethan",
        "jacob",
        "theo",
        "oscar",
        "alfie",
        "henry",
        "archie",
        "joshua",
        "thomas"
    ];
    // https://www.independent.co.uk/news/uk/home-news/the-25-common-surnames-britain-family-history-university-west-england-bristol-uk-a7423196.html
    const familyNames = [
        "smith",
        "jones",
        "williams",
        "taylor",
        "davies",
        "evans",
        "thomas",
        "johnson",
        "roberts",
        "walker",
        "wright",
        "robinson",
        "thompson",
        "white",
        "hughes",
        "edwards",
        "green",
        "lewis",
        "wood",
        "harris",
        "martin",
        "jackson",
        "clarke"
    ];
    const name = `${capitalizeFirst(firstNames[getRandomInt(0, firstNames.length)])} ${capitalizeFirst(familyNames[getRandomInt(0, familyNames.length)])}`;
	return name;
}

$( "#capitalize-button" ).click(function() {
    $( "#capitalize-code" ).slideToggle( "slow");
});

$( "#randnum-button" ).click(function() {
    $( "#randnum-code" ).slideToggle( "slow");
});

$( "#namegen-button" ).click(function() {
    $( "#namegen-code" ).slideToggle( "slow");
});

$('#capitalize-button').click(function() {
	$('.bubble').addClass('animate');
})
