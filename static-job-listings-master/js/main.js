class Job {
  constructor(logo,company,position,postedAt,contract,location,role,level){
    this.logo = logo;
    this.company = company;
    this.position = position;
    this.postedAt = postedAt;
    this.contract = contract;
    this.location = location;
    this.role = role;
    this.level = level;
    // this.languages = languages;
  }
  // TODO: improve structure 
  structure(){
    return `
      <div class="job-box">
        <div class="informations">
          <img src="${this.logo}" alt="${this.company}" class="logo">
          <div>
            <div class="name">
              <span class="enterprise">${this.company}</span>
            </div>
            <div>
              <span class="job">${this.position}</span>
            </div>
            <div class="details">
              <span>${this.postedAt} • ${this.contract} • ${this.location}</span>
            </div>
          </div>
        </div>
        <div class="categories">
          <span class="category">${this.role}</span>
          <span class="category">${this.level}</span>
        </div>
      </div>
    `;
  }
}

// TODO: tester avec Fetch()
let requete = new XMLHttpRequest();
requete.open('GET', '../data.json');
requete.onload = () => {
  if (requete.status == 200) {
    dataJob(requete.response);
  } else {
    console.log('error : ' + requete.status);
  }
}
requete.send();


function dataJob(job){
  // TODO: refacto function
  let listJobs = JSON.parse(job);
  listJobs.map(obj => {
    let div = document.createElement('div');
    const logo = obj['logo'];
    const company = obj['company'];
    const newBadge = obj['new'];
    const featuredBadge = obj['featured'];
    const position = obj['position'];
    const postedAt = obj['postedAt'];
    const contract = obj['contract'];
    const location = obj['location'];
    const role = obj['role'];
    const level = obj['level'];
    let languages = obj['languages'];
    let tools = obj['tools'];
    
    let job = new Job(logo,company,position,postedAt,contract,location,role,level);

    let structure = job.structure();
    console.log(newBadge);
    

    div.innerHTML = structure;
    if(newBadge === true){
      let span = document.createElement('span')
      span.classList.add('new');
      div.querySelector('.name').appendChild(span);
    }
    if(featuredBadge === true){
      let span = document.createElement('span')
      span.classList.add('featured');
      div.querySelector('.name').appendChild(span);
    }

    languages.forEach(function(item){
      let span = document.createElement('span');
      span.classList.add('category');
      span.innerText = item;
      div.querySelector('.categories').appendChild(span);
    });
    tools.forEach(function(item){
      let span = document.createElement('span');
      span.classList.add('category');
      span.innerText = item;
      div.querySelector('.categories').appendChild(span);
    })

    document.querySelector('main').appendChild(div);
  })
}

let search = document.querySelector('#search');
let list  = document.querySelector('#list');
let items = [];

search.addEventListener('keypress', function(e){
  if(e.key === 'Enter'){
    let val = search.value;
    if(val !== ''){
      if (items.indexOf(val) >= 0){
        alert('Tag name is a duplicate');
      } else {
        items.push(val);
        render();
        search.value = '';
        search.focus();
      }
    } else {
      alert('Please type a tag Name');
    }
  }
});

function render(){
  list.innerHTML = '';
  items.map((item,index) => {
    list.innerHTML += `<li>${item}<a href="javascript: remove(${index})"><span>x</span></a></li>`;
  });
}

function remove(i){
  items = items.filter(item => items.indexOf(item) != i);
  render();
}

window.onload = function(){
  render();
  search.focus();
}
