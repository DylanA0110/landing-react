export const slipeUp = (delay:number)=>{
    return{
        initial:{
            y:-50,
            opacity:0
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                duration:0.5,
                delay
            }
        }
    }
} 

export const slipeInFrom = (delay:number, direction:string='left')=>{
    return{
        initial:{
            x:direction==='left' ? -100:100,
            opacity:0
        },
        animate:{
            x:0,
            opacity:1,
            transition:{
                duration:0.5,
                delay
            }
        }
    }
} 

export const blurIn = (delay: number = 0) => {
  return {
    initial: { filter: 'blur(20px)', opacity: 0 },
    animate: { filter: 'blur(0px)', opacity: 1, transition: { duration: 1.2, delay } },
  };
};