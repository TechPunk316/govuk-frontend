const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const fs = require('fs')
const path = require('path')
const paths = require('./config/paths.json')
const views = ['src/views', 'src/components', 'src/examples']

nunjucks.configure(views, {
  autoescape: true,
  express: app,
  noCache: true,
  watch: true
})
app.set('view engine', 'njk')

app.set('port', (process.env.PORT || 3000))

app.get('/', function (req, res) {
  res.render('default')
})

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'))
})

// Components
app.get('/components*', function (req, res) {
  var path = (req.params[0]).replace(/\//g, '')

  // Get component path, component njk and component html files
  try {

    var componentNjk = fs.readFileSync('src/components/' + path + '/' + path + '.njk', 'utf8')
    var componentHtml = fs.readFileSync('src/components/' + path + '/' + path + '.html', 'utf8')

    res.locals.componentPath = path
    res.locals.componentNunjucksFile = componentNjk
    res.locals.componentHtmlFile = componentHtml

  } catch (e) {
    console.log('Error:', e.stack)
  }

  res.render(path, { componentPath: res.locals.componentPath, componentNunjucksFile: res.locals.componentNunjucksFile, componentHtmlFile: res.locals.componentHtmlFile }, function (err, html) {
    if (err) {
      res.render(path + '/' + 'index', function (err2, html) {
        if (err2) {
          res.status(404).send(err + '<br>' + err2)
        } else {
          res.end(html)
        }
      })
    } else {
      res.end(html)
    }
  })
})

app.get('/examples*', function (req, res) {
  // var path = (req.params[0]).replace(/\//g, '')
  // res.render(path, function (err, html) {
  //   if (err) {
  //     res.render(path + '/' + path, function (err2, html) {
  //       if (err2) {
  //         res.status(404).send(err + '<br>' + err2)
  //       } else {
  //         res.end(html)
  //       }
  //     })
  //   } else {
  //     res.end(html)
  //   }
  // })
  res.render('index')
})
// Note: you must place sass-middleware *before* `express.static` or else it will
// not work.
// app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static('public'))
