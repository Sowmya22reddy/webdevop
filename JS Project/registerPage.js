function register(username,emailid,password,mobilNo){
    if(username!== ""){
        console.log("username entered");
       
        if(emailid !==""){
            console.log("email entered");

            if(password !==""){
                console.log("password entered");

                if(mobilNo !=="" && mobilNo.length === 10 ){
                    console.log("phone no. entered");
                }
                else{
                    console.log("Please enter your mobile no.");
        return false;
                }
            }
            else{
                console.log("Please enter your password");
        return false;
            }
        }
        else{
            console.log("Please enter your email");
        return false;
        }
       
    }
    else{
        console.log("Please enter your username");
        return false;
    }
}
register("sowmya","sowmya22reddy@gmail.com","zsa","1234567890");