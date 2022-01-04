/**
 * 
 * @param {*} input 
 * @param {*} fromm 
 * @returns 
 */
function currencyc(input,fromm) {
      if(fromm == 'usd'){
         return `${input} $ =  ${(input * 85.74).toFixed(2)} BDT`
      }else if(fromm == 'cad'){
         return `${input} C$ = ${(input * 67.93).toFixed(2)} BDT`
      }else if(fromm == 'euro'){
         return `${input} € = ${(input * 97.52).toFixed(2)} BDT`
      }else if(fromm == 'pound'){
         return `${input} £ = ${(input * 116.02).toFixed(2)} BDT`
      }

}

//marriageChecker
/**
 * 
 * @param {*} name 
 * @param {*} year 
 * @param {*} gender 
 * @returns 
 */
let marriage = (name,year,gender) => {
       let date = new Date()
       let age = date.getFullYear() - year

       return `
             <p class="text-${marriageSatus(age,gender).clsss}">Hi ${name} You are ${age} ${age > 1 ? 'Years' : 'Year'} Old. ${marriageSatus(age,gender).agesta} </p>
       `   
}


/**
 * 
 * @param {*} year 
 * @param {*} gender 
 * @returns 
 */

function marriageSatus(year,gender){
       if(year >= 0 && year <= 10){
                     if(gender == 'male'){
                           return {
                                 agesta : `Tumi Ekhno Babu acho. tmr biyer boyos hote   ekhno ${(22 - year)} ${(22 - year) > 1 ? 'Years' : 'Year'} Baki`,
                                 clsss  :'danger'
                           }
                     }else if(gender == 'female'){
                              return {
                                 agesta : `Tumi Ekhno Baby acho. tmr biyer boyos hote   ekhno ${(18 - year)} ${(18 - year) > 1 ? 'Years' : 'Year'} Baki`,
                                 clsss  :'danger'
                           }
                     }
  
         }else if(year >= 11 && year <= 17){
                  if(gender == 'male'){
                        return {
                              agesta : `Tumi Ekhn Kishor. tmr biyer boyos   hote ekhno ${(22 - year)} ${(22 - year) > 1 ? 'Years' : 'Year'} Baki`,
                              clsss  :'warning'
                        }
                  }else if(gender == 'female'){
                           return {
                              agesta : `Tumi Ekhn kishori. tmr biyer boyos hote  ekhno ${(18 - year)} ${(18 - year) > 1 ? 'Years' : 'Year'} Baki`,
                              clsss  :'warning'
                        }
                  }

         }else if(year >= 18 && year <= 30){
                  if(gender == 'male'){
                          if(year <= 21){
                              return {
                                    agesta : `Tumi Ekhn Kishor. tmr biyer boyos   hote ekhno ${(22 - year)} ${(22 - year) > 1 ? 'Years' : 'Year'} Baki`,
                                    clsss  :'warning'
                                }
                          }else{
                              return {
                                    agesta : `Congratulations!  Young Man etai tmr biyer asol boyos.Jao patri dekha start koro ekhni.`,
                                    clsss  :'success'
                                }
                          }
                  }else if(gender == 'female'){
                           return {
                              agesta : `Tumi Ekhn Juboti.Congratulations!  Young Lady etai tmr biyer asol boyos.cheleder proposal Pele raji hoye jao ekhni.`,
                              clsss  :'success'
                        }
                  }

         }else if(year >= 31 && year <= 40){
                     
                     if(gender == 'male'){
                           return {
                                 agesta : `Amr mone hocche tmr biye korate asolei Joruri. r late kora moteo thik hbe na`,
                                 clsss  :'info'
                           }
                     }else if(gender == 'female'){
                              return {
                                 agesta : `Amr mone hocche apnar biye korate asolei Joruri. r late kora moteo thik hbe na`,
                                 clsss  :'info'
                           }
                     }
                  


         }else if(year >= 41 ){
                  if(gender == 'male'){
                        return {
                              agesta : `Apni ekhno biye koren ni...!`,
                              clsss  :'warning'
                        }
                  }else if(gender == 'female'){
                           return {
                              agesta : `Apni ekhno biye koren ni...!`,
                              clsss  :'warning'
                        }
                  }

         }




}



