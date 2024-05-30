
import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../actions/SetCurrentUser";
import { Link } from "react-router-dom";
import "./Auth.css";

function Auth({User, setAuthBtn, setCreatchanel}) {

  const dispatch = useDispatch();
  const onLogOutSuccess = () => {
    dispatch(setCurrentUser(null));
    alert("Log Out SuccessFully");
  };

  return (
    <>
   <div className="Auth_container" onClick={()=>setAuthBtn(false)}>
      <div className="Auth_container2">

         <p className="User_Details">

            <div className="logo_div">
                <p className="logo">
                  {
                    User?.result.name ? (
                      <>{User?.result.name?.charAt(0).toUpperCase() }</>) : (
                        <>{User?.result.email?.charAt(0).toUpperCase()}</>)
                  }
                </p>
            </div>

            <div className="email_Auth">{User?.result.email}</div>
         </p>
        
          <div className="btns_Auth">
          {
            User?.result.name ? (
              <>
              {
                <Link to={`chanel/${User?.result._id}`} className="btn_Auth">
                   Your Chanel
                </Link>
              }
               </>
            ) : (<>
              <input
                type="submit"
                className="btn_Auth"
                value="Create Your Chanel" 
                  onClick={()=>setCreatchanel(true)} />
            </>)
          }
          </div>

          <div className="btn">
            <GoogleLogout
              clientId={
                "605912000605-kv295lc86fm3gpasv9tlvptmpbv6tbrr.apps.googleusercontent.com"
              }
              onLogoutSuccess={onLogOutSuccess}
              render={(renderProps) => (
                <div onClick={renderProps.onClick} className="btn_Auth">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#ffffff" d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"/></svg>
                  Log Out
                </div>
              )}
            />
          </div>

          </div>

      </div>
  </>
  )
}

export default Auth