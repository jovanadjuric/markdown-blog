import React, { useState } from "react";

function DarkTheme() {
  return (
    <>
      <style jsx global>
        {`
          /* Dark Theme */
          :root {
            --background-color: rgb(34, 34, 34);
            --text-color: rgb(196, 196, 196);
            --link-color: rgb(202, 150, 38);
          }
        `}
      </style>
    </>
  );
}

export default DarkTheme;
