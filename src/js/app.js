export default class Team {
  constructor(persons) {
    this.persons = persons;
  }

  // eslint-disable-next-line class-methods-use-this
  [Symbol.iterator]() {
    const keys = Object.keys(this.persons);
    const limit = keys.length;
    const personFn = this.persons;
    let length = 0;

    return {

      next() {
        if (length < limit) {
          return {
            done: false,

            // eslint-disable-next-line no-plusplus
            value: personFn[length++],
          };
        }
        return {
          done: true,
        };
      },
    };
  }
}
