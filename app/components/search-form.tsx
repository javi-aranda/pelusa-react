import React from 'react';

export default function SearchForm() {
    return (
        <div className="w-full max-w-sm space-y-2 mx-auto">
        <form className="flex space-x-2">
            <input
            className="max-w-lg flex-1 bg-gray-700 text-white border-zinc-700 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-50"
            type="text"
            placeholder="https://example.com/"
            />
            <a href="#_" className="inline-block py-2 text-s text-white bg-gray-900 px-5 hover:bg-gray-700 rounded-xl">
            Check Link
            </a>
        </form>
        <p className="text-xs text-zinc-200 dark:text-zinc-100">
            Made with ❤️ by @javi-aranda.&nbsp;
            <a className="underline underline-offset-2 text-white" href="#">
            GitHub
            </a>
        </p>
        </div>
    );
}
