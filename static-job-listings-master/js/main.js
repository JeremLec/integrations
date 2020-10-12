class Job {
  constructor(logo,company,position,postedAt,contract,location,role,languages){
    this.logo = logo;
    this.company = company;
    this.position = position;
    this.postedAt = postedAt;
    this.contract = contract;
    this.location = location;
    this.role = role;
    this.languages = languages;
  }
  structure(){
    return `
      <div class="job-box">
        <img src="${this.logo}" alt="${this.company}">
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
        <div class="categories">
          <span class="category">${this.role}</span>
          <span class="category">${this.languages}</span>
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
  let listJobs = JSON.parse(job);
  listJobs.map(obj => {
    let div = document.createElement('div');
    
    const logo = obj['logo'];
    const company = obj['company'];
    const position = obj['position'];
    const postedAt = obj['postedAt'];
    const contract = obj['contract'];
    const location = obj['location'];
    const role = obj['role'];
    
    // FIXME: fixer l'affichage des langages
    const languages = obj['languages'];

    console.log(languages);
    
    let job = new Job(logo,company,position,postedAt,contract,location,role,languages);
    let structure = job.structure();

    div.innerHTML = structure;

    document.querySelector('main').appendChild(div);
  })
}
