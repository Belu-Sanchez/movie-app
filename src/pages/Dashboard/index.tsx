import { FC, useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Banner, Scroll} from "../../components/commons"




const Dashboard = () => {

    return (
        <>
            <Banner />
            <Scroll />
           
        </>
    );
}

export { Dashboard };