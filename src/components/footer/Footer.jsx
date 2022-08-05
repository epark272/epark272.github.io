function Footer() {
  return (
    <div className="Footer w-full bg-white flex flex-col justify-between p-2 border-t border-slate-400">
      <p className="text-sm text-slate-500">
        Copyright © 2022-{new Date().getFullYear()} Eddie Park
      </p>
      <p className="text-sm text-slate-500">
        View this page on{" "}
        <a
          href="https://github.com/epark272/epark272.github.io"
          target="_self"
          rel="noopener noreferrer"
          className="text-blue-600 active:underline"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}

export default Footer;
