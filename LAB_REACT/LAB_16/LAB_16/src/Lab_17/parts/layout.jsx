import { Outlet } from "react-router-dom";
import Header from "./header";

function Layout(){
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Header/>
                    </div>
                </div>
                {/* <div className="row">
                    <div className="col-3 border border-primary p-3 text-center">
                        SIDEBAR
                    </div>
                    <div className="col p-3">
                        <Outlet/>
                    </div>
                </div> */}
            </div>
            
        </>
    );
}

export default Layout;