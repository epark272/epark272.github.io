export function Footer() {
  return (
    <footer className="border-t border-base-300 bg-base-100/60 backdrop-blur" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 lg:px-6 py-6 flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-between text-sm text-base-content/80">
        <span>© 2022-{new Date().getFullYear()} Edward Park. All rights reserved.</span>
        <a
          className="link link-hover focus:outline-2 focus:outline-offset-2 focus:outline-blue-600"
          href="https://github.com/epark272/epark272.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View source code on GitHub (opens in new window)"
        >
          View source on GitHub
        </a>
      </div>
    </footer>
  );
}
