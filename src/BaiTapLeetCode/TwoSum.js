

const twoSums = (arr,target)=>{
    var obj ={}
    var i=0;
    var preObj;
    var preI;
 
    arr.forEach(num => {
     if(num<target){ 
         var changeNums= target-num;
         obj = {[i]: [changeNums] };
         if(i>0){    
            if(preObj[preI] == num){
             console.log(`${preObj[preI]},${changeNums}`)
             console.log(`Index đây a : ${preI},${i}`)
            }
            else{
             preObj=obj;
             preI=i;
            }
         }
         if(i==0){
             preObj= obj;
             preI=i;
         }
         i++
     }
    });
    return obj
 }
 

 export default twoSums