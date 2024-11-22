const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const userResponses = {};


const askQuestions = () => {
  rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
    userResponses.name = name;

    rl.question("What's an activity you like doing? ", (activity) => {
      userResponses.activity = activity;

      rl.question("What do you listen to while doing that? ", (music) => {
        userResponses.music = music;

        rl.question("Which meal is your favourite? (e.g., dinner, brunch, etc.) ", (meal) => {
          userResponses.meal = meal;

          rl.question("What's your favourite thing to eat for that meal? ", (food) => {
            userResponses.food = food;

            rl.question("Which sport is your absolute favourite? ", (sport) => {
              userResponses.sport = sport;

              rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (superpower) => {
                userResponses.superpower = superpower;

                
                console.log("\nHere is your profile:");
                console.log(`Name: ${userResponses.name}`);
                console.log(`Activity: ${userResponses.activity}`);
                console.log(`Music: ${userResponses.music}`);
                console.log(`Favourite meal: ${userResponses.meal}`);
                console.log(`Favourite food: ${userResponses.food}`);
                console.log(`Favourite sport: ${userResponses.sport}`);
                console.log(`Superpower: ${userResponses.superpower}`);

                rl.close();
              });
            });
          });
        });
      });
    });
  });
};


askQuestions();
