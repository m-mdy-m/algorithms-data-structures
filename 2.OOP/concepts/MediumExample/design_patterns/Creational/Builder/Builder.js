class UserBuilderJs{
    #name;#age;#hasJob;#money;#isEmployee
    constructor() {
        this.#name = ''
        this.#age = 0
        this.#hasJob = false
        this.#money = 0
        this.#isEmployee = false
    }
    setName(name){
        this.#name = name;
        return this;
      }
    
      setAge(age){
        this.#age = age;
        return this;
      }
    
      setMoney(money){
        this.#money = money;
        return this;
      }
    
      makeJob(){
        this.#hasJob = true;
        return this;
      }
    
      makeEmployee(){
        this.#hasJob = true;
        this.#isEmployee = true;
        return this;
      }
      build() {
        return {
          name: this.#name,
          age: this.#age,
          money: this.#money,
          isEmployee: this.#isEmployee,
          hasJob: this.#hasJob,
        };
      }
}
class PersonJs{
    constructor(builder) {
        this.name = builder.name
        this.age = builder.age
        this.money = builder.money
        this.hasJob = builder.hasJob
        this.isEmployee = builder.isEmployee
    }
}
const person2 = new PersonJs(new UserBuilderJs().setName('mahdi').setAge(20).setMoney(200).build())

console.log(person2);