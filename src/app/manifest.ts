import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Nikita Kornilov",
        short_name: "Nikita",
        description: "Personal website of Nikita Kornilov",
        start_url: "/",
        display: "browser",
        background_color: "#ffffff",
        theme_color: "#000000",
    };
}
