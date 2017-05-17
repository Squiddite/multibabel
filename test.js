function someClass() {
   this.someProperty = 'initial';

   function memberFunction() {
      this.someProperty = 'modified';
   }

   return {
      someProperty: this.someProperty,
      memberFunction: memberFunction
   };
}

var instance = new someClass();

console.log( instance );
console.log( instance.someProperty );
instance.memberFunction();
console.log( instance.someProperty );
