function twoSum(nums: number[], target: number): number[] {
    const map=new Map<number,number>();
    for(let i=0;i<nums.length;i++){
        const sum=target-nums[i];
        if(map.has(sum)){
            return [map.get(sum)!,i];
        }
        map.set(nums[sum],i);  
    }
    return [];
};