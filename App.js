// // import { StatusBar } from "expo-status-bar";
// // import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
// // import MarkdownData from "./data.json";
// // import Markdown, { MarkdownIt } from "react-native-markdown-display";
// // import MathJax3 from "markdown-it-mathjax3";
// // import { MathJaxProvider, MathJaxFormula } from "mathjax3-react";
// // import { WebView } from "react-native-webview";
// // import RenderHtml from "react-native-render-html";

// // const { width } = Dimensions.get("window");

// // export default function App() {
// //   // const markdownItInstance = MarkdownIt({ typographer: true }).use(
// //   //   blockEmbedPlugin,
// //   //   {
// //   //     containerClassName: "video-embed",
// //   //   }
// //   // );

// //   const source = {
// //     html: `
// //     <div dangerouslySetInnerHTML={{__html: 'lorem <b>ipsum</b>'}}
// //     />
// //     `,
// //   };

// //   const formattedData = MarkdownData.map((data) => {
// //     return {
// //       ai: `
// //       ${data.ai}
// //       `,
// //       user: `
// //       ${data.user}
// //       `,
// //     };
// //   });

// //   function renderMardownData() {
// //     return formattedData.map((data) => {
// //       if (data.ai && data.user) {
// //         return (
// //           <View style={styles.item} key={data.user}>
// //             {/* <Markdown debugPrintTree markdownit={markdownItInstance}>
// //               {data.ai}
// //             </Markdown> */}
// //             {/* <WebView>
// //               <MathJaxProvider>
// //                 <MathJaxFormula formula="$$\int x^2dx$$" />
// //               </MathJaxProvider>
// //             </WebView> */}
// //             {/* <RenderHtml contentWidth={width} source={source} /> */}
// //             {/* <WebView
// //               originWhitelist={["*"]}
// //               source={source}
// //             /> */}
// //             {/* <WebView
// //               width={width}
// //               automaticallyAdjustContentInsets={false}
// //               source={require("./a.html")}
// //             /> */}
// //             <WebView
// //               source={{
// //                 html: `<!DOCTYPE html><html><body style="font-size: 3rem">hi</body></html>`,
// //               }}
// //               style={{ flex: 1 }}
// //             />
// //           </View>
// //         );
// //       }
// //     });
// //   }

// //   return (
// //     <View style={styles.container}>
// //       <StatusBar style="auto" />
// //       <ScrollView>{renderMardownData()}</ScrollView>

// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: "#efeae2",
// //     alignItems: "flex-start",
// //     justifyContent: "center",
// //     padding: 20,
// //     paddingTop: 60,
// //   },
// //   item: {
// //     backgroundColor: "#fff",
// //     // borderWidth: 1,
// //     marginBottom: 20,
// //     padding: 10,
// //     borderRadius: 5,
// //     width: width * 0.7,
// //   },
// // });

// import { SafeAreaView, StyleSheet, View } from "react-native";
// import MathMarkdown from "./MathMarkdown"; // Adjust the import path as necessary

// const App = () => {
//   const markdownContent = `
//   # Hello, Math!

//   Here is an inline equation: $E=mc^2$.

//   And here is a block equation:

//   $$x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$$
//   `;

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.view}>
//         <MathMarkdown content={markdownContent} />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // marginTop: 20,
//   },
//   view: {
//     flex: 1,
//     backgroundColor: "#000",
//   },
// });

// export default App;

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  ImageBackground
} from "react-native";
import { WebView } from "react-native-webview";
import MarkdownIt from "markdown-it";
import markdownItMathjax3 from "markdown-it-mathjax3";
import MarkdownData from "./data.json";

// Initialize markdown-it with the mathjax3 plugin
const md = new MarkdownIt();
md.use(markdownItMathjax3);

// Example Markdown content with MathJax equations
const markdownContent = `
Here is an inline equation: $E=mc^2$.

And here is a displayed equation:
$e^{i\\pi} + 1 = 0$

$10\\%$
`;

const { width, height } = Dimensions.get("window");

const App = () => {
  return (
    <SafeAreaView style={styles.sav}>
        <ImageBackground source={{uri:"https://static.whatsapp.net/rsrc.php/v3/yl/r/gi_DckOUM5a.png"}}
        resizeMode="cover"
        style={{
          flex:1
        }}
        >
                <ScrollView style={styles.scrollView}>

        <View style={styles.parent}>
          {MarkdownData.map((data) => {
            const markdownContent = `
${data.ai}
`;

const markdownContent1 = `
${data.user}
`;

            const htmlContent = md.render(markdownContent);
            const htmlContent1 = md.render(markdownContent1);

            return (
              <>
                <View
                  key={data.ai}
                  style={{ ...styles.container, height: data.height1 }}
                >
                  <WebView
                    style={styles.webview}
                    originWhitelist={["*"]}
                    source={{ html: htmlContent }}
                    scalesPageToFit={false}
                    automaticallyAdjustContentInsets={true}
                  />
                </View>
                <View
                  key={data.user}
                  style={{ ...styles.container1, height: data.height2 }}
                >
                  <WebView
                    style={styles.webview1}
                    originWhitelist={["*"]}
                    source={{ html: htmlContent1 }}
                    scalesPageToFit={false}
                    automaticallyAdjustContentInsets={true}
                  />
                </View>
              </>
            );
          })}
        </View>
        </ScrollView>
        </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  webview: {
    justifyContent: "flex-start",
    fontSize: 8,
    backgroundColor: "#fff",
    // "#d9fdd2",
    flex: 1,
  },
  webview1: {
    fontSize: 8,
    backgroundColor: "#d9fdd2",
    flexWrap: "nowrap",
    overflow: "hidden",
    flex: 1
  },
  container: {
    overflow: "hidden",
    borderRadius: 7,
    width: width * 0.75,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  container1: {
    overflow: "hidden",
    borderRadius: 7,
    width: width * 0.75,
    marginHorizontal: 20,
    marginBottom: 10,
    alignSelf: "flex-end",
  },
  sav: {
    flex: 1,
    backgroundColor: "#efeae2",
  },
  scrollView: {
    flex: 1,
  },
  parent: {
    flex: 1,
    marginTop: 60,
    marginBottom: 40
  },
});

export default App;
