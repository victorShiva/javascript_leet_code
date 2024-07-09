

// --------------------   Promise APIs  -->  Promise.all , Promise.  --------------------------



//                                      (1)

//                                  # Promise.all()


/*                      Pormise.all([ p1 , p2 , p3 ])
                                       ↓    ↓    ↓
                                      3s    1s   2s
                                      ✓     ✓    ✓

                        after → 3s   [val1 , val2 , val3]           -> output



    Promise.all   →      it wait for all of them to finish.




                        Promise.all([ p1 , p2 , p3 ])
                                       ↓    ↓    ↓
                                      3s    1s   2s
                                      ✓     ✓    ✘

                        after → 2s      ERROR                       ->output


    Promise.all  →  if the any promise in error(failed) immediately return ERROR . not wait for other promise are resolve or reject.(it is not wait for all promises).



*/
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p1 success"), 3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p2 success"), 1000);
//     // setTimeout(() => reject("p2 failed"), 1000);
// })

// const p3 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve("p3 success"), 2000);
//     setTimeout(() => reject("p3 failed"), 2000);
// })

// Promise.all([p1, p2, p3])
//     .then(res => {
//         console.log(res);
//     }).catch(err => {
//         console.error(err);
//     })




//                                                  ( 2 )

//                                           # Promise.allSettled()

/*
                                    Pormise.allSettled([ p1 , p2 , p3 ])
                                                          ↓    ↓    ↓
                                                         3s    1s   2s
                                                         ✓     ✓    ✓


                                        after → 3s   [val1 , val2 , val3]           -> output





                                    Pormise.allSettled([ p1 , p2 , p3 ])
                                                          ↓    ↓    ↓
                                                         3s    1s   2s
                                                         ✓     ✘    ✓


                                        after → 3s   [val1 , error , val3]           -> output

        Promise.allSettled  →  It is wait for all Promises to fulfilled ( settled ).

*/

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p1 success"), 3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p2 success"), 1000);
//     // setTimeout(() => reject("p2 failed"), 1000);
// })

// const p3 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve("p3 success"), 2000);
//     setTimeout(() => reject("p3 failed"), 2000);
// })

// Promise.allSettled([p1, p2, p3])
//     .then(res => {
//         console.log(res);
//     }).catch(err => {
//         console.error(err);
//     })







//                                                  ( 3 )

//                                           # Promise.race()

/*
                                          Pormise.race([ p1 , p2 , p3 ])
                                                          ↓    ↓    ↓
                                                         3s    1s   2s
                                                               ✓


                                        after → 1s             (val2)            -> output



                    Promise.race  →   it return the value of the first settled promise. promise can be resolve or rejected.
                                      it is not wait for other promises finish.


                                           Pormise.race([ p1 , p2 , p3 ])
                                                          ↓    ↓    ↓
                                                         5s    3s   2s
                                                                    ✓


                                        after → 2s             (val3)            -> output




                                           Pormise.race([ p1 , p2 , p3 ])
                                                          ↓    ↓    ↓
                                                         5s    3s   2s
                                                                    ✘


                                        after → 2s             (ERROR)            -> output



*/

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p1 success"), 3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p2 success"), 5000);
//     // setTimeout(() => reject("p2 failed"), 1000);
// })

// const p3 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve("p3 success"), 2000);
//     setTimeout(() => reject("p3 failed"), 2000);
// })

// Promise.race([p1, p2, p3])
//     .then(res => {
//         console.log(res);
//     }).catch(err => {
//         console.error(err);
//     })






//                                                  ( 4 )

//                                           # Promise.any()

/*
                                            Pormise.any([ p1 , p2 , p3 ])
                                                           ↓    ↓    ↓
                                                          3s    1s   2s
                                                                ✓


                                        after → 1s             (val2)            -> output

                        Promise.any  →  it is wait for the first promise successful.






                                            Pormise.any([ p1 , p2 , p3 ])
                                                           ↓    ↓    ↓
                                                          3s    1s   2s
                                                                ✘    ✓


                                        after → 2s             (val3)            -> output





                                            Pormise.any([ p1 , p2 , p3 ])
                                                           ↓    ↓    ↓
                                                          3s    1s   2s
                                                          ✘     ✘    ✘


                                        after → 3s        [err1,err2,err3]            -> output AggregateError returns

*/

// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p1 success"), 3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("p2 success"), 5000);
//     // setTimeout(() => reject("p2 failed"), 1000);
// })

// const p3 = new Promise((resolve, reject) => {
//     // setTimeout(() => resolve("p3 success"), 2000);
//     setTimeout(() => reject("p3 failed"), 2000);
// })

// Promise.any([p1, p2, p3])
//     .then(res => {
//         console.log(res);
//     }).catch(err => {
//         console.error(err);
//     })



const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("p1 failed"), 3000);
})

const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("p2 success"), 5000);
    setTimeout(() => reject("p2 failed"), 1000);
})

const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => resolve("p3 success"), 2000);
    setTimeout(() => reject("p3 failed"), 2000);
})

Promise.any([p1, p2, p3])
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.error(err);
        console.log(err.errors);
    })