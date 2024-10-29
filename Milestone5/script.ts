const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplay = document.getElementById('resume-display') as HTMLDivElement
const shareableLink = document.getElementById('sharable-link') as HTMLDivElement
const shareLink = document.getElementById('share-link') as HTMLAnchorElement
const downlodPdf = document.getElementById('downlod-pdf') as HTMLButtonElement

// Handle form submission
form.addEventListener('submit',(event:Event)=>{
    event.preventDefault() // prevnt page relode

    // collct form value
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value


// Save form data in localStorage with the username as the key
const resumeData = {
    name,
    email,
    phone,
    education,
    experience,
    skills
    };
   // localStorage.setItem(username, JSON.stringify(resumeData)); // Saving the data locally

    //Generate the resume

    const resumeHtml = `
    <h2><b> Editable Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name:</b><span contenteditable="true">${name}</span></p>
    <p><b>Email:</b><span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

    <h3>Education</h3>
    <p contenteditable="true">${education}</p>

    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>

    <h3>Skills</h3>
    <p contenteditable="true"> ${skills}</p>
    
    `;

    //Display Resume
   
        resumeDisplay.innerHTML = resumeHtml;
        
        //Generate a shareable url
        const shareableURL =
`${window.location.origin}?username=${encodeURIComponent(username)}`;

// Display the shareable link
shareableLink.style.display = 'block';
shareLink.href = shareableURL;
shareLink.textContent = shareableURL;

});

// Handle PDF download
downlodPdf.addEventListener('click', () => {
    window.print(); // This will open the print dialog and allow the user to save as PDF
    });
    // Prefill the form based on the username in the URL
    window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');
    if (username) {
    
    // Autofill form if data is found in localStorage
    const savedResumeData = localStorage.getItem(username);
    if (savedResumeData) {
    const resumeData = JSON.parse(savedResumeData);
    (document.getElementById('username') as HTMLInputElement).value =
    username;
    (document.getElementById('name') as HTMLInputElement).value =
    resumeData.name;
    (document.getElementById('email') as HTMLInputElement).value =
    resumeData.email;
    (document.getElementById('phone') as HTMLInputElement).value =
    resumeData.phone;
    (document.getElementById('education') as HTMLTextAreaElement).value =
    resumeData.education;
    (document.getElementById('experience') as HTMLTextAreaElement).value
    = resumeData.experience;
    (document.getElementById('skills') as HTMLTextAreaElement).value =
    resumeData.skills;
    }
    }
    });