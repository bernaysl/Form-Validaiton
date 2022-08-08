/*form start */
function wrong()
{
    document.getElementById('warning').innerHTML = "please check the entry!";
}
function Control()
{
    if((document.userForm.InputEmail.value == "") || (document.userForm.InputPassword.value == ""))
    { 
        wrong(); // warning!
        return false; // form isnt submitted
    }
    else
    {        
        return true; // submit form
    }
}    
/*form end */
