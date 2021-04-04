// From Andy's course on Eleventy with some changes.
const htmlMinTransform = require('./src/transforms/html-min-transform.js')
const { minify } = require('terser')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = (config) => {
  // Set directories to pass through to the dist folder
  config.addPassthroughCopy('./src/fonts/')
  config.addPassthroughCopy('./src/images/')

  // Minify html & inline css
  if (isProduction) {
    config.addTransform('htmlmin', htmlMinTransform)
  }

  // Minify inline js if we're in prod
  config.addNunjucksAsyncFilter('jsmin', async (code, cb) => {
    if (!isProduction) {
      cb(null, code)
    } else {
      try {
        const minified = await minify(code)
        cb(null, minified.code)
      } catch (err) {
        console.log(`Terser error: ${err}`)
        cb(null, code)
      }
    }
  })

  // Tell 11ty to use the .eleventyignore and ignore our .gitignore file
  config.setUseGitIgnore(false)

  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
