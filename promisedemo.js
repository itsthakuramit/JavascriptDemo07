function PromiseTest(mark){

    let PromiseResult = new Promise(
       (resolve,reject) => {
           if(mark >= 60)
                resolve("Cleared")
            else
                reject("Not cleared")
       } 
    )
    
    PromiseResult
        .then( (res) => {
            console.log('Resolved : '+res)
        })
        .catch( (err) =>{
            console.log('Error : ' + err)
        });

}


PromiseTest(45);