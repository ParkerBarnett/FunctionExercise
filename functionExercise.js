// Functions Exercise

// 1
function fozzieBear(){
    console.log('Wokka Wokka');
};
fozzieBear();

console.log(a);

// 2
function beaker(speak){
    console.log(speak);
    console.log(speak);
    console.log(speak);
    console.log(speak);
};
beaker('Meep');

// 3
function muppetShow(a, b){
    if (a === 'Muppet' && b === "Show"){
        console.log("It's time to play the music. It's time to light the lights");
    }
};
muppetShow('Muppet', 'Show');

console.log(a);

// 4
function kermit(){
    return 'Kermit the Frog';
};
kermit();

console.log(a);

// 5
function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true;
    } else {
        return false;
    }
};

console.log(muppetShowSeasons(5));

// 6
const manOrMuppet = function(){
    return 'Am I am man or am I a muppet';
};

manOrMuppet();
console.log(manOrMuppet);
console.log(a);

// 7
rainbowConnection = () => "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me";
console.log(rainbowConnection());

// 8
// No

// 9
// Yes

// 10a
const newMuppetMovies = ['The Muppets', 'The Muppets Most Wanted'];

// 10b
const upperMovies = newMuppetMovies.map(function(movie){
    return movie.toUpperCase();
});
console.log(upperMovies);




