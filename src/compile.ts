let hi = 'hi';
console.log(hi.toUpperCase());


const callback = (entries:IntersectionObserverEntry[],observer:IntersectionObserver) =>{
  entries.forEach(entry =>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    };
  });
};

const options:IntersectionObserverInit = {
  threshold:0.7,
};

const observer = new IntersectionObserver(callback,options);

const el = <HTMLElement>document.querySelector(".container");
observer.observe(el);
