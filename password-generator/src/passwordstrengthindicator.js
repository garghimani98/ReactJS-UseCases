import React,{Fragment} from "react";

export const PasswordStrengthIndicator=({password=""})=>{
 const getpasswordstrength=()=>{
    const passwordlength=password.length;
    if(passwordlength<1){
              return "";
    }
    else if(passwordlength<4)
    {
        return "Very weak";
    }

    else if(passwordlength<8)
    {
        return "weak";
    }

    else if(passwordlength<12)
    {
        return "Medium";
    }

    else if(passwordlength<16)
    {
        return "Strong";
    }

    else 
    {
        return "Strongest";
    }
}

const indicator=getpasswordstrength();
            if(indicator===""){
                return (<Fragment></Fragment>)
            }
            else{
                return(
                    <div className="password-strength">
                          Strength:<span style={{fontWeight:"bold"}}>{indicator}</span>
                    </div>
                )
                
            }
 }