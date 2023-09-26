import React from "react";

// TODO: This component could be improved
export function BoxMessageError({ message }: { message: string }) {
  return (
    <div className="bg-red-800 text-white rounded-xl p-4">
      <p className="text-sm">{message}</p>
    </div>
  );
}

export function BoxMessageSuccess({ message }: { message: string }) {
  return (
    <div className="bg-green-800 text-white rounded-xl p-4">
      <p className="text-sm">{message}</p>
    </div>
  );
}

export function BoxMessageWarning({ message }: { message: string }) {
  return (
    <div className="bg-yellow-800 text-white rounded-xl p-4">
      <p className="text-sm">{message}</p>
    </div>
  );
}
