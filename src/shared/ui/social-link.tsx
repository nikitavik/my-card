import { ExternalLink } from "lucide-react";

import { SocialLinkModel } from "../model";

type SocialLinkProps = {
    socialLink: SocialLinkModel;
};

export const SocialLink = ({ socialLink }: SocialLinkProps) => {
    const Icon = socialLink.icon;

    return (
        <a href={socialLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full p-3 rounded border border-gray-100 bg-white/50 group relative focus:outline-none focus-visible:border-black transition-colors">
            <Icon className="w-4 h-4 text-gray-700 group-hover:text-black transition-colors" />

            <span className="text-gray-800 group-hover:text-black transition-colors tracking-wide">{socialLink.name}</span>

            <ExternalLink className="w-3 h-3 text-gray-500 group-hover:text-gray-700 transition-colors" />
        </a>
    );
};