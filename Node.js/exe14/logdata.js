// Challenge 1

const surprisingFact = "The bumblebee bat is the world's smallest mammal";

console.log(surprisingFact)

console.log({surprisingFact})

// Challenge 2

const familyTree = [
    {
      name: "Person 1",
      children: [
        {
          name: "Person 2",
          children: [
            {
              name: "Person 3",
              children: [
                {
                  name: "Person 4",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

console.log(JSON.stringify(familyTree))

console.table(familyTree)

// Challenge 3

function importantTask() {
    console.count('doSomeCalled')
}

importantTask();
importantTask();
importantTask();
importantTask();
console.countReset('doSomeCalled')
importantTask();
importantTask();
