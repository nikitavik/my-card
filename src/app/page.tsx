import { SocialList } from "@/widgets/social-list";
import { EmailLink } from "@/shared/ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-6 relative overflow-hidden">
      <div
        className="bg-whiste/90 backdrop-blur-sm border border-gray-300/50 rounded-lg p-8 shadow-2xl shadow-black/5"
      >
        <h1 className="mb-2">Nikita Kornilov</h1>

        <EmailLink />

        <div className="mt-2">
          <SocialList />
        </div>
      </div>
    </div>
  );
}
