"use client";

import { useState, useEffect } from "react";
import React from "react";
import { BoxMessage } from "./box-message";
import useApi from "../hooks/useApi";
import getPrediction from "../providers/apiPrediction";
import { handlePreventDefault, isUrlValid } from "../shared/utils";
import { MessageStatus } from "../shared/status";
import { PredictionResult } from "../interfaces/PredictionResult";

export default function SearchForm() {
  const [inputValue, setInputValue] = useState("");
  const [resultMessage, setResultMessage] = useState({
    type: MessageStatus.NONE,
    message: "",
  });
  const predictionApi = useApi(getPrediction);

  useEffect(() => {
    if (predictionApi.data !== null) {
      displayBoxMessage();
    }
  }, [predictionApi.data]);

  const handleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCheckLink = async () => {
    if (!isUrlValid(inputValue)) {
      setResultMessage({
        type: MessageStatus.WARNING,
        message: "The URL provided is not valid, please review and try again.",
      });
      return;
    }

    await predictionApi.request(inputValue);
  };

  const displayBoxMessage = () => {
    const predictionResult = predictionApi.data as unknown as PredictionResult;
    if (predictionResult.prediction) {
      setResultMessage({
        type: MessageStatus.ERROR,
        message: "This site could be dangerous!",
      });
    } else if (!predictionResult.prediction) {
      setResultMessage({
        type: MessageStatus.SUCCESS,
        message: "This site seems legitimate.",
      });
    } else {
      setResultMessage({
        type: MessageStatus.WARNING,
        message:
          "The prediction service is not available, please try again later.",
      });
    }
  };

  return (
    <div className="w-full max-w-lg space-y-2 mx-auto">
      <form className="flex space-x-2" onSubmit={handlePreventDefault}>
        <input
          className="max-w-lg flex-1 bg-gray-700 text-white border-zinc-700 rounded-xl py-2 px-4 focus:outline-none focus:ring-2 focus:ring-zinc-50"
          type="text"
          placeholder="https://example.com/"
          value={inputValue}
          onChange={handleInputValue}
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
      <div className="text-xs text-zinc-200 dark:text-zinc-100">
        <BoxMessage message={resultMessage.message} type={resultMessage.type} />
      </div>
    </div>
  );
}
