// basic interactivity: nav toggle, smooth scroll, form handling
document.addEventListener('DOMContentLoaded', function(){
  // year in footer
  document.getElementById('year').innerText = new Date().getFullYear();

  // nav toggle
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  toggle.addEventListener('click', () => nav.classList.toggle('show'));

  // smooth scroll for nav links
  document.querySelectorAll('.nav-link').forEach(link=>{
    link.addEventListener('click', e=>{
      e.preventDefault();
      const href = link.getAttribute('href');
      const target = document.querySelector(href);
      if(target){
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        nav.classList.remove('show');
      }
    });
  });
});

// contact form handler (demo only)
function handleForm(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMsg = document.getElementById('formMsg');

  if(!name || !email || !message){
    formMsg.style.color = 'crimson';
    formMsg.innerText = 'Please fill all fields.';
    return false;
  }

  // In a real site you'd POST this to your backend.
  // For this static demo, show a friendly message and clear.
  formMsg.style.color = 'green';
  formMsg.innerText = 'Thanks! Message sent (demo).';
  setTimeout(()=>{ formMsg.innerText = ''; }, 3000);
  document.getElementById('contactForm').reset();
  return false;
}


