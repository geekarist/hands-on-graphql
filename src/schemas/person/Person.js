const PersonType = `
  type Person {
    firstName : String
    lastName : String
    count(until : Int) : String
    say(sentence : String!) : String
  }
`;

const PersonResolver = () => {
  const person = {first_name : "Bastien", last_name : "Charès"};
  return {
    firstName : () => person.first_name,
    lastName : () => person.last_name,
    count : ({until}) => {
      return new Array(until).toString();
    },
    say : ({sentence}) => {
      return sentence;
    }
  };
};

module.exports = {
  type : PersonType,
  resolve : PersonResolver,
};
