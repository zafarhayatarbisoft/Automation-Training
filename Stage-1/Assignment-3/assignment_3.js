let nums = [2,0,2,1,1,0];

function arraySort(nums) {

    let red=0, white=0, blue=0; 
    for (let i = 0; i < nums.length; i++) {   
        if (nums[i] === 0) {                 
            red++;                          
        } else if (nums[i] === 1) {        
            white++;                      
        } else {
            blue++;                      
        }
    }
    for (let i = 0; i < red; i++) {         
        nums[i] = 0;                       
    }
    for (let i = red; i < red + white; i++) {  
        nums[i] = 1;                            
    }
    for (let i = red + white; i < nums.length; i++) {  
        nums[i] = 2;                                   
    }
    return nums; 
}
console.log(arraySort(nums));  