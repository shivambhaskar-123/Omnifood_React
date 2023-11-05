import './App.css';
import './assests/img/omnifood-logo.png'
import Header from './app/components/Header';
import Homepage from './app/components/Homepage';
import { useEffect } from 'react';
function App() {

  useEffect(() => {
    // SMOOTH SCROLLING ANIMATION
    const bodyEl = document.body
    // const navListAnchorEl=document.querySelectorAll('.main-nav-link');
    // we will select all anchor link element
    const handleClickForScrolling = (event) => {
      event.preventDefault();
      if (event.target.tagName === 'A') {
        const href = event.target.getAttribute('href');
        //we will read the attribute href of target
        // console.log(href);
        const sectionEl = document.querySelector(href)
        sectionEl.scrollIntoView({
          behavior: 'smooth'
        });
      }

      if (event.target.tagName === 'IMG' && event.target.parentElement.tagName === 'A') {
        const href = event.target.parentElement.getAttribute('href');
        if (href.includes('#'))
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        // Top:0 so that it scroll back to top
      }
    }

    bodyEl.addEventListener('click', handleClickForScrolling);

    // Sticky Navigation

    const sectionHeroEl = document.querySelector('.section-hero');

    const obs = new IntersectionObserver(function (enteris) {
      // console.log(enteris);
      const ent = enteris[0];
      if (!ent.isIntersecting) {
        // document.querySelector('header').classList.add('sticky'); 
        document.body.classList.add('sticky');

      } else {
        document.body.classList.remove('sticky');
      }
    },
      {
        // root -> where the element should we appearing or not
        root: null,// means that we will observe this setionHero inside of the viewport
        threshold: 0, // 0 basically means this will fire i.e. we will have an event as soon as 0% of the hero section is inside of the viewport 
        // 1 means when we will have event hero-section is completely inside of the viewport
        rootMargin: "-80px"
        // rootMargin -80px because we set height of sticky navigation to be 80 px so that next section seen properly when this class is added
      });
    // IntersectionObserver takes two thing 1st function and 2nd options

    obs.observe(sectionHeroEl);
    // we will observe sectionHeroEl

    return () => {
      bodyEl.removeEventListener('click', handleClickForScrolling);
    };
  }, [])
  return (
    <>
      <Header />
      <Homepage />
    </>
  );
}

export default App;
