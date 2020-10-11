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
    let structure = document.querySelector('.job-box');
    // console.log(structure);
    let cloneStructure = structure.cloneNode(true);
    let logo = cloneStructure.querySelector('.job-box > img')
    // console.log(cloneStructure.querySelector('.job-box > img'));
    logo.src = obj['logo'];
    logo.alt = obj['company'];
    // console.log(logo);
    let enterprise = cloneStructure.querySelector('.enterprise');
    enterprise.innerText = obj['company'];
    let job = cloneStructure.querySelector('.job');
    job.innerText = obj['position'];
    document.querySelector('main').appendChild(cloneStructure);
  })
}
