module.exports = function(eleventyConfig) {
    // Zkopíruj css a images složky do výsledného _site
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("images");
  
    return {
      dir: {
        input: "src",       // složka se šablonami a stránkami
        includes: "../_includes", // kde budou layouty
        output: "_site"     // výstupní složka
      }
    };
  };
  
  