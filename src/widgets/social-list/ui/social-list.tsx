import { SocialLink } from "@/shared/ui"

import { SOCIAL_LINKS } from "../constants"

export const SocialList = () => {
    return (
        <ul className="space-y-2 overflow-hidden">
            {SOCIAL_LINKS.map((socialLink, index) => (
                <li key={index} className="animate-fade-in opacity-0" style={{ animationDelay: `0.${index}s`, animationFillMode: 'forwards' }}>
                    <SocialLink socialLink={socialLink} />
                </li>
            ))}
        </ul>
    )
}