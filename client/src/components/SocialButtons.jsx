export default function SocialButtons({ ariaLabel, href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      aria-label={ariaLabel}
      rel="noopener noreferrer nofollow"
      className="hover:text-txt hover:scale-95 p-1 sm:p-2 transition duration-300"
    >
      {children}
    </a>
  );
}
