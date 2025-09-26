import { URLS } from "@/shared/constants";

export function JsonScheema() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Nikita Kornilov",
        jobTitle: "Software Engineer",
        description: "Full-stack developer specializing in modern web technologies. Passionate about creating exceptional user experiences.",
        url: URLS.BASE_URL,
        sameAs: [
            URLS.GITHUB_URL, URLS.LINKEDIN_URL, URLS.TELEGRAM_URL
        ],
        knowsAbout: [
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Web Development",
            "Full-Stack Development"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
            }}
        />
    );
}
