// 1. create a constant named friends,
// which is an array that contains 2
// names of your choosing.

// 2. Create a new constant named updatedFriends,
// which includes the friends array values plus
// one additional name

// 3. Create a new constant named friendNameLengths,
// which is based on the array updatedFriends,
// but instead of having the friends names,
// have the array store the length of each persons name.

// 4. Create a new constant named shorterNamedFriends,
// which will be a list of the friends except the friend with the longest name.

// 5. Print each variable to the console.

// Solution can be seen at:
// https://jsbin.com/nevonet/1/edit?js,console
const friends = [
    "Lisa",
    "Max",
];

const updatedFriends = [...friends, "Robby"];

function nameLength(name) {
    return name.length;
};
const friendNameLengths = updatedFriends.map(nameLength);

const maxFriendsLength = Math.max(...friendNameLengths);
const shorterNamedFriends = updatedFriends.filter(function(name){
    return name.length < maxFriendsLength;
});


console.log(friends, updatedFriends, friendNameLengths, shorterNamedFriends);



