/* for (let i =0; i<5; i++) {
    let  msg = "ABC"
    console.log(msg)

console.log(msg) */

//* lexical */
function bankRobbery () {
  const Hero = ['Batman', 'Superman', 'Sup']
  function cryForHelper () {
    function inner () {
      for (const hero of heroes) {
        console.log(`Please, ${hero.toUpperCase()}`)
      }
    }
    inner()
  }
  cryForHelper()
}
