import { SocialList } from "@/widgets/social-list";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center p-6 relative overflow-hidden">
      <div
        className="bg-whiste/90 backdrop-blur-sm border border-gray-200/50 rounded-lg p-8 shadow-2xl shadow-black/5"
      // whileHover={{
      //   scale: 1.02,
      //   boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.08)"
      // }}
      // transition={{ duration: 0.3 }}
      >
        <h1 className="mb-2">Nikita Kornilov</h1>

        <a href="mailto:nikita.kornilov@gmail.com">
          kornilov.nikita.01@gmail.com
        </a>

        <div className="mt-2">
          <SocialList />
        </div>
      </div>
    </div>
  );
}
