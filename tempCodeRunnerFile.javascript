const foo = {
  a: {
    name: 123
  }
}

const a = foo.a
foo.a = { age: 18 }
console.log(foo.a === a)