(function(){
  // Marquee: duplicate group for a seamless loop
  var track=document.querySelector('.marquee-track');
  if(track){track.appendChild(track.firstElementChild.cloneNode(true));}

  // Map selection
  var data={
    taimen:['International Taimen Initiative',"Creating a coalition to save the world's largest salmonid."],
    bristol:['Bristol Bay','Protecting one of the most important wild salmon habitats on Earth.'],
    susitna:['Susitna River','Keeping a vast Alaskan wilderness roadless and dam-free for salmon.'],
    skeena:['Skeena River','Defending "Mother Skeena" from mining, oil and gas, and timber industry pressure.'],
    oregon:['Oregon Coastal Rainforest','Protecting 250,000 acres of critical forestland in Oregon.']
  };
  var picks=document.querySelectorAll('[data-k]');
  function select(k){
    picks.forEach(function(el){el.classList.toggle('is-active',el.dataset.k===k);});
    document.getElementById('sel-name').textContent=data[k][0];
    document.getElementById('sel-text').textContent=data[k][1];
  }
  picks.forEach(function(el){el.addEventListener('click',function(){select(el.dataset.k);});});

  // Tabs accordion
  var tabs=document.querySelectorAll('#tabs .tab');
  tabs.forEach(function(t){
    t.querySelector('button').addEventListener('click',function(){
      tabs.forEach(function(o){
        var open=o===t;
        o.classList.toggle('is-open',open);
        o.querySelector('button').setAttribute('aria-expanded',open);
      });
    });
  });

  // Carousel
  var tr=document.getElementById('track'),bar=document.getElementById('bar');
  function step(){var c=tr.querySelector('.proj');return c?c.offsetWidth+20:420;}
  document.getElementById('prev').addEventListener('click',function(){tr.scrollBy({left:-step(),behavior:'smooth'});});
  document.getElementById('next').addEventListener('click',function(){tr.scrollBy({left:step(),behavior:'smooth'});});
  function progress(){
    var max=tr.scrollWidth-tr.clientWidth;
    var p=max>0?tr.scrollLeft/max:0;
    bar.style.left=(p*(96-32))+'px';
  }
  tr.addEventListener('scroll',progress,{passive:true});
  progress();
})();
