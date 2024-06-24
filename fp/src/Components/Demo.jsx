import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./RootLayout";
import ErrorRoute from "./ErrorRoute";
import Home from "./Home/Home";
import Hackathon from "./Hackathon/Hackathon";
import Explore from "./Explore/Explore";
import VJHub from "./VJHub/VJHub";
import Past from "./Hackathon/Past";
import Current from "./Hackathon/Current";
import Upcoming from "./Hackathon/Upcoming";
import Ideas from "./Explore/Ideas";
import Alumini from "./Explore/Alumini";
import Edcell from "./Edcell/Edcell";
import Form from '../Components/Form/Form';

const router = createBrowserRouter([
    {
        path: '',
        element: <RootLayout />,
        errorElement: <ErrorRoute />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: 'hackathon',
                element: <Hackathon />,
                children: [
                    {
                        path: 'past',
                        element: <Past />
                    },
                    {
                        path: 'current',
                        element: <Current />
                    },
                    {
                        path: 'upcoming',
                        element: <Upcoming />
                    }
                ]
            },
            {
                path: 'explore',
                element: <Explore />,
                children: [
                    {
                        path: 'ideas',
                        element: <Ideas />
                    },
                    {
                        path: 'alumini',
                        element: <Alumini />
                    }
                ]
            },
            {
                path: 'form',
                element: <Form />
            },
            {
                path: 'vjhub',
                element: <VJHub />
            },
            {
                path: 'edcell',
                element: <Edcell />
            }
        ]
    }
]);

function Demo() {
    return (
            <RouterProvider router={router} />
    );
}

export default Demo;