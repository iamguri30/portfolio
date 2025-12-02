// function send_mail() {
//     var name = jQuery("#name").val();
//     var email = jQuery("#email").val();
//     var subject = jQuery("#subject").val();
//     var message = jQuery("#message").val();
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     var flag = 0;

//     if (name == "") {
//         jQuery("#name").addClass('invalid');
//         jQuery("#val_user_name").html("Your Name is Required");
//         flag = 1;
//     } else {
//         jQuery("#name").removeClass('invalid');
//         jQuery("#val_user_name").html("");
//     }

//     if (email == "") {
//         jQuery("#email").addClass('invalid');
//         jQuery("#val_user_email").html("Please Enter Email");
//         flag = 1;
//     } else if (!email.match(mailformat)) {
//         jQuery("#email").addClass('invalid');
//         jQuery("#val_user_email").html("Please Enter Valid Email");
//         flag = 1;
//     } else {
//         jQuery("#email").removeClass('invalid');
//         jQuery("#val_user_email").html("");
//     }

//     if (subject == "") {
//         jQuery("#subject").addClass('invalid');
//         jQuery("#val_subject").html("Subject is Required");
//         flag = 1;
//     } else {
//         jQuery("#subject").removeClass('invalid');
//         jQuery("#val_subject").html("");
//     }

//     if (message == "") {
//         jQuery("#message").addClass('invalid');
//         jQuery("#val_message").html("Please Describe your thoughts");
//         flag = 1;
//     } else {
//         jQuery("#message").removeClass('invalid');
//         jQuery("#val_message").html("");
//     }

//     if (flag == 1) return false;

//     var data = {
//         name: name,
//         email: email,
//         subject: subject,
//         message: message
//     };

//     jQuery.ajax({
//         type: "POST",
//         url: "https://formsubmit.co/ajax/kaur.gurleen.6810@gmail.com",
//         data: data,
//         dataType: "json",
//         success: function(response) {
//             jQuery('#suce_message').show();
//             jQuery('#err_message').hide();
//             jQuery("#contact-form")[0].reset();
//         },
//         error: function() {
//             jQuery('#err_message').show();
//             jQuery('#suce_message').hide();
//         }
//     });
// }

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();
    let statusMessage = document.getElementById("status-message");

    // Validation
    if (!name || !email || !subject || !message) {
        statusMessage.style.display = "block";
        statusMessage.style.color = "red";
        statusMessage.innerText = "Please fill all fields!";
        return;
    }

    // Ajax Request to FormSubmit
    fetch("https://formsubmit.co/ajax/kaur.gurleen.6810@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            message: message
        })
    })
        .then(res => res.ok ? res.json() : Promise.reject(res))
        .then(data => {
            statusMessage.style.display = "block";
            statusMessage.style.color = "green";
            statusMessage.innerText = "Message sent successfully!";
            document.getElementById("contact-form").reset();
        })
        .catch(error => {
            statusMessage.style.display = "block";
            statusMessage.style.color = "red";
            statusMessage.innerText = "Failed to send message. Try again!";
        });
});
