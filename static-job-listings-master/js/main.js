class Job {
  constructor(id,logo,company,position,postedAt,contract,location,role,level){
    this.id = id;
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
      <div class="job-box" id="${this.id}">
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
    filter
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
    const id = obj['id'];
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
    
    let job = new Job(id,logo,company,position,postedAt,contract,location,role,level);

    let structure = job.structure();
 
  
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
        filter(items);
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
    list.innerHTML += `<li class="tags">${item}<a href="javascript: remove(${index})"><span>x</span></a></li>`;
  });
}

function removeAttributeStyleAll(){
  let listJobsBox = document.querySelectorAll('.job-box');
  listJobsBox.forEach(item => {
    if(item.getAttribute('style')){
      item.removeAttribute('style');
    }
  });
}

// TODO: Refacto
// TODO: Gèrer les majuscules et minuscules dans la searchbox
function remove(i){
  items = items.filter(item => items.indexOf(item) != i);
  render();
  let tags = document.querySelectorAll('.tags');
  let listObjJobs = simplifyObjJob();
  let arrayId = [];
  listObjJobs.map(jobBox => {
    tags.forEach(tag => {
      let val = tag.innerText.slice(0,-1);
      if(jobBox['categories'].indexOf(val) != -1){
        arrayId.push(jobBox['id']);
      }
    })
  })
  console.log(arrayId);
  console.log(arrayId.length);
  let listJobsBox = document.querySelectorAll('.job-box');
  listJobsBox.forEach(el => {
    if (arrayId.length === 0) {
      if(el.getAttribute('style')){
        el.removeAttribute('style');
      }
    } else {
      arrayId.forEach(element => {
        if(element === parseInt(el.getAttribute('id'))){
          if (el.getAttribute('style')){
            el.removeAttribute('style');
          }
        }
      });
    }
  });
}

function allRemoved(){
  if(items.length !== 0){
    items = [];
    list.innerHTML = "";
    removeAttributeStyleAll();
  } else {
    alert("No items");
  }
}


function filter(search){
  let listObjJobs = simplifyObjJob();
  let arrayId = []
  listObjJobs.map(job => {
    search.forEach(item => {
      if(job['categories'].indexOf(item) === -1){
        arrayId.push(job['id']);
      }
    })
  });
  arrayId = new Set(arrayId);
  arrayId = [...arrayId];
  let listJobsBox = document.querySelectorAll('.job-box');
  listJobsBox.forEach(el => {
    arrayId.forEach(element => {
      if (element === parseInt(el.getAttribute('id'))){
        el.style.display = "none";
      }
    })
  })

}

function simplifyObjJob (){
  let data = JSON.parse(requete.response);
  let listData = data.map(job => {
    let obj = {};
    let id = job['id'];
    let categories = [...job['languages'],job['level'],job['role']];
    obj.id = id;
    obj.categories = categories;
    return obj;
  })
  return listData;
}


window.onload = function(){
  render();
  search.focus();
}
