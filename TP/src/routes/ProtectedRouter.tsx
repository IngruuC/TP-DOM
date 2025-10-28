import {Navigate, Outlet} from "react-router-dom";

interface ProtectedRouterProps {
    isAllowed: boolean;
    redirectTo?: string;
    children?: React.ReactNode;
}

export const ProtectedRouter = ({isAllowed, redirectTo = '/login', children}: ProtectedRouterProps) => {
    if (!isAllowed) {
        return <Navigate to={redirectTo} />;
    }
    return <>{children}</> || <Outlet />;
}
