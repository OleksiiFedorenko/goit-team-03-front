import { Suspense } from "react";
import { Outlet } from "react-router-dom"; 

export const Container = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>
        </div>
    )
}