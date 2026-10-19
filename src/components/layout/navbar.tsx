export default function Navbar() {
    return (
        <header className="flex items-center justify-center bg-slate-800 p-4 text-white">
            <nav className="flex w-full max-w-3xl items-center justify-center gap-8" aria-label="Main navigation">
                <a href="#home" className="transition-colors hover:text-slate-300">Home</a>
                <a href="#about" className="transition-colors hover:text-slate-300">About</a>
                <div className="group relative">
                    <span className="flex cursor-default items-center gap-1 transition-colors group-hover:text-slate-300 group-focus-within:text-slate-300">
                        Contact
                        <span className="text-xs transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true">
                            ▼
                        </span>
                    </span>
                    <div className="invisible absolute left-1/2 top-full z-10 w-48 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                        <div role="menu" className="origin-top rounded-lg bg-white p-2 text-slate-800 shadow-lg ring-1 ring-slate-200">
                            <a
                                href="https://x.com/ayushcodingz"
                                target="_blank"
                                rel="noreferrer"
                                role="menuitem"
                                className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-slate-100"
                            >
                                X
                            </a>
                            <a
                                href="https://www.linkedin.com/in/ayush-sinha-965212316/"
                                target="_blank"
                                rel="noreferrer"
                                role="menuitem"
                                className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-slate-100"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/asxayush"
                                target="_blank"
                                rel="noreferrer"
                                role="menuitem"
                                className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-slate-100"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
                <a href="#projects" className="transition-colors hover:text-slate-300">Projects</a>
            </nav>
        </header>
    )
}