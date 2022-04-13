export default function throttleOnRendering(cb) {
    if (!cb) {
      throw Error('Invalid required arguments');
    }
  
    let tick = false;
  
    return function(...params) {
        if (tick) return;
    
        tick = true;
        return requestAnimationFrame(() => {
            tick = false;
            return cb(...params);
        });
    };
}