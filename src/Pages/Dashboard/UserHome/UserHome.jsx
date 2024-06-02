import useAuth from "../../../hooks/useAuth";

 

const UserHome = () => {
    const {user}= useAuth();
    return (
        <div>
            <h1 className="text-3xl">
                <span>Hi, Welcome</span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h1>
            
        </div>
    );
};

export default UserHome;