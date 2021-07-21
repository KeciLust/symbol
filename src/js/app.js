export default class Team {
  constructor(persons) {
    this.persons = persons;
  }

  // eslint-disable-next-line class-methods-use-this
  [Symbol.iterator]() {
    let length = 0;
    return {
      next() {
        if (length < this.persons.length) {
          return {
            done: false,

            // eslint-disable-next-line no-plusplus
            value: this.persons[length++],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
