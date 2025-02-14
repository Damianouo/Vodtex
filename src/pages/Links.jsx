import { useRouteLoaderData } from "react-router";
import { nanoid } from "nanoid";

function Links() {
  const { links } = useRouteLoaderData("user");
  return (
    <div className="flex flex-col justify-between pb-10">
      <ul className="flex flex-col gap-4">
        {links.map((link) => (
          <li key={nanoid()} className="">
            <a
              href={link.url}
              target="_blank"
              className="bg-cinder-900 mx-auto grid max-w-150 grid-cols-[auto_1fr_auto] items-center rounded-md p-2 transition-transform hover:scale-103"
            >
              {link.image ? (
                <img
                  src={link.image}
                  alt="link image"
                  className="size-12 rounded-full object-cover object-center"
                />
              ) : (
                <div className="size-12" />
              )}
              <p className="px-4 text-center font-semibold">{link.title}</p>
              <div className="size-12" />
            </a>
          </li>
        ))}
      </ul>
      <a
        href="http://localhost:5173/admin"
        target="_blank"
        className="bg-cinder-300 mx-auto block w-fit rounded-full px-6 py-4 text-xl font-bold text-black transition-transform hover:scale-105"
      >
        Join Vodtex
      </a>
    </div>
  );
}

export default Links;
