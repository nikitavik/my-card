import { Github, Linkedin } from "lucide-react";

import type { SocialLinkModel } from "@/shared/model";

import { TelegramIcon } from "./telegram-icon";

export const SOCIAL_LINKS: SocialLinkModel[] = [
    {
        name: "Telegram",
        url: "https://t.me/rokkkettochikubi",
        icon: TelegramIcon,
    },
    {
        name: "GitHub",
        url: "https://github.com/nikitavik",
        icon: Github,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nikita-kornilov-5428ba216",
        icon: Linkedin,
    },
];
