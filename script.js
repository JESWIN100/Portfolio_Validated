function handleSubmit(e) {
    e.preventDefault();

    const fullname = document.getElementById('fullname').value;
    const fullnameError = document.getElementById('fullnameError');
    const fullnamePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;

    const email = document.getElementById('email').value;
    const emailError = document.getElementById('emailError');
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    let comment = document.getElementById('comment').value;
    const commentError = document.getElementById('commentError');

    const subject = document.getElementById('subject').value;
    const subjectError = document.getElementById('subjectError');

    let isValid = true;

    if (!fullnamePattern.test(fullname)) {
        fullnameError.style.display = 'block';
        fullnameError.style.color = 'red';
        fullnameError.innerHTML = 'Please enter your full name (first & last name)!';
        isValid = false;
    } else {
        fullnameError.innerHTML = 'Valid name given.';
        fullnameError.style.color = 'green';
    }

    if (!emailPattern.test(email)) {
        emailError.style.display = 'block';
        emailError.style.color = 'red';
        emailError.innerHTML = 'Please enter a valid email address!';
        isValid = false;
    } else if(emailPattern.test(email)===false){
        emailError.innerHTML = 'Please enter the proper email address!';
    }else{
        emailError.innerHTML = 'Valid email given.';
        emailError.style.color = 'green';
    }

    if (subject.length < 3) {
        subjectError.style.display = 'block';
        subjectError.style.color = 'red';
        subjectError.innerHTML = 'Subject should contain a minimum of 3 letters!';
        isValid = false;
    } else {
        subjectError.innerHTML = 'Valid subject.';
        subjectError.style.color = 'green';
    }

    if (comment.length < 3 || comment.length > 15) {
        commentError.style.display = 'block';
        commentError.style.color = 'red';
        commentError.innerHTML = 'Comment should contain between 3 and 15 characters!';
        isValid = false;
    } else {
        commentError.innerHTML = 'Valid comment.';
        commentError.style.color = 'green';
    }

    if (isValid) {
        alert('Submitted Successfully');
        window.location.reload();
    } 
}
