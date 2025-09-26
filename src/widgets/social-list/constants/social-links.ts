import { Mail } from "lucide-react";

import { SocialLinkModel } from "@/shared/model";

export const SOCIAL_LINKS: SocialLinkModel[] = [
    {
        name: 'Telgram',
        url: '#',
        icon: Mail,
    },
    {
        name: 'GitHub',
        url: 'https://github.com/nikitavik',
        icon: Github,
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/nikita-kornilov-5428ba216/',
        icon: Linkedin,
    },
];