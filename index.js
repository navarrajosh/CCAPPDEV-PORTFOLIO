const loginLinks = document.querySelectorAll('.log-in');
const logoutLinks = document.querySelectorAll('.log-out');

const UIsetup = (user) => {
  if (user) {
    loginLinks.forEach(item => item.style.display = 'block');
    logoutLinks.forEach(item => item.style.display = 'none');
  } else {
    loginLinks.forEach(item => item.style.display = 'none');
    logoutLinks.forEach(item => item.style.display = 'block');
  }
}
// setup about

const aboutList = document.querySelector('.text1');

function renderAbout(doc) {
  console.log("pasok");
  let containerAbout = document.createElement('div');

  let p = document.createElement('p');
  let a = document.createElement('a');

  containerAbout.setAttribute('data-id', doc.id);
  p.textContent = doc.data().Text;
  a.textContent = 'x';

  p.className = "intro";
  a.className = "closer";

  containerAbout.appendChild(p);
  containerAbout.appendChild(a);

  aboutList.appendChild(containerAbout);

  a.addEventListener('click', (e) => {

    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');

    db.collection("Me").doc(id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
    e.preventDefault();
  })

}


const WorkList = document.querySelector('.gallery');

function renderWork(doc) {
  console.log("pasok");
  let containerWork = document.createElement('div');

  let workImg = document.createElement('img');
  let a = document.createElement('a');

  containerWork.setAttribute('data-id', doc.id);
  workImg.setAttribute("src", doc.data().Image);
  a.textContent = 'x';

  containerWork.className = "mb-3 pics animation all 2"
  workImg.className = "img-fluid";
  a.className = "closer";

  containerWork.appendChild(workImg);
  containerWork.appendChild(a);

  WorkList.appendChild(containerWork);

  a.addEventListener('click', (e) => {

    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');

    db.collection("Works").doc(id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
    e.preventDefault();
  })

}

const OrgList = document.querySelector('.orgcon');

function renderOrg(doc) {
  console.log("pasok");
  let containerOrg = document.createElement('div');
  let orgImg = document.createElement('img');
  let a = document.createElement('a');

  containerOrg.setAttribute('data-id', doc.id);
  orgImg.setAttribute("src", doc.data().Image);
  a.textContent = 'x';

  orgImg.className = "org1";
  a.className = "closer";

  containerOrg.appendChild(orgImg);
  containerOrg.appendChild(a);

  OrgList.appendChild(containerOrg);

  a.addEventListener('click', (e) => {

    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');

    db.collection("Organizations").doc(id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
    e.preventDefault();
  })

}

const ContactList = document.querySelector('.social-icons');

function renderContacts(doc) {
  console.log("check");
  // let containerCon = document.createElement('div');
  // let ul = document.createElement('ul');
  let li = document.createElement('li');
  let a = document.createElement('a');
  let i = document.createElement('i');
  let x = document.createElement('a');

  li.setAttribute('data-id', doc.id);
  a.setAttribute("href", doc.data().Link);

  i.className = doc.data().Icon;
  // ul.className = "social-icons";
  x.textContent = 'x';
  x.className = 'closer';

  // containerCon.appendChild(ul);
  // ul.appendChild(li);
  li.appendChild(a);
  a.appendChild(i);
  li.appendChild(x);

  ContactList.appendChild(li);


  x.addEventListener('click', (e) => {

    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');

    db.collection("Contacts").doc(id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
    e.preventDefault();
  })
}



const EducationList = document.querySelector('.flip-cards');

function renderEducation(doc) {
  console.log("check");
  let containerEduc = document.createElement('div');
  let containerEducation1 = document.createElement('div');
  let containerEducation2 = document.createElement('div');
  let containerEducation3 = document.createElement('div');
  let containerEducation4 = document.createElement('div');
  let figFront = document.createElement('figure');
  let figBack = document.createElement('figure');
  let educFront = document.createElement('img');
  let educBack = document.createElement('img');
  let ul = document.createElement('ul');
  let nameli = document.createElement('li');
  let levelli = document.createElement('li');
  let yearli = document.createElement('li');
  let abbr = document.createElement('button');
  let schoolLink = document.createElement('a');
  let a = document.createElement('a');

  containerEducation1.setAttribute('data-id', doc.id);
  educFront.setAttribute("src", doc.data().Image);
  educBack.setAttribute("src", doc.data().Image);
  nameli.textContent = doc.data().SchoolName;
  levelli.textContent = doc.data().Level;
  yearli.textContent = doc.data().Year;
  abbr.textContent = doc.data().abb;
  schoolLink.setAttribute("href", doc.data().Link);
  a.textContent = 'x';

  containerEducation1.className = "flip-card-container";
  containerEducation2.className = "flip-card";
  containerEducation3.className = "card-front";
  containerEducation4.className = "card-back";
  ul.className = "details";
  nameli.className = "details1";
  levelli.className = "details1";
  yearli.className = "details1";
  a.className = "closer";

  containerEduc.appendChild(containerEducation1);
  containerEducation1.appendChild(containerEducation2);
  containerEducation2.appendChild(containerEducation3);
  containerEducation2.appendChild(containerEducation4);
  containerEducation1.appendChild(a);
  containerEducation3.appendChild(figFront);
  figFront.appendChild(educFront);
  containerEducation3.appendChild(ul);
  ul.appendChild(nameli);
  ul.appendChild(levelli);
  ul.appendChild(yearli);
  containerEducation4.appendChild(figBack);
  figBack.appendChild(educBack);
  containerEducation4.appendChild(schoolLink);
  schoolLink.appendChild(abbr);



  EducationList.appendChild(containerEducation1);

  a.addEventListener('click', (e) => {

    e.stopPropagation();
    let id = e.target.parentElement.getAttribute('data-id');

    db.collection("Education").doc(id).delete().then(function () {
      console.log("Document successfully deleted!");
    }).catch(function (error) {
      console.error("Error removing document: ", error);
    });
    e.preventDefault();
  })

}