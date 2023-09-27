"use client";

import { useState } from "react";
import React from "react";
import {
  BoxMessageError,
  BoxMessageSuccess,
  BoxMessageWarning,
} from "./box-message";

export default function SearchForm() {
  const [inputValue, setInputValue] = useState("");
  const [resultMessage, setResultMessage] = useState({ type: "", message: "" });

  const isUrlValid = (input: string) => {
    try {
      new URL(input);
      return true;
    } catch (err) {
      return false;
    }
  };

  const handleCheckLink = async () => {
    if (!isUrlValid(inputValue)) {
      return setResultMessage({ type: "error", message: "Invalid URL" });
    }
    try {
      const response = await fetch(
        `${process.env.API_ENDPOINT}/api/v1/analysis/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ input: inputValue }),
        },
      );

      if (response.ok) {
        const data = await response.json();
        if (data.prediction == 1) {
          setResultMessage({
            type: "warning",
            message: "This site is could be dangerous!",
          });
        } else {
          setResultMessage({
            type: "success",
            message: "This site seems legitimate",
          });
        }
      } else {
        throw new Error("Error in the API call");
      }
    } catch (error) {
      setResultMessage({
        type: "error",
        message:
          "An error occurred while contacting with the API. Please, try again later.",
      });
    }
  };

  return (
    <div className="w-full max-w-sm space-y-2 mx-auto">
      <form className="flex space-x-2" onSubmit={(e) => e.preventDefault()}>
        <input
          className="max-w-lg flex-1 bg-gray-700 text-white border-zinc-700 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-50"
          type="text"
          placeholder="https://example.com/"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <a
          href="#_"
          onClick={handleCheckLink}
          className="inline-block py-2 text-s text-white bg-gray-900 px-5 hover:bg-gray-700 rounded-xl"
        >
          Check Link
        </a>
      </form>
      <p className="text-xs text-zinc-200 dark:text-zinc-100">
        Made with ❤️ by @javi-aranda.&nbsp;
        <a
          className="underline underline-offset-2 text-white"
          href="https://github.com/javi-aranda/pelusa-react"
          target="_blank"
        >
          GitHub
        </a>
      </p>
      <p className="text-xs text-zinc-200 dark:text-zinc-100">
        {resultMessage.type == "success" && (
          <BoxMessageSuccess message={resultMessage.message} />
        )}
        {resultMessage.type == "warning" && (
          <BoxMessageWarning message={resultMessage.message} />
        )}
        {resultMessage.type == "error" && (
          <BoxMessageError message={resultMessage.message} />
        )}
      </p>
    </div>
  );
}
