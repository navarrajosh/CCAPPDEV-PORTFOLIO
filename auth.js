// auth status changes
auth.onAuthStateChanged(user => {
    if (user) {
        alert('user logged in: ', user);

        db.collection('Education').onSnapshot(snapshot => {
            let editEducation = snapshot.docChanges();
            editEducation.forEach(change => {
                if (change.type == 'added') {
                    renderEducation(change.doc);
                } else if (change.type == 'removed') {
                    let EducationCollection = EducationList.querySelector('[data-id= ' + change.doc.id + ']');
                    EducationList.removeChild(EducationCollection);
                }
                UIsetup(user);
            })
        })
        db.collection('Works').onSnapshot(snapshot => {
            let editWork = snapshot.docChanges();
            editWork.forEach(change => {
                if (change.type == 'added') {
                    renderWork(change.doc);
                } else if (change.type == 'removed') {
                    let WorkCollection = WorkList.querySelector('[data-id= ' + change.doc.id + ']');
                    WorkList.removeChild(WorkCollection);
                }
            })
            UIsetup(user);
        })

        db.collection('Organizations').onSnapshot(snapshot => {
            let editOrg = snapshot.docChanges();
            editOrg.forEach(change => {
                if (change.type == 'added') {
                    renderOrg(change.doc);
                } else if (change.type == 'removed') {
                    let OrgCollection = OrgList.querySelector('[data-id= ' + change.doc.id + ']');
                    OrgList.removeChild(OrgCollection)
                }
            })
            UIsetup(user);
        })

        db.collection('Contacts').onSnapshot(snapshot => {
            let editContacts = snapshot.docChanges();
            editContacts.forEach(change => {
                if (change.type == 'added') {
                    renderContacts(change.doc);
                } else if (change.type == 'removed') {
                    let ContactCollection = ContactList.querySelector('[data-id= ' + change.doc.id + ']');
                    ContactList.removeChild(ContactCollection)
                }
            })
            UIsetup(user);
        })

        db.collection('Me').onSnapshot(snapshot => {
            let editAbout = snapshot.docChanges();
            editAbout.forEach(change => {
                if (change.type == 'added') {
                    renderAbout(change.doc);
                } else if (change.type == 'removed') {
                    let AboutCollection = aboutList.querySelector('[data-id= ' + change.doc.id + ']');
                    aboutList.removeChild(AboutCollection)
                }
            })
            UIsetup(user);
        })

        UIsetup(user);
    } else {
        alert('user logged out ');
        UIsetup();

    }
});



//logout
const logout = document.querySelector('#Logout');
logout.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log('User Signed Out');
    });
});


//login
const loginform = document.querySelector('#Login');
loginform.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = loginform['loginEmail'].value;
    const password = loginform['loginPassword'].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        console.log(cred.user)

        const modal = document.querySelector('#SignIn');
        M.Modal.getInstance(modal).close();
        loginform.reset();
    });
});

const schoolForm = document.querySelector('#School-Data');

schoolForm.addEventListener('submit', (e) => {
    e.preventDefault();


    db.collection('Education').add({
        Image: schoolForm['imgSchool'].value,
        Level: schoolForm['inLevel'].value,
        Link: schoolForm['inLink'].value,
        SchoolName: schoolForm['inSchool'].value,
        Year: schoolForm['inYear'].value,
        abb: schoolForm['inAbb'].value,
    }).then(() => {
        schoolForm.reset();
    })
});


const contactsForm = document.querySelector('#Contacts-Data');

contactsForm.addEventListener('submit', (e) => {
    e.preventDefault();


    db.collection('Contacts').add({
        Icon: contactsForm['IconImg'].value,
        Link: contactsForm['cLink'].value,
    }).then(() => {
        contactsForm.reset();
    })
});

const OrgForm = document.querySelector('#Organizations-Data');

OrgForm.addEventListener('submit', (e) => {
    e.preventDefault();


    db.collection('Organizations').add({
        Image: OrgForm['Orglogo'].value
    }).then(() => {
        OrgForm.reset();
    })
});

const WorkForm = document.querySelector('#Works-Data');

WorkForm.addEventListener('submit', (e) => {
    e.preventDefault();


    db.collection('Works').add({
        Image: WorkForm['wImage'].value
    }).then(() => {
        WorkForm.reset();
    })
});

const MeForm = document.querySelector('#Me-Data');

MeForm.addEventListener('submit', (e) => {
    e.preventDefault();


    db.collection('Me').add({
        Text: MeForm['inText'].value
    }).then(() => {
        MeForm.reset();
    })
});