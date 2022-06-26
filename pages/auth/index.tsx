import { useRouter } from "next/router";
import { useEffect } from "react";

export default function index() {
    const navigate = useRouter();

    useEffect(() => {
        navigate.replace("/auth/login");
    });

    return (<></>);
}

//index.Layout = AuthLayout;