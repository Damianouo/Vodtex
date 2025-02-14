import { NavLink, useLoaderData } from "react-router";
import X from "../assets/icons/X";
import Instagram from "../assets/icons/Instagram";
import Youtube from "../assets/icons/Youtube";
import Discord from "../assets/icons/Discord";
import Tiktok from "../assets/icons/Tiktok";
import caedrelThumbnail from "../assets/images/caedrelThumbnail.jpg";
import Photo from "../assets/icons/Photo";
import PageTransition from "./PageTransition";
import StableOutlet from "./StableOutlet";

function User() {
  const userData = useLoaderData();
  if (!userData) {
    return <UserSkeleton />;
  }
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr] p-4">
      <UserInfo />
      <PageTransition>
        <StableOutlet />
      </PageTransition>
    </div>
  );
}

export default User;

function UserInfo() {
  const userData = useLoaderData();
  return (
    <header className="">
      <div className="flex items-center justify-center">
        <img src={userData.thumbnail} alt="user thumbnail" className="size-20 rounded-full" />
        <div className="p-4">
          <span className="text-2xl">@{userData.userId}</span>
          <div
            className="mt-1 flex items-center gap-1"
            hidden={userData.socialMediaLinks.length <= 0}
          >
            {userData.socialMediaLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                className="hover-bg block rounded-lg p-1"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div>
        <NavLink>Links</NavLink>
        <NavLink to="vods">Vods</NavLink>
        <NavLink to="/">Home</NavLink>
      </div>
    </header>
  );
}

function UserSkeleton() {
  const emptySocialMediaLinks = [
    { platform: "x", icon: <X /> },
    { platform: "instagram", icon: <Instagram /> },
    { platform: "youtube", icon: <Youtube /> },
    { platform: "discord", icon: <Discord /> },
    { platform: "tiktok", icon: <Tiktok /> },
  ];
  return (
    <div className="flex flex-col items-center gap-20">
      <div className="flex animate-pulse items-center">
        <div className="bg-cinder-800 flex size-20 items-center justify-center rounded-full">
          <Photo className="text-cinder-500 size-10" />
        </div>
        <div className="p-4">
          <span className="text-cinder-500 bg-cinder-800 block h-8 w-44 rounded-md text-2xl">
            @
          </span>
          <div className="mt-1 flex items-center gap-1">
            {emptySocialMediaLinks.map((link) => (
              <button key={link.platform} type="button" className="text-cinder-700 rounded-lg p-1">
                {link.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-3xl">The page you&apos;re looking for doesn&apos;t exits.</h1>
        <NavLink to="/admin" className="btn text-xl">
          Join Vodtex Now
        </NavLink>
      </div>
    </div>
  );
}

export function loader() {
  return {
    userId: "caedrel",
    thumbnail: caedrelThumbnail,
    socialMediaLinks: [
      { platform: "x", icon: <X />, url: "https://x.com/caedrel" },
      { platform: "instagram", icon: <Instagram />, url: "https://www.instagram.com/caedrel" },
      { platform: "youtube", icon: <Youtube />, url: "https://www.youtube.com/Caedrel" },
      { platform: "discord", icon: <Discord />, url: "https://discord.com/invite/caedrel" },
      { platform: "tiktok", icon: <Tiktok />, url: "https://www.tiktok.com/@caedrel" },
    ],
    links: [
      { image: caedrelThumbnail, title: "X", url: "https://x.com/caedrel" },
      { image: caedrelThumbnail, title: "Instagram", url: "https://www.instagram.com/caedrel" },
      { title: "Youtube", url: "https://www.youtube.com/Caedrel" },
      { title: "Caedrel Clips - my second channel", url: "https://www.youtube.com/Caedrel" },
      {
        image: caedrelThumbnail,
        title: "Join Our Discord",
        url: "https://discord.com/invite/caedrel",
      },
      { image: caedrelThumbnail, title: "Tiktok", url: "https://www.tiktok.com/@caedrel" },
    ],
  };
}
