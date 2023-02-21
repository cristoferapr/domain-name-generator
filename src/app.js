let pronoun = ["the", "our", "a"];
let adj = ["great", "big", "marvelous"];
let noun = ["jogger", "racoon", "hacker"];
for (let i = 0; i < pronoun.length; i++) {
  for (let j = 0; j < adj.length; j++) {
    for (let k = 0; k < noun.length; k++) {
      console.log(pronoun[i] + adj[j] + noun[k] + ".com");
    }
  }
}
