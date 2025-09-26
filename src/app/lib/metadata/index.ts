import type { Metadata, Viewport } from "next";

import { URLS } from "@/shared/constants";

export const metadata: Metadata = {
    metadataBase: new URL(URLS.BASE_URL),
    title: {
        default: "Nikita Kornilov",
        template: "%s | Nikita Kornilov",
    },
    description: "Full-stack developer specializing in modern web technologies. Passionate about creating exceptional user experiences.",
    keywords: ["software developer", "full-stack", "react", "nextjs", "nodejs", "typescript", "web development", "python", "ai"],
    authors: [{ name: "Nikita Kornilov" }],
    creator: "Nikita Kornilov",
    publisher: "Nikita Kornilov",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: URLS.BASE_URL,
        title: "Nikita Kornilov - Software Developer",
        description: "Full-stack developer specializing in modern web technologies.",
        siteName: "Nikita Kornilov",
        // images: [
        //     {
        //         url: "/og-image.jpg", // Add this image to your public folder
        //         width: 1200,
        //         height: 630,
        //         alt: "Nikita Kornilov - Software Developer",
        //     },
        // ],
    },
    twitter: {
        // card: "summary_large_image",
        title: "Nikita Kornilov - Software Developer",
        description: "Full-stack developer specializing in modern web technologies.",
        // images: ["/og-image.jpg"], // Add this image to your public folder
        // creator: "@yourtwitterhandle", // Replace with your Twitter handle
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    // verification: {
    // google: "your-google-site-verification", // Add your verification codes
    // yandex: "your-yandex-verification",
    // other: {
    //     "msvalidate.01": "your-bing-verification", // Bing verification
    // },
    // },
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: [
        { media: "(prefers-color-scheme: light)", color: "white" },
        { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
};
