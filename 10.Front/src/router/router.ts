
export const routes = [
    {
        path: "/",
        label: "Inicio",
        renderComponent: HomePage.render(),
    },
    {
        path: "/projects",
        label: "Proyectos",
        renderComponent: projectsPage,
    },
    {
        path: "/todo",
        label: "Tareas",
        renderComponent: todoPage,
    },
    {
        path: "/about",
        label: "Cont",
        renderComponent: contactPage,
    },
];



export const navigate = (url = "", addHistory = true) => {
    console.log("URL for navigate", url);
    console.log(history.state)

    if (history.state?.url  === url) {
        return;
    }

    if (addHistory) {
        history.pushState({ url }, "", url);
    }
    const path = url.split("/").pop() as string;
    const route = routes.find((o) => o.path === "/" + path);

    if (route) {
        route.renderComponent();
    }
};

// export function loadPPath() {
//     console.log("Loaded path");
//     const path = window.location.pathname;
//     const route = path.split("/").pop();
//     if (route === "index.html") {
//         showRoute("home");
//     } else {
//         showRoute(route);
//     }
// }
