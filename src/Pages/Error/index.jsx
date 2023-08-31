import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import React from "react";

export default function Error()
{
    const error = useRouteError();

    if(isRouteErrorResponse(error)){
        return (
            <>
            <div>
                Sorry, the page you requested could not be found.
            </div>
            </>
        );
    }

    throw error;
}