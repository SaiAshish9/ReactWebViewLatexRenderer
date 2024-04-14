import React from "react";
import { WebView } from "react-native-webview";

const MathMarkdown = ({ content }) => {
  // HTML template that includes mathpix-markdown-it processing
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://unpkg.com/mathpix-markdown-it/dist/mathpix-markdown-it.min.js"></script>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }
        .markdown-body { padding: 20px; }
      </style>
    </head>
    <body>
      <div id="content" class="markdown-body"></div>
      <script>
        document.addEventListener("DOMContentLoaded", function() {
          var md = window.MathpixMarkdownIt({
            html: true,
            xhtmlOut: true,
            breaks: true,
            linkify: true,
            typographer: true,
            highlight: function (/*str, lang*/) { return ''; }
          });

          var result = md.render(\`${content}\`);
          document.getElementById('content').innerHTML = result;
        });
      </script>
    </body>
    </html>
  `;

  return (
    <WebView
      originWhitelist={["*"]}
      //   source={{ html: htmlContent }}
      source={{ uri: "https://reactnative.dev/" }}
      style={{ flex: 1 }}
    />
  );
};

export default MathMarkdown;
