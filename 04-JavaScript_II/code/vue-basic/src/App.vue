<template lang="html">
  <div id="app">



  </div>
</template>

<script lang="js">

console.log('hey')

const someName = (x) => {

  console.log(x)
  // document.write("<h1>Hello World!</h1><p>Have a nice day!</p>");

}

function someFunction() {

console.log(this)


}

someName(10)
someFunction()


let someArray = [1, 2, 3, 4, 5, 6]
someArray.forEach((x, index) => {
  console.log('value:: ' + x, 'index: ' + index)
})

let someObject = { name: 'mateo', lastname: 'marquez', city: 'baltimore', state: 'md' }



for (let number = 0; number <= 12; number = number + 2) {

  console.log(number);

}


</script>

<style lang="css">

</style>
